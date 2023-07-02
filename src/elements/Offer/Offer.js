import Container from "../Container/Container";
import "./Offer.css";

function Offer({ offerTitle }) {
  return (
    <section className = "offerContainer" id = "ourOffer">
      
        <Container>
          <h1 className="ourOfferTitle">{offerTitle}</h1>
        </Container>
      
    </section>
  );
}

export default Offer;
