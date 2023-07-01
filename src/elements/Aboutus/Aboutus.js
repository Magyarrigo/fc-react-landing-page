import "./Aboutus.css";

function Aboutus({ id, text }) {
  return (
    <li className="navElement">
      <a className="navLink" href={id}>
        {text}
      </a>
    </li>
  );
}

export default Aboutus;
