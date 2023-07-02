import Container from "../Container/Container";
import "./Offer.css";

import Square from "./Square/Square";

const offerArray = [
  {
    offerName: "Offer one",
    isNew: false,
  },
  {
    offerName: "Offer two",
    isNew: false,
  },
  {
    offerName: "Offer three",
    isNew: true,
  },
  {
    offerName: "Offer four",
    isNew: false,
  },
  {
    offerName: "Offer fife",
    isNew: false,
  },
  {
    offerName: "Offer six",
    isNew: true,
  },
];

function Offer({ offerTitle }) {
  return (
    <section className="offerContainer" id="ourOffer">
      <Container>
        <h1 className="ourOfferTitle">{offerTitle}</h1>
        <div className="ourOffersContainer">
          {offerArray.map(function (item) {
            return <Square offerName={item.offerName} isNew={item.isNew} />;
          })}
        </div>
      </Container>
    </section>
  );
}

export default Offer;
