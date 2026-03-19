import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship — PHP Developer</h4>
                <h5>Skyllect Pvt. Ltd., Mota Varachha, Surat</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Trained as a PHP Developer. Learned HTML, CSS, jQuery, and
              JavaScript fundamentals while working on real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Skyllect Pvt. Ltd., Mota Varachha, Surat</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing and maintaining an HRM system using CodeIgniter and AWS S3.
              Built a web platform for NGO operations using Angular, Node.js, and MySQL.
              Worked on the Twinr WordPress platform for mobile app integration and
              developed a custom plugin for Firebase push notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
