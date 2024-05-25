import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Footer.css'
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      
      <footer class="pt-5 bg-footer">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="wrapper-1 mb-2">
                  <div className="footer-logo mb-3">
                    <img src="" alt="footer-logo" loading="lazy" className="img-fluid" />
                  </div>
                  <p>All you need to ace your upcoming tech interview.</p>
                  <p className="mb-1"><FaCircleCheck className="text-success me-2" /> All Free Notes </p>
                  <p className="mb-1"><FaCircleCheck className="text-success me-2" /> Free Mock Interviews </p>
                  <p className="mb-1"><FaCircleCheck className="text-success me-2" /> Latest Job Updates </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="wrapper-2 ps-md-4 mb-2">
                  <p className="mb-2">Popular Notes</p>

                  <div className="footer-links">
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> React Js </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> JavaScript </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> HTML </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> CSS </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> Java </Link>
                  </div>
                  
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="wrapper-3 mb-2">
                  <p className="mb-2">Useful Links</p>

                  <div className="footer-links">
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> About Us </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> Jobs </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> Free Mock Assessment </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> Free Mock Interview </Link>
                    <Link to='/notes' className="d-block link-underline link-underline-opacity-0"> Java </Link>
                  </div>
                  
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="wrapper-4 mb-2">
                  <p className="mb-2">Contact Us</p>

                  <div className="footer-links">
                    <Link to='mailto:www.example.com' className="d-block link-underline link-underline-opacity-0"><IoMdMail className="text-danger me-2" /> www.dummymail@gmail.com </Link>
                    <Link to='tel:+1234567890' className="d-block link-underline link-underline-opacity-0"><MdCall className="text-info me-2" /> 1234567890 </Link>
                  </div>
                  
                </div>
              </div>
            </div>
            
            
        </div>
        </div>
        <div className="container-fluid m-0 p-0 bg-footer">
        <div class="container text-center py-3 border-top mt-3">
            © 2024 Copyright: All rights reserved by TheBackBenchers 
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
