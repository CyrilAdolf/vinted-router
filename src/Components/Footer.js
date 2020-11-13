import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      Made with &nbsp;<span>React &nbsp;</span> at &nbsp;
      <span>
        <a
          href="http://www.lereacteur.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          LeReacteur{" "}
        </a>{" "}
        &nbsp;
      </span>
      by &nbsp;
      <span>
        {" "}
        <a
          href="https://github.com/CyrilAdolf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cyril
        </a>
        <a href="https://www.linkedin.com/in/cyril-adolf-aab3861b7/">
          <FontAwesomeIcon icon="linkedin" className="icon" />
        </a>
        <a href="https://github.com/CyrilAdolf">
          <FontAwesomeIcon icon="Github" className="icon" />
        </a>
        <a href="https://www.facebook.com/adolf.cyril">
          <FontAwesomeIcon icon="facebook" className="icon" />
        </a>
        <a href="https://twitter.com/AKyril">
          <FontAwesomeIcon icon="twitter" className="icon" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
