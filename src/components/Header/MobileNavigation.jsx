function MobileNavigation() {
  return (
    <nav
      className="flex flex-col min-h-screen items-center py-8"
      aria-label="mobile"
    >
      <a href="#hero" className="w-full text-center py-6 hover:opacity-90">
        Home
      </a>
      <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">
        Our Rockets
      </a>
      <a
        href="#testimonials"
        className="w-full text-center py-6 hover:opacity-90"
      >
        Testimonials
      </a>
      <a href="#contact" className="w-full text-center py-6 hover:opacity-90">
        Contact Us
      </a>
      <a href="#footer" className="w-full text-center py-6 hover:opacity-90">
        Legal
      </a>
    </nav>
  );
}

export default MobileNavigation;
