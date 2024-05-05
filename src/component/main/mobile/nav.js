import React from "react";
import Notification from "../../../assets/notificationicon.png";
import Fabits from "../../../assets/logo.png";
import Menu from "../../../assets/menu.svg";
import Account from "../../../assets/account_circle.svg";
import "./nav.css";

/**
 * Navigation bar for logo, menu, account and notification icons
 * @returns {JSX Element}
 */
const nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-subsection">
        <img src={Menu} alt="menu" />
        <img src={Fabits} alt="Fabits" id="fabits-logo" />
      </div>
      <div className="nav-subsection">
        <img src={Notification} alt="notification" />
        <img src={Account} alt="account" />
      </div>
    </nav>
  );
};

export default nav;
