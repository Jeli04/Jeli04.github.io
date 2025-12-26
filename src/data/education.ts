export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—Present",
    institution: "University of Southern California",
    degree: "M.S. in Computer Science",
  },
  {
    year: "2022—2025",
    institution: "University of California, Riverside",
    degree: "B.S. in Computer Science",
  },
];
