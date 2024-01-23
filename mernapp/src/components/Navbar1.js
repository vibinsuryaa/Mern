import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

export default function Navbar1() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // You can apply changes to the theme here
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-custom ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: theme === 'dark' ? '#222' : '#4CAF50' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className={`navbar-brand fs-i fst-italic me-2 text-${theme === 'dark' ? 'light' : 'dark'}`} to="/">
            GoFood
          </Link>
          <div className="d-flex justify-content-center flex-grow-1">
            <div className="d-flex">
              <Link className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} me-2`} to="/" role="button">
                Home
              </Link>
              <Link className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} me-2`} to="/login" role="button">
                Login
              </Link>
              <Link className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} me-2`} to="/Sign" role="button">
                Sign Up
              </Link>
            </div>
          </div>
          <div>
            <button className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} me-2`} onClick={toggleTheme}>
              {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </button>
            <Link className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'} me-2`} to="/CartPage" role="button">
              Add to Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
