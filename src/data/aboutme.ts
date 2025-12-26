export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string;
  secretDescription?: string;
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jerry Li",
  title: "MSCS Student",
  institution: "University of Southern California",
  description:
    "Welcome! My name is Jerry Li, and I am a first-year MSCS Student at USC. I'm currently investigating a variety of topics ranging from embedding spaces of foundational models to LLM robustness. My previous experiences primarily lie within autonomous driving; however, I've also worked on various projects involving applications and experiments with LLMs. I was grateful to be advised by <a href='https://hangqiu.github.io/'>Dr. Hang Qiu</a> and <a href='https://www.cs.ucr.edu/~epaMDpalex/'>Dr. Vagelis Papalexakis</a> during my undergraduate studies at the University of California, Riverside (UCR).",
  email: "lijc@usc.edu",
  imageUrl: "/images/me.png",
  githubUsername: "Jeli04",
  linkedinUsername: "jerryli2025",
  institutionUrl: "https://www.usc.edu",
};
