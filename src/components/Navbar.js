import React from "react";

function Navbar() {
  return (
    <section className="glassnav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-light pt-5 pb-5 font-weight-bold justify-content-end">
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
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
