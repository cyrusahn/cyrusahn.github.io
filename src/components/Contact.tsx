import LinkedIn from "../public/linkedin.png";
import Email from "../public/email.png";
import Github from "../public/github.png";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact_me" className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.social_container}>
          <div className={styles.shell_container}>
            <div className={styles.shell_container1}>
              <a
                className={styles.linkedin}
                href="mailto:cyrusahn@gmail.com"
              >
                <img src={Email} alt="Email" className={styles.shell} />
              </a>
              <a
                className={styles.github}
                href="https://github.com/cyrusahn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" className={styles.shell} />
              </a>
              <a
                className={styles.email}
                href="https://www.linkedin.com/in/cyrusahn/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" className={styles.shell} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
