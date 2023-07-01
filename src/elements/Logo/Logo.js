import "./Logo.css";

function Logo({ textFirst, textSecond }) {
  return (
    <div className="pageHeaderLogo">
      <a href="#" className="logo">
        <div className="logoIcon"/>
        <span className="logoTextFirst">{textFirst}</span>
        <span className="logoTextSecond">{textSecond}</span>
      </a>
    </div>
  );
}

export default Logo;
