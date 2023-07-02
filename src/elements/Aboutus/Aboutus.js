import Container from "../Container/Container";
import "./Aboutus.css";
import Associate from "./Associate/Associate";
import Photo from "./Photo/Photo";

function Aboutus() {
  return (
    <div id="aboutUs" className="aboutUs">
      <Container>
        <div className="associateField">
          <Photo image="associate-1.gif" />
          <Associate imie="Marta" nazwisko="Podsiadlo" dzial="[dzial HR]" />
        </div>
        <div className="associateField">
          <Photo image="associate-2.gif" />
          <Associate imie="Marta" nazwisko="Podsiadlo" dzial="[dzial HR]" />
        </div>
        <div className="associateField">
          <Photo image="associate-3.gif" />
          <Associate imie="Marta" nazwisko="Podsiadlo" dzial="[dzial HR]" />
        </div>
      </Container>
    </div>
  );
}

export default Aboutus;
