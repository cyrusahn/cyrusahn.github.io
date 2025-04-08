import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Cyrus Ahn</div>
      <ul className={styles.navLinks}>
        <li><a href="#about_me">About</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact_me">Contact</a></li>
      </ul>
    </nav>
  );
}
