import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-primary">Cyrus Ahn</h1>
      <p className="text-lg mt-2">Software Developer | Data Analyst</p>
      <p className="mt-4 max-w-xl">
        Passionate about building efficient and scalable software solutions.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-blue-600 transition"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
