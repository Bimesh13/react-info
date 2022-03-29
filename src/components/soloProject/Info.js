import React from "react";
import profileImage from "../../images/profile-picture.png";

export default function Info() {
  return (
    <div className="info-section">
      <img src={profileImage} class="profile-image" />
      <h1 className="name-title">Laura Smith</h1>
      <h4 className="designation">Frontend Developer</h4>
      <p className="email">laurasmith.website</p>
      <div className="contact-buttons">
        <button className="email-button">
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="linkedin-button">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
}
