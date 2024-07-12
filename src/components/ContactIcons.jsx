import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function ContactIcons() {
  return (
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="mailto:brijp019@gmail.com" title="brijp019@gmail.com" target="_blank">
        <FaEnvelope />
      </a>
      <a href="https://www.linkedin.com/in/brijesh96/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/bp96" target="_blank">
        
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/brijp96/" target="_blank">
        
        <FaInstagram />
      </a>
    </div>
  );
}

export default ContactIcons;
