import "./Logo.css";

function Logo({ textFirst, textSecond }) {
  return (
    <div class="pageHeaderLogo">
      <a href="#" class="logo">
        <span class="logoTextFirst">{textFirst}</span>
        <span class="logoTextSecond">{textSecond}</span>
      </a>
    </div>
  );
}

export default Logo;
