import "./Photo.css";

function Photo({ image }) {
  return (
    <div className="photo">
      <img className="image" src={image} />
    </div>
  );
}

export default Photo;
