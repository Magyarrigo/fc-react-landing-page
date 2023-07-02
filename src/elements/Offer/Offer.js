import Container from "../Container/Container";
import "./Offer.css";
import Square from "./Square/Square";

function Offer({ offerTitle }) {
    
  return (
    <section className="offerContainer" id="ourOffer">
      <Container>
        <h1 className="ourOfferTitle">{offerTitle}</h1>
        <div className="ourOffersContainer">
          
            <Square offerName = "Usługa one" isNew={false}/>
            <Square offerName = "Usługa second" isNew={true}/>
            <Square offerName = "Usługa one" isNew={false}/>
            <Square offerName = "Usługa one" isNew={false}/>
            <Square offerName = "Usługa one" isNew={false}/>
            <Square offerName = "Usługa second" isNew={true}/>
          
        </div>
      </Container>
    </section>
  );
}

export default Offer;
