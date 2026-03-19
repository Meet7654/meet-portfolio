import { useEffect, useRef } from "react";
import "./styles/AboutVisual.css";

const codeLines = [
  { indent: 0, color: "keyword", text: "const", rest: [{ color: "fn", text: " developer" }, { color: "op", text: " = " }, { color: "bracket", text: "{" }] },
  { indent: 1, color: "prop", text: "name", rest: [{ color: "op", text: ": " }, { color: "string", text: '"Meet Patel"' }, { color: "op", text: "," }] },
  { indent: 1, color: "prop", text: "role", rest: [{ color: "op", text: ": " }, { color: "string", text: '"Full Stack Developer"' }, { color: "op", text: "," }] },
  { indent: 1, color: "prop", text: "skills", rest: [{ color: "op", text: ": " }, { color: "bracket", text: "[" }] },
  { indent: 2, color: "string", text: '"Angular"', rest: [{ color: "op", text: ", " }, { color: "string", text: '"React"' }, { color: "op", text: ", " }, { color: "string", text: '"Node.js"' }, { color: "op", text: "," }] },
  { indent: 2, color: "string", text: '"PHP"', rest: [{ color: "op", text: ", " }, { color: "string", text: '"Laravel"' }, { color: "op", text: ", " }, { color: "string", text: '"TypeScript"' }] },
  { indent: 1, color: "bracket", text: "]", rest: [{ color: "op", text: "," }] },
  { indent: 1, color: "prop", text: "passion", rest: [{ color: "op", text: ": " }, { color: "string", text: '"Building elegant solutions"' }] },
  { indent: 0, color: "bracket", text: "}", rest: [{ color: "op", text: ";" }] },
];

const AboutVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = containerRef.current?.querySelectorAll(".code-line");
    lines?.forEach((line, i) => {
      (line as HTMLElement).style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <div className="about-visual">
      <div className="code-window">
        <div className="code-titlebar">
          <div className="code-dots">
            <span className="code-dot code-dot-red"></span>
            <span className="code-dot code-dot-yellow"></span>
            <span className="code-dot code-dot-green"></span>
          </div>
          <span className="code-filename">developer.ts</span>
        </div>
        <div className="code-body" ref={containerRef}>
          {codeLines.map((line, i) => (
            <div className="code-line" key={i}>
              <span className="code-linenum">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 20}px` }}>
                <span className={`code-${line.color}`}>{line.text}</span>
                {line.rest?.map((part, j) => (
                  <span className={`code-${part.color}`} key={j}>
                    {part.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="code-line code-cursor-line">
            <span className="code-linenum">{codeLines.length + 1}</span>
            <span className="code-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVisual;
