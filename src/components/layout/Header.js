import React from "react";

const Header = () => {
  return (
    <nav className="Header navbar navbar-dark bg-info">
      <a className="navbar-brand" href="#">
        <h1>
          <i className="fas fa-address-book mx-4" />
          Contacts Manager
        </h1>
      </a>
    </nav>
  );
};

export default Header;
