import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/5000/svg" viewBox="0 0 800 320">
  <path fill="#0099ff" fill-opacity="15" d="M0,128L1440,64L1440,320L0,320Z"></path>
</svg>
      <div className="f-content">
        <span>muhammadmuzammil6880@gmail.com</span>
        <div className="f-icons">
        <a href="https://cutt.ly/y2IzkXt" target="_blank"><AiFillLinkedin color="white" size={"3rem"} />  </a>
        <a href="https://github.com/MMuzammil6880" target="_blank">  <Gitub color="white" size={"3rem"} /> </a>
        <a href="https://www.instagram.com/muhammadmuzammil6880/" target="_blank">  <Insta color="white" size={"3rem"} />   </a>
        <a href="https://www.facebook.com/profile.php?id=100070016254733" target="_blank">  <Facebook color="white" size={"3rem"} />  </a>
        

        </div>
      </div>
    </div>
  );
};

export default Footer;
