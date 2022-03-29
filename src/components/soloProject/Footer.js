import React from "react";
import facebookIcon from "../../images/facebook-icon.png";
import githubIcon from "../../images/github-icon.png";
import instagramIcon from "../../images/instagram-icon.png";
import twitterIcon from "../../images/twitter-icon.png";

export default function Footer() {
  return (
    <div className="footer-section">
      <img src={twitterIcon} />
      <img src={facebookIcon} />
      <img src={instagramIcon} />
      <img src={githubIcon} />
    </div>
  );
}
