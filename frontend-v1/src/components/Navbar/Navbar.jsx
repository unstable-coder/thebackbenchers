import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    const navLinks = document.querySelectorAll('.nav-link');

    // Bootstrap Collapse instance
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });

    // Toggle the navbar when clicking on the button
    const toggleNavbarCollapse = () => {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      } else {
        bsCollapse.show();
      }
    };

    // Close the navbar when clicking on a link
    const closeNavbarCollapse = () => {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    };

    navbarToggler.addEventListener('click', toggleNavbarCollapse);
    navLinks.forEach(link => {
      link.addEventListener('click', closeNavbarCollapse);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      navbarToggler.removeEventListener('click', toggleNavbarCollapse);
      navLinks.forEach(link => {
        link.removeEventListener('click', closeNavbarCollapse);
      });
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom shadow-sm">
        <div className="container">
          <Link to='/' className="navbar-brand">
            <img src="src/assets/logo/dummy-logo.png" alt="Logo" width="30" height="24" className="img-fluid me-2" />
            <span className='fw-semibold'>TheBackBenchers</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) =>
                  `${isActive ? "border-bottom border-2 text-primary border-primary zz" : "text-success"} nav-link active`} aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/notes" className={({ isActive }) =>
                  `${isActive ? "border-bottom  border-2 text-primary border-primary" : "text-success"} nav-link`}>Notes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className={({ isActive }) =>
                  `${isActive ? "border-bottom border-2 text-primary border-primary" : "text-success"} nav-link`}>About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/jobs" className={({ isActive }) =>
                  `${isActive ? "border-bottom border-2 text-primary border-primary" : "text-success"} nav-link`}>Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/free-mock" className={({ isActive }) =>
                  `${isActive ? "border-bottom border-2 text-primary border-primary" : "text-success"} nav-link`}>Free Mock</NavLink>
              </li>
              <li className="nav-item d-block d-lg-none">
                <NavLink to="/user-profile"
                  className={({ isActive }) => `${isActive ? "text-primary" : "text-success"} nav-link`}>
                  <img src="src/assets/logo/user-img.png" alt="Logo" width="30" height="24" className="img-fluid" />
                </NavLink>
              </li>
            </ul>

          </div>
          <div className='d-none d-lg-block'>
            <NavLink to="/user-profile"
              className={({ isActive }) => `${isActive ? "text-primary" : "text-success"} nav-link`}>
              <img src="src/assets/logo/user-img.png" alt="Logo" width="40" height="25" className="img-fluid" />
            </NavLink>
          </div>


        </div>
      </nav>
    </>
  );
};

export default Navbar;
