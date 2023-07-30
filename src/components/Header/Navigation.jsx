import React from "react";

function Navigation() {
  return (
    <div>
      <button className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
      <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
        <a href="#rockets" className="hover:opacity-90">
          Our Rockets
        </a>
        <a href="#testimonials" className="hover:opacity-90">
          Testimonials
        </a>
        <a href="#contact" className="hover:opacity-90">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
