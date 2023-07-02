import Container from "../Container/Container";
import "./Aboutus.css";
import Associate from "./Associate/Associate";
import Photo from "./Photo/Photo";

function Aboutus({ number }) {
  return (
    <div id="aboutUs" className="aboutUs">
      <Container>
        <div className="associateField">
          <Photo />
          <Associate
            imie={"Marta"}
            nazwisko={"Podsiadlo"}
            dzial={"[dzial HR]"}
          />
        </div>
      </Container>
    </div>
  );
}

export default Aboutus;
