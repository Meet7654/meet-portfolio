import "./styles/Landing.css";
import LandingVisual from "./LandingVisual";

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
      </div>
    </div>
  );
};

export default Landing;
