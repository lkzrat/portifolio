import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import OraclyImg from "../public/Oracly.jpeg";
import TaskerImg from "../public/Tasker.png";
import CsnImg from "../public/csn.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Diploma in IT",
    location: "CEFET-RJ, Rio de Janeiro",
    description:
      "Completed a technical diploma with a focus on computer networks, programming fundamentals, and IT infrastructure.",
    icon: React.createElement(LuGraduationCap),
    date: "January 2019 – December 2021",
  },
  {
    title: "Computer Engineering Student",
    location: "UERJ, Rio de Janeiro",
    description:
      "Pursuing a degree in Computer Engineering with emphasis on AI development, machine learning, and scalable software architecture.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022 – January 2027",
  },
  {
    title: "AI & Automation Researcher",
    location: "CBPF (Brazilian Center for Physics Research), Rio de Janeiro",
    description:
      "Built Python-based automation systems, designed real-time data processing algorithms with smart sensors, and prototyped ML pipelines for experimental data.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 – May 2024",
  },
  {
    title: "AI & Automation Python Developer",
    location: "Mundivox, Rio de Janeiro",
    description:
      "Developed Python tools for network monitoring automation, implemented RAG-based chatbot using LangChain and vector databases, and created data-driven incident analysis pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – Now",
  },
] as const;

export const projectsData = [
  {
    title: "Oracly, an AI-Powered Enterprise Chatbot",
    description:
      "AI chatbot accessing internal data for accurate answers, running locally for security, using RAG, NLP and LLM's.",
    tags: ["Python", "Langchain", "Ollama", "FAISS", "FastAPI", "React"],
    imageUrl: OraclyImg,
  },
  {
    title: "Tasker, Enterprise Database Manager",
    description:
      "Created for a company I worked at to replace .xlsx files for a database, with a user-friendly interface and reporting tools.",
    tags: ["Python", "FastAPI", "React", "SQLAlchemy", "PostgreSQL"],
    imageUrl: TaskerImg,
  },
  {
    title: "Data Analysis Tool for CSN",
    description:
      "Algorithm to process datasets, identify defects in steel sheets, and optimize cutting strategies.",
    tags: ["Python", "Pandas", "Electron", "numpy", "Matplotlib", "Node.js"],
    imageUrl: CsnImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "C",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",

  // Frameworks & Libraries
  "FastAPI",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",

  // AI & Machine Learning
  "LangChain",
  "LlamaIndex",
  "RAG Pipelines",
  "LLMs (OpenAI, Anthropic)",

  // Databases
  "Vector Databases (Chroma, Pinecone)",
  "PostgreSQL",
  "MySQL",

  // DevOps & Tools
  "Git",
  "Docker",
  "CI/CD (GitHub Actions)",
  "Prompt Engineering",
  "Semantic Search"
];
