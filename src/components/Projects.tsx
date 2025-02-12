import React from "react";
import Header from "./Header";
import { projects } from "../content/Projects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {projects.map((projects) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderTop: "6px solid " + projects.color,
                }}
                position="left"
                icon={
                  projects.logo.startsWith("/") ? (
                    <div className={styles.iconContainer}>
                      <img src={projects.logo} alt={projects.company} className={styles.companyLogo} />
                    </div>
                  ) : (
                    projects.logo
                  )
                }
              >
              <div className={styles.title}>
                  <h2 className="vertical-timeline-element-title">
                    <span style={{ display: 'flex', alignItems: 'center'}}>
                        {projects.title}: {projects.subtitle} {projects.githubLogo}
                    </span>
                  </h2>
              </div>
                {projects.tools.length > 0 && 
                (<p className="vertical-timeline-element-subtitle">
                  Tools: {projects.tools.join(", ")} 
                </p>)}
                <div className={styles.desc}>
                  {projects.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}