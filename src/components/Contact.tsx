import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pmeet4771@gmail.com" data-cursor="disable">
                pmeet4771@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 9106948211</p>
            <h4>Location</h4>
            <p>Kanjinagar, Motived, Surat</p>
            <h4>Education</h4>
            <p>Computer Science — Shree Ram Krishna Institute of Technology (2019-2022)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/*<a*/}
            {/*  href="https://github.com/Meet7654"*/}
            {/*  target="_blank"*/}
            {/*  data-cursor="disable"*/}
            {/*  className="contact-social"*/}
            {/*>*/}
            {/*  Github <MdArrowOutward />*/}
            {/*</a>*/}
            <a
              href="https://www.linkedin.com/in/patel-meet-15242b257/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/meet_17_09/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Meet Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
