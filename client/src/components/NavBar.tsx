import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
        background: "#ffffff",
      }}
    >
      <div style={{ width: "30%" }}>
        <Link to="/">
          <img src="/assets/logo.png" height="40" width="200px" />
        </Link>
      </div>
      <div style={{ width: "20%", textAlign: "right" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          home
        </Link>
      </div>
      <div style={{ width: "20%", textAlign: "left" }}>
        <Link to="/favourites" style={{ textDecoration: "none" }}>
          Favourites
        </Link>
      </div>
      <div style={{ width: "30%", textAlign: "right", paddingRight: "40px" }}>
        <img src="/assets/userLogo.png" height="25px" />
      </div>
    </div>
  );
};
export default NavBar;
