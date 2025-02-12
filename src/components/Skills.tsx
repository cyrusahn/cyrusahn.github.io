import React from "react";
import { 
  FaPython, FaJava, FaAws, FaDatabase, FaGitAlt, FaLinux, FaCode, FaFigma 
} from "react-icons/fa";
import { 
  SiTypescript, SiTensorflow, SiPytorch, SiScikitlearn, SiDocker, 
  SiNumpy, SiPandas, SiJirasoftware, SiConfluence, SiServerless 
} from "react-icons/si";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.container}>
        <div className={styles.category}>
          <h3>Programming Languages</h3>
          <ul>
            <li><FaPython className={styles.icon} /> Python</li>
            <li><FaJava className={styles.icon} /> Java</li>
            <li><SiTypescript className={styles.icon} /> TypeScript</li>
            <li><FaCode className={styles.icon} /> C / C++</li>
            <li><FaDatabase className={styles.icon} /> SQL</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Machine Learning & Data Science</h3>
          <ul>
            <li><SiTensorflow className={styles.icon} /> TensorFlow</li>
            <li><SiPytorch className={styles.icon} /> PyTorch</li>
            <li><SiScikitlearn className={styles.icon} /> Scikit-Learn</li>
            <li><SiPandas className={styles.icon} /> Pandas</li>
            <li><SiNumpy className={styles.icon} /> NumPy</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Cloud & DevOps</h3>
          <ul>
            <li><FaAws className={styles.icon} /> Amazon Web Services</li>
            <li><SiServerless className={styles.icon} /> Serverless Architecture</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Development Tools</h3>
          <ul>
            <li><FaGitAlt className={styles.icon} /> Git & GitHub</li>
            <li><FaLinux className={styles.icon} /> Linux & Bash Scripting</li>
            <li><SiJirasoftware className={styles.icon} /> Jira</li>
            <li><SiConfluence className={styles.icon} /> Confluence</li>
            <li><FaFigma className={styles.icon} /> Figma (UI/UX Prototyping)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
