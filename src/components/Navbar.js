import React, {useState} from "react";

function Navbar() {
  const [toggleMenu,setToggle] = useState(false)
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light font-weight-bold ">
        <button
          class="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>setToggle(!toggleMenu)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" style={toggleMenu ? { display: 'block', transition: '0.3s height ease-in', height: 'auto' } : { display: 'none' }}>
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
