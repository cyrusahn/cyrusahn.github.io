import phsaLogo from "../public/phsa.png"
import evidencebancLogo from "../public/evidencebanc.png"

interface Experience {
  role: string;
  company: string;
  time: string;
  tools: string[];
  desc: string[];
  bgColor: string;
  logo: string;
}


// Define the experience array with typed logos
export const experience: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "EvidenceBanc",
    time: "Sept. 2023 – Apr. 2024",
    tools: ["PHP", "AWS", "Figma"],
    desc: [
      "Developed the front end of a dashcam marketplace website using React to showcase video clips, video requests, and facilitate transactions.",
      "Functioned as a technical consultant for stakeholders, effectively addressing and resolving 100% of issues and concerns throughout the project development lifecycle.",
      "Employed industry-standard tools such as Figma to design high-fidelity prototypes and mock-ups, ensuring adherence to UI/UX design principles."
    ],
    bgColor: "#B9C8E5",
    logo: evidencebancLogo,
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
    logo: phsaLogo, 
  }
];
