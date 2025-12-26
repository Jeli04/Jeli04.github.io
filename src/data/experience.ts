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
    date: "2025—Present",
    title: "Research Assistant",
    company: "FORTIS Lab @ USC",
    description:
      "Foundations Of Robust Trustworthy Intelligent Systems",
    companyUrl: "https://viterbi-web.usc.edu/~yzhao010/lab.html",
  },
  {
    date: "2025",
    title: "Machine Learning Engineer Intern",
    company: "NexaAI",
    companyUrl: "https://nexa.ai",
  },
  {
    date: "Summer 2024",
    title: "Research Intern",
    company: "WCSNG Lab @ UCSD",
    description:
      "Wireless Communications Sensing and Networking",
    companyUrl: "https://wcsng.ucsd.edu/",
  },
  {
    date: "2023—Present",
    title: "Research Assistant",
    company: "CISL Lab @ UCR",
    description:
      "Collaborative Intelligent Systems Lab",
    companyUrl: "https://cisl.ucr.edu",
  },
];
