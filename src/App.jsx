import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets/";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <hr className="mx-auto w-1/2 bg:black dark:bg-white" />
        <Rockets />
        <hr className="mx-auto w-1/2 bg:black dark:bg-white" />
        <Testimonials />
        <hr className="mx-auto w-1/2 bg:black dark:bg-white" />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
