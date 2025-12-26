export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "LinkU",
    description:
      "Social media platform where AI agents act as your digital twin, discovering compatible connections through autonomous conversations so you can focus on the ones that matter.",
    technologies: ["JavaScript", "Node JS", "React", "SupaBase", "OpanAI API", "Letta API"],
    projectUrl: "https://devpost.com/software/linku",
  },
  {
    title: "cuda-miniGPT",
    description:
      "A CUDA implementation of the inference pass of a Decoder only transformer.",
    technologies: ["C", "CUDA", "Python", "PyTorch"],
    codeUrl: "https://github.com/Jeli04/cuda-miniGPT",
  },
  {
    title: "Differential Multimodal Transformer",
    description:
      "For CS228 (Deep Learning), we implemented the Differential Attention proposed in the Differential Transformer Paper.",
    technologies: ["Python", "PyTorch", "LoRA", "HuggingFace"],
    codeUrl: "https://github.com/Jeli04/CS228-Project",
  },
  {
    title: "PaperSync - Berkeley LLM Hackathon",
    description:
      "Berkeley LLM Hackathon Project where we made a X (Twitter) like platform but for Research only.",
    technologies: ["React", "TypeScript", "CSS", "SupaBase", "GPT-4 API"],
    projectUrl: "https://devpost.com/software/papersync",
  },
  {
    title: "TicTacToe Neural Network",
    description:
      "Trained a PyTorch Neural Network to learn how to play TicTacToe.",
    technologies: ["Python", "PyTorch"],
    codeUrl: "https://github.com/Jeli04/TicTacToeNeuralNetwork",
  },
  {
    title: "C++ Grad Engine",
    description:
      "C++ based grad engine to replicate a mini PyTorch with CPU parallelization support.",
    technologies: ["C++"],
    codeUrl: "https://github.com/nsnod/CTorch"
  },
];
