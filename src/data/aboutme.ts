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
    "Welcome! I am a upcoming AI/Robot Intelligence research intern at <a href='https://sra.samsung.com/'>Samsung Research America</a> and a first-year MSCS Student at USC where I'm currently advised by <a href='https://johntzwei.github.io/'>Johnny Tian-Zheng Wei</a> and <a href='https://robinjia.github.io/'>Dr. Robin Jia</a>. My interests are Contiual Learning and Memorization, specifally how LLMs/VLMs/MLLMs can adaptivly interact with various enviorments (both physical and virtual). I have previous experiences in autonmous driving research and edge ML engineering. I was grateful to be advised by <a href='https://hangqiu.github.io/'>Dr. Hang Qiu</a> and <a href='https://www.cs.ucr.edu/~epapalex/'>Dr. Vagelis Papalexakis</a> during my undergraduate studies at the University of California, Riverside (UCR).",
  email: "lijc@usc.edu",
  imageUrl: "/images/me.png",
  githubUsername: "Jeli04",
  linkedinUsername: "jerryli2025",
  institutionUrl: "https://www.usc.edu",
  googleScholarUrl: "https://scholar.google.com/citations?user=8JKtZgMAAAAJ&hl=en",
  twitterUsername: "jeli_04",
};
