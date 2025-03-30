import { certifications } from "../content/Certifications";
import styles from "../styles/Certifications.module.scss";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certContainer}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certItem}>
            <img
              src={cert.image}
              alt={`${cert.title} Certificate`}
              className={styles.certImage}
            />
            <div className={styles.certDetails}>
              <h3>{cert.title}</h3>
              <p>Issued by {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certLink}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
