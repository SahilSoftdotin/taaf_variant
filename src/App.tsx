import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { TrustStrip } from "./components/TrustStrip";
import { Services } from "./components/Services";
import { UseCases } from "./components/UseCases";
import { Locations } from "./components/Locations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="flex flex-col bg-paper">
      {/* Hero viewport */}
      <div className="relative flex h-screen flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      <Info />
      <TrustStrip />
      <Services />
      <UseCases />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}
