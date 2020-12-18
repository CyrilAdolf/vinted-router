import React from "react";
// import facebook from "../Assets/img/facebook.png";
import Github from "../Assets/img/logoGithub.svg";
// import linkedin from "../Assets/img/linkedin.png";
// import twitter from "../Assets/img/twitter.png";

const Footer = () => {
  return (
    <div className="footer container">
      Made with&nbsp;<span>React&nbsp;</span>at&nbsp;
      <span>
        <a
          href="http://www.lereacteur.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          LeReacteur&nbsp;
        </a>
      </span>
      by&nbsp;
      <span>
        <a
          href="https://github.com/CyrilAdolf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cyril
        </a>
      </span>
      <span>
        <a
          href="https://github.com/CyrilAdolf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
