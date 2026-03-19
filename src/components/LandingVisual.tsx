import "./styles/LandingVisual.css";

const LandingVisual = () => {
  return (
    <div className="visual-container">
      <div className="visual-glow"></div>

      <div className="visual-orbit visual-orbit-1">
        <span className="visual-symbol">&lt;/&gt;</span>
      </div>
      <div className="visual-orbit visual-orbit-2">
        <span className="visual-symbol">&#123; &#125;</span>
      </div>
      <div className="visual-orbit visual-orbit-3">
        <span className="visual-symbol">( )</span>
      </div>

      <div className="visual-core">
        <div className="visual-ring visual-ring-1"></div>
        <div className="visual-ring visual-ring-2"></div>
        <div className="visual-ring visual-ring-3"></div>
        <div className="visual-avatar">
          <span className="visual-initials">MP</span>
        </div>
      </div>

      <div className="visual-particles">
        {[...Array(12)].map((_, i) => (
          <div
            className="visual-particle"
            key={i}
            style={{
              "--angle": `${i * 30}deg`,
              "--delay": `${i * 0.4}s`,
              "--distance": `${100 + (i % 3) * 40}px`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>

      <div className="visual-lines">
        <div className="visual-line visual-line-1"></div>
        <div className="visual-line visual-line-2"></div>
        <div className="visual-line visual-line-3"></div>
        <div className="visual-line visual-line-4"></div>
      </div>
    </div>
  );
};

export default LandingVisual;
