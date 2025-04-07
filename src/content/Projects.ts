import AWSLogo from "../public/AWS.png"
import scipyLogo from "../public/scipy.png"
import androidLogo from "../public/android.png"
import peroptyxLogo from "../public/peroptyx.png"

interface Project {
  title: string;
  subtitle: string;
  tools: string[];
  desc: string[];
  color: string;
  logo: string;
}


export const projects: Project[] = [
  {
    title: "Peroptyx Data Analyst",
    subtitle: "Machine Learning Community Project",
    tools: ["Python", "Excel", "GenAI", "LLM", "Machine Learning"],
    desc: [
      "Evaluated the quality and relevance of data outputs, optimizing large language model performance through fine-tuning and rigorous validation techniques.",
      "Improved model accuracy and efficiency by up to 90% by analyzing data patterns and implementing strategic data preprocessing techniques."
    ],
    color: "#50659F",
    logo: peroptyxLogo,
  },
  {
    title: "StudentBubble",
    subtitle: "Serverless Q&A Web App",
    tools: ["Python", "AWS", "HTML", "CSS"],
    desc: [
      "Designed and implemented a fully serverless backend using AWS Lambda, API Gateway, and DynamoDB, enabling scalable and cost-effective Q&A services for students.",
      "Developed RESTful APIs to handle user content, queries, and data storage with high availability and fault tolerance.",
      "Architected microservices to decouple functionalities and enhance maintainability, supporting seamless updates and efficient scaling."
    ],
    color: "#50659F",
    logo: AWSLogo,
  },
  {
    title: "Find The Match App",
    subtitle: "Mobile Application Game",
    tools: ["Java", "Android Studio", "Git", "Scrum"],
    desc: [
      "Developed an interactive Android matching game in Java, applying object-oriented principles to create modular and reusable components.",
      "Implemented the Model-View-Controller (MVC) design pattern to separate game logic, UI, and data handling, improving maintainability and scalability.",
      "Collaborated with three other classmates using Scrum agile process and Gitlab to efficiently divide tasks and complete each requirement before the deadline."
    ],
    color: "#50659F",
    logo: androidLogo
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
  }
];
