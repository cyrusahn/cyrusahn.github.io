import React from "react";
import Header from "./Header";
import { experience } from "../content/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {experience.map((exp) => (
            <VerticalTimelineElement
              key={exp.role}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--primary-accent)", borderTop: `6px solid var(--deep-blue)` }}
              contentArrowStyle={{ borderRight: "7px solid var(--primary-accent)" }}
              position="left"
              icon={
                exp.logo.startsWith("/") ? (
                  <div className={styles.iconContainer}>
                    <img src={exp.logo} alt={exp.company} className={styles.companyLogo} />
                  </div>
                ) : (
                  exp.logo
                )
              }
              date={exp.time}
            >
              <h2 className={styles.role}>{exp.role} @ {exp.company}</h2>
              <p className={styles.tools}><strong>Tools:</strong> {exp.tools.join(", ")}</p>
              <ul className={styles.desc}>
                {exp.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
