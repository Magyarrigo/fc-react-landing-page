import Logo from "../Logo/Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerContainer">
        <div>
          <Logo className="logoAtFooter" />
        </div>

        <div className="footerContainerMediaIcons">
          <div className="facebookIcon" />
          <div className="twitterIcon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
