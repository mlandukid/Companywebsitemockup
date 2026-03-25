import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Industries } from "./components/Industries";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { BackToTop } from "./components/BackToTop";
import { SplashScreen } from "./components/SplashScreen";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <div className="min-h-screen bg-white">
        <Navigation />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}
