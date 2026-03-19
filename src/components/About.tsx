import "./styles/About.css";
import AboutVisual from "./AboutVisual";

const About = () => {
  return (
    <div className="about-section" id="about">
      <AboutVisual />
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hard-working Full Stack Developer with a flair for creating elegant
          solutions in the least amount of time. Experienced in building ecommerce
          webapps, customer web portals, company websites, and custom webApps.
          Skilled in Angular, PHP (CakePHP, CodeIgniter, Laravel), Node.js, WordPress,
          and modern frontend technologies. Passionate about new technologies and
          always willing to learn new techs.
        </p>
      </div>
    </div>
  );
};

export default About;
