import React from "react";

function Navigation({ showMobileNavigation, onToggleShowMobileNavigation }) {
  const btnToggleClassName = showMobileNavigation ? "toggle-btn" : "";
  return (
    <div>
      <button
        className={`${btnToggleClassName} text-3xl md:hidden cursor:pointer relative w-8 h-8`}
        onClick={onToggleShowMobileNavigation}
      >
        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
      </button>
      <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
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
