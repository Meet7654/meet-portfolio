import Marquee from "react-fast-marquee";
import "./styles/MobileTechStack.css";

const techItems = [
  { name: "Angular", color: "#DD0031" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "PHP", color: "#777BB4" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "MySQL", color: "#4479A1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#ffffff" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Git", color: "#F05032" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "SCSS", color: "#CD6799" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#264de4" },
  { name: "Nginx", color: "#009639" },
];

const MobileTechStack = () => {
  return (
    <div className="mobile-techstack">
      <h2 className="mobile-tech-title">My Techstack</h2>
      <div className="mobile-tech-marquee">
        <Marquee speed={30} gradient={false}>
          {techItems.map((tech, i) => (
            <div className="tech-badge" key={i}>
              <span
                className="tech-dot"
                style={{ backgroundColor: tech.color }}
              ></span>
              {tech.name}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mobile-tech-marquee">
        <Marquee speed={25} gradient={false} direction="right">
          {[...techItems].reverse().map((tech, i) => (
            <div className="tech-badge" key={i}>
              <span
                className="tech-dot"
                style={{ backgroundColor: tech.color }}
              ></span>
              {tech.name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MobileTechStack;
