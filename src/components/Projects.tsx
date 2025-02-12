import { projects } from "../content/Projects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Projects.module.scss";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {projects.map((project: { title: any; subtitle: any; tools: any; desc: any; color: any; logo: any; }, index: Key | null | undefined) => {
            const title = project.title;
            const subtitle = project.subtitle;
            const tools = project.tools;
            const desc = project.desc;
            const color = project.color;
            const logo = project.logo;

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderTop: `6px solid ${color}`,
                }}
                position="left"
                icon={
                  logo.startsWith("/") ? (
                    <div className={styles.iconContainer}>
                      <img src={logo} alt={title} className={styles.projectLogo} />
                    </div>
                  ) : (
                    logo
                  )
                }
              >
                <div className={styles.title}>
                  <h2 className="vertical-timeline-element-title">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {title}: {subtitle}
                    </span>
                  </h2>
                </div>
                {tools.length > 0 && (
                  <p className="vertical-timeline-element-subtitle">
                    <strong>Tools:</strong> {tools.join(", ")}
                  </p>
                )}
                <div className={styles.desc}>
                  <ul>
                    {desc.map((point: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
