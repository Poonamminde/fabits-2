import React from "react";
import Logo from "../../assets/logo.png";
import NotificationIcon from "../../assets/notificationicon.png";
import Memoji from "../../assets/memoji.svg";
import Menu from "../../assets/more_vert.svg";
import HomeIcon from "../../assets/home.svg";
import PlanGoal from "../../assets/track_changes.svg";
import BubbleChart from "../../assets/bubble_chart.svg";
import Investment from "../../assets/real_estate_agent.svg";
import IPO from "../../assets/add_business.svg";
import Insurance1 from "../../assets/insurance.svg";
import Insurance2 from "../../assets/insurance2.svg";
import "./index.css";

/**
 * Sider for contains Fabits logo, different icons , finance and insurance section
 * On selecting any option in finance and insurance section that field get bordered and text colour get changed
 * @returns {JSX Element}
 */
const Index = () => {
  const [element, setElement] = React.useState("");
  return (
    <div className="aside-container">
      <div className="aside-nav">
        <img src={Logo} alt="Fabits" id="logo" />
        <img src={NotificationIcon} alt="notificatins" />
      </div>
      <div className=" memoji-card">
        <img src={Memoji} alt="Memoji" id="memoji-image" />
        <div id="memoji-details">
          <span>Dhruv S.</span>
          <p>dhruv@fabits.com</p>
        </div>
        <img src={Menu} alt="menu" id="menu" />
      </div>
      <div className="aside-section">
        <img src={HomeIcon} alt="home" />
        <h5>Home</h5>
      </div>
      <h3>FINANCE</h3>
      <div
        className={
          element !== "plan" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("plan")}
      >
        <img src={PlanGoal} alt="home" />
        <h5>Plan a Goal</h5>
      </div>
      <div
        className={
          element !== "fund" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("fund")}
      >
        <img src={BubbleChart} alt="home" />
        <h5>Discover Top Funds</h5>
      </div>
      <div
        className={
          element !== "investment" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("investment")}
      >
        <img src={Investment} alt="home" />
        <h5>My Investments</h5>
      </div>
      <div
        className={
          element !== "ipo" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("ipo")}
      >
        <img src={IPO} alt="home" />
        <h5>IPO</h5>
      </div>
      <h3>INSURANCE</h3>
      <div
        className={
          element !== "insurance1" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("insurance1")}
      >
        <img src={Insurance1} alt="home" />
        <h5>Insurance</h5>
      </div>
      <div
        className={
          element !== "insurance2" ? "aside-section" : "aside-section selected"
        }
        onClick={() => setElement("insurance2")}
      >
        <img src={Insurance2} alt="home" />
        <h5>Insurance</h5>
      </div>
    </div>
  );
};

export default Index;
