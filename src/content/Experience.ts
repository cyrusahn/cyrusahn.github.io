interface Experience {
  role: string;
  company: string;
  time: string;
  tools: string[];
  desc: string[];
  bgColor: string;
  logo: string;
}

export const experience: Experience[] = [
  {
    role: "Data Analyst",
    company: "Peroptyx",
    time: "July 2024 – Present",
    tools: ["Python", "Excel", "GenAI", "LLM", "Machine Learning"],
    desc: [
      "Leveraged analytical expertise to evaluate the quality and relevance of data outputs, optimizing large language model (LLM) performance through fine-tuning.",
      "Utilized advanced prompt engineering and rigorous validation techniques to refine input data, ensuring it aligns with user and client requirements while enhancing overall model output quality."
    ],
    bgColor: "#50659F",
    logo: "./peroptyx.png",
  },
  {
    role: "Software Developer Intern",
    company: "EvidenceBanc",
    time: "Sept. 2023 – Apr. 2024",
    tools: ["PHP", "AWS", "Figma"],
    desc: [
      "Led a team of 5 in crafting a user-centered interface, improving usability and accessibility by 80% through comprehensive user research and iterative usability testing.",
      "Functioned as a technical consultant for stakeholders, effectively addressing and resolving 100% of issues and concerns throughout the project development lifecycle.",
      "Employed industry-standard tools such as Figma to design high-fidelity prototypes and mock-ups, ensuring adherence to UI/UX design principles."
    ],
    bgColor: "#B9C8E5",
    logo: "./evidencebanc.png",
  },
  {
    role: "Client Systems Technician Co-op",
    company: "PHSA - BC Cancer",
    time: "May 2022 – Dec. 2022",
    tools: ["RHEL (CentOS)", "Windows", "Bash", "Jira", "BitBucket", "Active Directory", "LDAP", "VMware", "Puppet"],
    desc: [
      "Eliminated the need for manual intervention and expedited processing workflows by 5+ hours by developing Bash scripts that automated file updates encompassing permissions adjustments, deletions, and creations.",
      "Managed and maintained petabyte-scale storage servers, computing clusters, GPU clusters, and network racks, ensuring seamless accessibility and operational continuity for 400+ employees."
    ],
    bgColor: "#9397B1",
    logo: "./phsa.png",
  }
];
