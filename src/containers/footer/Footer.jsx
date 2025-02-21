import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <span>
        Made with
        <FontAwesomeIcon icon={faHeart} beat className="heart-icon" />
        by Licia Pereira | 2024
      </span>
    </div>
  );
}

export default Footer;
