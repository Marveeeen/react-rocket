import React, { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function Header() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const handleToggleShowMobileNavigation = () => {
    setShowMobileNavigation((prev) => !prev);
  };
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <Navigation
          showMobileNavigation={showMobileNavigation}
          onToggleShowMobileNavigation={handleToggleShowMobileNavigation}
        />
      </section>
      <section
        className={`absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${
          showMobileNavigation ? "flex" : "hidden"
        }`}
        onClick={handleToggleShowMobileNavigation}
      >
        <MobileNavigation />
      </section>
    </header>
  );
}

export default Header;
