import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light pt-5 pb-5 font-weight-bold ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                STORY
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                OUR PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                STORE LOCATOR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                KITCHEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                MEDIA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                BLOGS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
