import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Proficiency from "./components/Proficiency";
import Education from "./components/Education";
import Academics from "./components/Academics";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import FerrofluidBackground from "./components/FerrofluidBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <FerrofluidBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <Proficiency />
        <Education />
        <Academics />
        <Experience />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
