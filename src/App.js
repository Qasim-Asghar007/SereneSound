import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ASMRSection from "./Components/ASMRSection";
import Chatbot from "./Components/Chatbot";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import OnlineSession from "./Components/OnlineSession";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0.8, filter: "blur(8px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0.8, filter: "blur(5px)" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const ScrollHandler = () => {
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (hasScrolled) return;

    const scrollToSection = () => {
      const { scrollTo } = location.state || {};

      const hash = window.location.hash;

      const targetId = scrollTo || (hash === "#asmr" ? "asmr-section" : null);

      if (targetId) {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setHasScrolled(true);

            if (hash !== "#asmr" && scrollTo === "asmr-section") {
              window.history.replaceState(null, null, "#asmr");
            }
          }
        }, 100);
      }
    };

    scrollToSection();
  }, [location, hasScrolled]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HeroSection />
              <ASMRSection />
            </PageTransition>
          }
        />
        <Route
          path="/chatbot"
          element={
            <PageTransition>
              <Chatbot />
            </PageTransition>
          }
        />
        <Route
          path="/OnlineSession"
          element={
            <PageTransition>
              <OnlineSession />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="fluid-container">
        <Navbar />
        <ScrollHandler />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;