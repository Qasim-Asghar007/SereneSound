import React from "react";
import PixelCard from "./PixelCard";
import "./OnlineSession.css";

const OnlineSessions = () => {
  return (
    <div className="online-sessions-bg">
      <PixelCard className="therapist-card-content" variant="blue">
        <div
          style={{ padding: "20px", textAlign: "center", position: "absolute" }}
        >
          <img
            src="https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg" // your base64 image
            alt="Therapist Profile"
            className="therapist-photo"
          />
          <h3>Dr. Jane Doe</h3>
          <p>Licensed Therapist</p>
          <p className="tagline">
            "Providing a safe space for growth and healing."
          </p>
          <div className="contact-info">
            <a href="mailto:your_email@example.com" className="contact-button">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="tel:+1234567890" className="contact-button">
              <i className="fas fa-phone-alt text-2xl"></i>
            </a>
          </div>
        </div>
      </PixelCard>
      <PixelCard className="therapist-card-content" variant="blue">
        <div
          style={{ padding: "20px", textAlign: "center", position: "absolute",gap:"10px",margin:'20px' }}
        >
          <img
            src="https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg" // your base64 image
            alt="Therapist Profile"
            className="therapist-photo"
          />
          <h3>Dr. Jane Doe</h3>
          <p>Licensed Therapist</p>
          <p className="tagline">
            "Providing a safe space for growth and healing."
          </p>
          <div className="contact-info">
            <a href="mailto:your_email@example.com" className="contact-button">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="tel:+1234567890" className="contact-button">
              <i className="fas fa-phone-alt text-2xl"></i>
            </a>
          </div>
        </div>
      </PixelCard>
      <PixelCard className="therapist-card-content" variant="blue">
        <div
          style={{ padding: "20px", textAlign: "center", position: "absolute",gap:"10px" }}
        >
          <img
            src="https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg" // your base64 image
            alt="Therapist Profile"
            className="therapist-photo"
          />
          <h3>Dr. Jane Doe</h3>
          <p>Licensed Therapist</p>
          <p className="tagline">
            "Providing a safe space for growth and healing."
          </p>
          <div className="contact-info">
            <a href="mailto:your_email@example.com" className="contact-button">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="tel:+1234567890" className="contact-button">
              <i className="fas fa-phone-alt text-2xl"></i>
            </a>
          </div>
        </div>
      </PixelCard>
    </div>
  );
};

export default OnlineSessions;
