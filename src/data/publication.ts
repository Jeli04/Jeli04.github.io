export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "arxiv",
    title: "Are LLMs Reliable Rankers? Rank Manipulation via Two-Stage Token Optimization",
    authors: "Tiancheng Xing, Jerry Li, Yixuan Du, Xiyang Hu",
    paperUrl: "https://arxiv.org/pdf/2510.06732",
    codeUrl: "https://github.com/glad-lab/RAF",
    imageUrl: "/images/raf.png",
  },
  {
    year: "2025",
    conference: "arxiv",
    title: "Beyond ROUGE: N-Gram Subspace Features for LLM Hallucination Detection",
    authors: "Jerry Li, Evangelos Papalexakis",
    paperUrl: "https://arxiv.org/pdf/2509.05360",
    imageUrl: "/images/nsr.png",
  },
  {
    year: "2025",
    conference: "CoRL",
    title: "BEVCALIB: LiDAR-Camera Calibration via Geometry-Guided Bird's-Eye View Representation",
    authors: "Weiduo Yuan, Jerry Li, Justin Yue, Divyank Shah, Konstantinos Karydis, Hang Qiu",
    paperUrl: "https://arxiv.org/abs/2506.02587",
    codeUrl: "https://github.com/UCR-CISL/BEVCalib/tree/main",
    imageUrl: "/images/bevcalib.png",
  },
  {
    year: "2025",
    conference: "SenSys Demo",
    title: "CMS: Enabling Real-world Cooperative Multi-modal Sensing",
    authors: "Bo Wu, Jerry Li, Ruoshen Mo, Justin Yue, Hang Qiu",
    paperUrl: "https://dl.acm.org/doi/abs/10.1145/3715014.3724372",
    codeUrl: "https://github.com/UCR-CISL/NOPUSH/tree/main",
    imageUrl: "/images/cms.png",
  },
  {
    year: "2025",
    conference: "SenSys Demo",
    title: "C-Shenron: A Realistic Radar Simulation Framework for CARLA",
    authors: "Satyam Srivastava, Jerry Li, Pushkal Mishra, Kshitiz Bansal, Dinesh Bharadia",
    paperUrl: "https://ucsdwcsng.github.io/files/c-shenron-paper.pdf",
    codeUrl: "https://github.com/ucsdwcsng/c-shenron",
    imageUrl: "/images/cshenron.png",
  },
];
