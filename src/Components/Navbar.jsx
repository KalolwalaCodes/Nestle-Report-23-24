import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const imageHolderRef = useRef(null);

  const handleMouseOver = (event) => {
    const value = event.target.getAttribute("data-src");
    imageHolderRef.current.src = value;
  };

  const handleMouseOut = () => {
    imageHolderRef.current.src = "/nestle-logo.png";
  };

  useEffect(() => {
    function resizeNav() {
      const navFullscreen = document.getElementById("nav-fullscreen");
      const navOverlay = document.getElementById("nav-overlay");

      // Set the nav height to fill the window
      navFullscreen.style.height = window.innerHeight + "px";

      // Set the circle radius to the length of the window diagonal
      const radius = Math.sqrt(
        Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
      );
      const diameter = radius * 2;
      navOverlay.style.width = diameter + "px";
      navOverlay.style.height = diameter + "px";
      navOverlay.style.marginTop = -radius + "px";
      navOverlay.style.marginLeft = -radius + "px";
    }

    // Call resizeNav initially and on window resize
    resizeNav();
    window.addEventListener("resize", resizeNav);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("resize", resizeNav);
    };
  }, []);

  // Toggle nav function
  const toggleNav = () => {
    const navToggle = document.getElementById("nav-toggle");
    const navOverlay = document.getElementById("nav-overlay");
    const navFullscreen = document.getElementById("nav-fullscreen");

    navToggle.classList.toggle("open");
    navOverlay.classList.toggle("open");
    navFullscreen.classList.toggle("open");
  };

  return (
    <>
      <div className="navbar flex">
        <h4 className="annual-report-text">
          Annual
          <br />
          Report
          <br />
          2023-24
        </h4>
        <img className="nestle-logo" src="/nestle-logo.svg" alt="" />
        <div id="nav-container">
          <div id="nav-overlay"></div>
          <nav id="nav-fullscreen">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="nav-menu-wrap-1 flex"
            >
              <ul>
                <li className="heading-wrapper-navbar">Annual Report <br /> 2023-24</li>
                <li>
                  <Link to={"/"} onClick={toggleNav}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to={"/Chairman's-message"} onClick={toggleNav}>
                    Chairman's message
                  </Link>
                </li>

                <li>
                  <Link onClick={toggleNav} to={"/Sales-and-exports"}>
                    Sales and Exports
                  </Link>
                </li>

                <li>
                  <Link onClick={toggleNav} to={"/Product-portfolio"}>
                    Product portfolio
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/IT-integration"}>
                    IT integration
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/csr"}>
                    CSR
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/people"}>
                    People
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/partnerships"}>
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Plante"}>
                    Planet
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Awards"}>
                  Awards and recognitions
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/Risks-and-opportunities"}>
                    Risks and opportunities
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleNav} to={"/finincial-highlights"}>
                    Financial Highlights
                  </Link>
                  
                </li>
                <li><Link onClick={toggleNav} to={"/finincial-highlights"}>
                  Corporate Information
                  </Link></li>
              </ul>
              <ul>
                <li className="heading-wrapper-navbar">Download Sections</li>
                <li>
                  <a
                    href="#"
                    data-src="https://cdn11.bigcommerce.com/s-pl8vz9wzk5/product_images/uploaded_images/richloomcontract-warm.jpg?t=1578333794&_ga=2.88599385.376859109.1578324369-774153706.1570131906"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Download Full Report
                  </a>
                </li>

                <li>
                  <a
                    href="#second"
                    data-src="https://cdn11.bigcommerce.com/s-pl8vz9wzk5/product_images/uploaded_images/richloomcontract-mochaglam.jpg?t=1578333787&_ga=2.88599385.376859109.1578324369-774153706.1570131906"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Board’s Report
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    data-src="https://cdn11.bigcommerce.com/s-pl8vz9wzk5/product_images/uploaded_images/richloomcontract-greys.jpg?t=1578333786&_ga=2.88599385.376859109.1578324369-774153706.1570131906"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Auditor’s Report
                  </a>
                </li>

                <li>
                  <a href="#">Annual Accounts</a>
                </li>
                <li>
                  <a href="#">CSR Activities</a>
                </li>
                <li>
                  <a href="#">BRSR </a>
                </li>
              </ul>
            </motion.div>
          </nav>
          <a id="nav-toggle" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className="gradient-line"></div>
    </>
  );
};
