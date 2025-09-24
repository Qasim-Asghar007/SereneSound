import React from "react";
import "./HeroSection.css";
import plantImage from "../assets/plant.png";
import meditationImage from "../assets/meditating.png";
import brain from "../assets/brain.png";
import stars from "../assets/stars.png";
import GradientText from "./GradientText";

const HeroSection = () => {
  return (
    <section className="fluid-container Hero" id="hero">
      <div className="hero-heading">
        <GradientText
          colors={["#6a5acd", "#9370db", "#ba55d3", "#40c4ff", "#6a5acd"]}
          animationSpeed={5}
        >
          Find Your Inner Peace
        </GradientText>
      </div>
      <div className="hero-content">
        <p>
          Discover the perfect sounds to match your mood and elevate your
          well-being. Let our therapeutic audio guide you to tranquility.
        </p>
      </div>
      <div className="fluid-container Quick-guide">
        {" "}
        <h1>Quick Meditation Guide</h1>{" "}
      </div>
      <div className="hero-cards">
        <div className="card-container">
          <img className="card-image" src={plantImage} alt="plant"></img>
          <div className="card-title">
            {" "}
            <h3>Beginner Meditations</h3>{" "}
          </div>
          <div className="card-content">
            {" "}
            <p>Start Your Journey with simple guided sessions</p>{" "}
          </div>
        </div>
        <div className="card-container">
          <img
            className="card-image"
            src={meditationImage}
            alt="meditating"
          ></img>
          <div className="card-title">
            {" "}
            <h3>Relaxation & Stress Relief</h3>{" "}
          </div>
          <div className="card-content">
            {" "}
            <p>Start Your Journey with simple guided sessions</p>{" "}
          </div>
        </div>
        <div className="fluid-container card-container">
          <img className="card-image" src={brain} alt="brain"></img>
          <div className="card-title">
            {" "}
            <h3>Focus & Clarity</h3>{" "}
          </div>
          <div className="card-content">
            {" "}
            <p>Start Your Journey with simple guided sessions</p>{" "}
          </div>
        </div>
        <div className="card-container">
          <img className="card-image" src={stars} alt="stars"></img>
          <div className="card-title">
            {" "}
            <h3>Sleep & Mindfulness</h3>{" "}
          </div>
          <div className="card-content">
            {" "}
            <p>Start Your Journey with simple guided sessions</p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
