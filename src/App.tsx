import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
