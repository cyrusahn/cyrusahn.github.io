import React from "react";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <AboutMe />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
