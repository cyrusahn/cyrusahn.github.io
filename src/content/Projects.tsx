import { JSX } from "react";

interface Project {
  title: string;
  subtitle: string;
  tools: string[];
  desc: string[];
  color: string;
  logo: JSX.Element;
}

const awsLogo = <img src="AWS.png" alt = ""/>;
const scipyLogo = <img src="scipy.png" alt = ""/>;
const androidLogo = <img src="android.png" alt = ""/>;

export const projects: Project[] = [
  {
    title: "StudentBubble",
    subtitle: "Serverless Q&A Web App",
    tools: ["Python", "AWS", "HTML", "CSS"],
    desc: [
      "Led a team of 4 in creating a serverless web application utilizing a microservices architecture to host a question-and-answer forum tailored for students.",
      "Engineered back-end services with AWS Lambda, API Gateway, and DynamoDB, ensuring high availability, consistency, and low-latency performance.",
      "Developed intuitive front-end interfaces with HTML and CSS, enabling seamless client interactions with dynamic back-end components while prioritizing secure access controls."
    ],
    color: "#50659F",
    logo: awsLogo,
  },
  {
    title: "Sensors, Noise, and Walking",
    subtitle: "Data Processing Service",
    tools: ["Python", "pandas", "scipy"],
    desc: [
      "Developed a data processing pipeline utilizing pandas, numpy and scipy, implementing advanced statistical techniques to clean and enhance highly noisy datasets.",
      "Engineered a data processing workflow to analyze walking speeds and enabling unique identification of participants."
    ],
    color: "#50659F",
    logo: scipyLogo,
  },
  {
    title: "Find The Match App",
    subtitle: "Mobile Application Game",
    tools: ["Java", "Android Studio", "Git", "Scrum"],
    desc: [
      "Developed and created a new app based on the board game Spot it, using Java in Android Studio to give users a digital and customizable experience of the game",
      "Collaborated with three other classmates using Scrum agile process and Gitlab to efficiently divide tasks and complete each requirement before the deadline",
      "Designed and implemented an options menu using object-oriented programming that allows for the user to completely customize difficulty and images"
    ],
    color: "#50659F",
    logo: androidLogo
  }
];
