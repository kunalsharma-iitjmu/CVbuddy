import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';  // Import icons from react-icons
import './about.css';
import image from "../assets/me.jpg";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Creator</h1>
        <p>Kunal Sharma (Btech M&C, IIT Jammu)</p>
      </div>
      <div className="about-content">
        <div className="about-description">
          <p>
            Welcome to Elevate CV! Thank you for visiting Elevate CV—the ultimate CV creation and management tool, designed and developed as part of my Winter Break project during my second year. Whether you are a student, a professional, or anyone looking to create a standout CV, Elevate CV is here to simplify the process.
          </p>
          <p>
            With Elevate CV, you can effortlessly build your CV using a selection of pre-designed templates, crafted to suit a variety of industries and personal preferences. The platform ensures that you can create a visually appealing, professional CV without the hassle of formatting or design work.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="About Us" />
        </div>
      </div>
      <div className="about-footer">
        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/people/Kunal-Sharma/pfbid02bkPPKEc8hFPc7vDsA7Pe9XLFU2FfCqw7LgKceiZGh4fRT6gz81sgejifX1CehVrtl/" target="_blank">
            <FaFacebook size={50} />
          </a>
          <a href="https://x.com/kunalcoder05" target="_blank">
            <FaTwitter size={50} />
          </a>
          <a href="https://www.linkedin.com/in/ks-iitjmu/" target="_blank">
            <FaLinkedin size={50} />
          </a>
          <a href="https://github.com/kunalsharma-iitjmu" target="_blank">
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
