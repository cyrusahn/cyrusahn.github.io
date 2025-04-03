import { experience } from "../content/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Experience.module.scss";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <VerticalTimeline animate={true} layout="1-column">
          {experience.map((expEntry: { role: any; company: any; time: any; tools: any; desc: any; logo: any; }, index: Key | null | undefined) => {
            const role = expEntry.role;
            const company = expEntry.company;
            const time = expEntry.time;
            const tools = expEntry.tools;
            const desc = expEntry.desc;
            const logo = expEntry.logo;

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#ffffff", borderTop: '6px solid #2F467A'}}
                contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
                position="left"
                icon={
                  logo.startsWith("/") ? (
                    <div className={styles.iconContainer}>
                      <img src={logo} alt={company} className={styles.companyLogo} />
                    </div>
                  ) : (
                    logo
                  )
                }
              >
                <h2 className={styles.role}>{role}</h2><h2 className={styles.company}> @ {company}</h2>
                <p className={styles.date}>
                  {time}
                </p>
                <p className={styles.tools}><strong>Tools:</strong> {tools.join(", ")}</p>
                <ul className={styles.desc}>
                  {desc.map((point: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
