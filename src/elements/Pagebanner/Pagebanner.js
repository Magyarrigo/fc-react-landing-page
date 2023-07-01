import Container from "../Container/Container";
import "./Pagebanner.css";

function Pagebanner({ title, description, buttonText }) {
  return (
    <section className="pageContainer">
      <div className = "pageBanner">
      <Container>
        <h1 className="pageBannerTitle">{title}</h1>
        <p className="pageBannerDescription">{description}</p>
        <a href="#" className="pageBannerLink">
          {buttonText}
        </a>
      </Container>
      </div>      
    </section>
  );
}

export default Pagebanner;
