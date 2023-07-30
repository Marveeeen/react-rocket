import Address from "./Address";
import Navigation from "./Navigation";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <Address />
        <Navigation />
        <Copyright />
      </section>
    </footer>
  );
}

export default Footer;
