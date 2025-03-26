import React from "react";
import PropTypes from "prop-types";

function Header({ text = "Feedback UI" }) {
  return (
    <header>
      <div className="container">
        <h3>{text}</h3>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
