import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
        <div style={{ position: "absolute", right: "15px", top: "15px" }}>
          <Link to="/about">
            <Button version="page">
              <strong>About</strong>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#F9F5EB",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
