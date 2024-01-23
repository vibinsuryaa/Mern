import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light py-4 border-top">
      <div className="container">
        <div className="row">
          {/* Branding and Copyright */}
          <div className="col-md-4 text-center text-md-start">
            <Link to="/" className="mb-3 text-decoration-none fs-4">
              <span className="text-success fw-bold">GoFood</span>
            </Link>
            <span className="text-muted">© {new Date().getFullYear()} GoFood, Inc</span>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 text-center text-md-end">
            <ul className="nav justify-content-center justify-content-md-end list-unstyled d-flex">
              <li className="ms-3">
                <a href="#your-facebook-link" className="text-muted text-decoration-none">Facebook</a>
              </li>
              <li className="ms-3">
                <a href="#your-twitter-link" className="text-muted text-decoration-none">Twitter</a>
              </li>
              <li className="ms-3">
                <a href="#your-instagram-link" className="text-muted text-decoration-none">Instagram</a>
              </li>
              {/* Add more social links if needed */}
            </ul>
          </div>

          {/* Home Page Button */}
          <div className="col-md-4 text-center text-md-end">
            <Link to="/Navbar1" className="btn btn-primary">Go to Home</Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mt-3">
          <div className="col-md-12 text-center text-md-start">
            <ul className="nav list-unstyled">
              <li className="ms-3">
                <span className="text-muted me-3">Contact: @gofood.com</span>
              </li>
              <li className="ms-3">
                <span className="text-muted me-3">Phone: 8248437258 </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy and Terms of Use */}
        <div className="row mt-3">
          <div className="col-md-12 text-center text-md-start">
            <ul className="nav list-unstyled">
              <li className="ms-3">
                <Link to="/privacy" className="text-muted text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="ms-3">
                <Link to="/terms" className="text-muted text-decoration-none">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
