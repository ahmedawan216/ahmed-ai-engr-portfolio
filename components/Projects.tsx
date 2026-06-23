'use client';

import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    title: 'Pepper AI Assistant',
    image: '/images/Pepper_Phase-2_UI.png',
    description:
      'A fully deployed AI chatbot with real-time streaming responses, persistent memory using SQLite, and dynamic model switching between multiple LLMs.',
    tech: ['Python', 'Streamlit', 'Groq', 'SQLite'],
    liveUrl: 'https://pepper-bot.streamlit.app',
    githubUrl: 'https://github.com/ahmedawan216/Pepper_AI-Chatbot',
  },
  {
    title: 'InteractDocs',
    image: '/images/InteractDocs.png',
    description:
      'A RAG-powered PDF analyzer that lets users chat with any document and get accurate, context-grounded answers instantly using vector search.',
    tech: ['Python', 'LangChain', 'FAISS', 'Groq', 'HuggingFace'],
    liveUrl: 'https://interactdocs.streamlit.app',
    githubUrl: 'https://github.com/ahmedawan216/InteractDocs'
  },
  {
    title: 'AI Interview Coach',
    image: '/images/AI_Interview_Coach-1.png',
    description:
      'A multi-agent Agentic AI system that analyzes resumes, parses job descriptions, generates tailored interview questions, and provides real-time coaching feedback using coordinated AI agents working together autonomously.',
    tech: ['Python', 'LangChain', 'LangGraph', 'Agentic AI', 'Groq', 'Streamlit'],
    liveUrl: 'https://interviewcoach-ai.streamlit.app',
    githubUrl: 'https://github.com/ahmedawan216/ai-interview-coach'
  },
  {
    title: 'AhmedAI Discord Bot',
    image: '/images/Discord_V2-edited.png',
    description:
      'An AI-powered Discord bot with a custom personality and persistent memory using SQLite, capable of natural multi-turn conversations.',
    tech: ['Python', 'Discord.py', 'OpenRouter', 'SQLite'],
    githubUrl: 'https://github.com/ahmedawan216/AhmedAI-Discord-Bot',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-14"
        >
          <p className="text-accent text-sm font-medium mb-3 tracking-wide">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Things I&apos;ve built and shipped
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Four AI systems, each deployed and working — not prototypes
            sitting in a notebook.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
