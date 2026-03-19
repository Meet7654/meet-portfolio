import "./styles/Landing.css";
import LandingVisual from "./LandingVisual";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            MEET
            <br />
            <span>PATEL</span>
          </h1>
        </div>
        <LandingVisual />
        <div className="landing-info">
          <h3>A Full Stack</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Developer</div>
            <div className="landing-h2-2">Engineer</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Engineer</div>
            <div className="landing-h2-info-1">Developer</div>
          </h2>
        </div>
        <div className="mobile-social">
          <a href="#" target="_blank" aria-label="Github"><FaGithub /></a>
          <a href="#" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" target="_blank" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" target="_blank" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
