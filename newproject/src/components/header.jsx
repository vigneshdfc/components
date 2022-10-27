import React from "react";

const Header = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="navbar">
          <div className="nav">
            <nav>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
              <a href="#">Help</a>
            </nav>
          </div>
          <div className="login">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
