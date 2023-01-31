import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div class="container-xxl">
          <div class="row aligh-items-center">
            <div class="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="text-white mb-0">Sign up for Newsletter</h2>
              </div>
            </div>
            <div class="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address..."
                  aria-label="Your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
                ;
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div class="container-xxl">
          <div class="row">
            <div className="col-4 text-white mb-4">
              <h4>Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hn0 : 277 Near Vill chopal, <br />
                  Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+254700000000"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +254700000000
                </a>
                <a
                  href="mailto:digitic@gmail.com"
                  className="mt-3 d-block mb-2 text-white"
                >
                  digitic@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="/">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 text-white mb-4">
              <h4>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Terms and Conditions
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="text-white mb-4 col-3">
              <h4>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div class="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div class="container-xxl">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear()}; Powered by Developers
              </p>
            </div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </footer>
    </>
  );
};
