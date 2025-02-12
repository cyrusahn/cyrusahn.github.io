import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import styles from "../styles/AboutMe.module.scss";


const TextLoop = () => {
  const messages = [
    "I am a software developer.",
    "I love exploring new technologies.",
    "I play volleyball.",
    "I enjoy spending time in nature.",
  ];

  const colors = ["#B9C8E5", "#B9C8E5", "#B9C8E5", "#B9C8E5"];
  const [message, setMessage] = useState(messages[0]);
  const [color, setColor] = useState(colors[0]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setTyping(true);
  }, [typing]);

  const repeatText = () => {
    setTyping(false);
    let index = messages.indexOf(message);
    if (index >= messages.length - 1) {
      index = -1;
    }
    setMessage(messages[index + 1]);
    setColor(colors[index + 1]);
  };

  return (
    <div>
      {typing ? (
        <Typist
          cursor={{ show: false }}
          onTypingDone={() => {
            repeatText();
          }}
          stdTypingDelay={0}
          className="typist"
        >
          <h2 style={{ color: color }} className={styles.message}>
            {message}
          </h2>
          <Typist.Backspace count={message.length+1} delay={1500} />
        </Typist>
      ) : (
        <h2 className={color}>{message}</h2>
      )}
    </div>
  );
};

export default function AboutMe() {

  return (
    <section id="about_me" className={styles.aboutMe}>
      <h1 className={styles.hello}>
        Hello, I'm Cyrus Ahn
        <img src="/volleyball.png" alt="Volleyball Logo" className={styles.logo} />
        <img src="/camping-tent.png" alt="Camping Logo" className={styles.tree} />
      </h1>

      <div className={styles.typewriter}>
        <TextLoop />
      </div>

      <div className={styles.buttons}>
        <a href="#experience" className={styles.button}>View Experience</a>
        <a href="#projects" className={styles.button}>See My Projects</a>
        <a href="#contact_me" className={styles.button}>Get in Touch</a>
      </div>
    </section>
  );
}
