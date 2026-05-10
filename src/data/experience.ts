export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2026 - August 2026",
    title: "Research Intern",
    company: "Samsung Research America",
    description:
      "AI and Robot Intelligence Research",
    companyUrl: "https://sra.samsung.com/",
  },
  {
    date: "December 2025 - Present",
    title: "Research Assistant",
    company: "ALLeGRo Lab @ USC",
    description:
      "AI, Language, Learning, Generalization, and Robustness Lab",
    companyUrl: "https://allegro-lab.github.io/",
  },
  {
    date: "July 2025 - Novemeber 2025",
    title: "Research Assistant",
    company: "FORTIS Lab @ USC",
    description:
      "Foundations Of Robust Trustworthy Intelligent Systems Lab",
    companyUrl: "https://viterbi-web.usc.edu/~yzhao010/lab.html",
  },
  {
    date: "June 2025 - December 2025",
    title: "Machine Learning Engineer Intern",
    company: "NexaAI (Acquired by Qualcomm)",
    description:
      "Worked on deploying multimodal ML models on edge devices for text, video, and speech understanding, and helped prototype HyperLink's on-device Video RAG pipeline.",
    companyUrl: "https://nexa.ai",
  },
  {
    date: "June 2024 - September 2024",
    title: "Research Intern",
    company: "WCSNG Lab @ UCSD, Qualcomm Institute",
    description:
      "Wireless Communications Sensing and Networking Lab",
    companyUrl: "https://wcsng.ucsd.edu/",
  },
  {
    date: "November 2023 - Present",
    title: "Research Assistant",
    company: "CISL Lab @ UCR",
    description:
      "Collaborative Intelligent Systems Lab",
    companyUrl: "https://cisl.ucr.edu",
  },
];
