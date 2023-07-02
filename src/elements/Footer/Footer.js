import "./Footer.css";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerContainer">
        <div className="logoAtFooterContainer">
          <Logo
            textFirst={"moja"}
            textSecond={"firma"}
            className="logoAtFooter"
          />
          <p className="footerText">Wszystkie prawa zastrzeżone @2023 </p>
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
