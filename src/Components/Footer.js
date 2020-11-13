import React from "react";
// import facebook from "../Assets/img/facebook.png";
// import Github from "../Assets/img/Github.png";
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
        {/* <a href="https://www.linkedin.com/in/cyril-adolf-aab3861b7/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/CyrilAdolf">
          <img src={github} alt="" />
        </a>
        <a href="https://www.facebook.com/adolf.cyril">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/AKyril">
          <img src={twitter} alt="" />
        </a> */}
      </span>
    </div>
  );
};

export default Footer;
