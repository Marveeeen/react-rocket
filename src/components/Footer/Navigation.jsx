import React from "react";

function Navigation() {
  return (
    <nav className="hidden md:flex flex-col gap-2" ariia-label="footer">
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
  );
}

export default Navigation;
