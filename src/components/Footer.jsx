import "../assets/css/footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import movieIcon from "../assets/img/movie_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrap bg-gray-800">
      <div className="topFooter mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="footerFlex">
          <div className="logo movie-logo">
            <img src={movieIcon} alt="" />
          </div>
          <div className="footerText">
            <p>
              I’m dedicated to making your website smarter, faster, and better —
              every single day.
            </p>
          </div>
          <div className="footerSocialIcons">
            <div className="socialIconWrap">
              <Link to="#">
                <FaFacebook className="socialIcon" />
              </Link>
              <Link to="#">
                <BsInstagram className="socialIcon" />
              </Link>
              <Link to="#">
                <FaXTwitter className="socialIcon" />
              </Link>
              <Link to="#">
                <FaYoutube className="socialIcon" />
              </Link>
              <Link to="#">
                <FaGithub className="socialIcon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="copyRightText">
          <p>© 2024 Your Company, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
