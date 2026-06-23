'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from "next/image";

export interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: 'easeOut' }}
      className="card-glow rounded-2xl border border-border bg-bg-card p-6 md:p-7 flex flex-col h-full"
    >
      {project.image && (
        <div className="relative w-full h-52 mb-5 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
)}

      <h3 className="text-xl font-semibold text-text-primary mb-2.5">
        {project.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full border border-border text-text-secondary"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent transition-colors duration-200"
          >
            Live demo <ExternalLink size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200"
          >
            GitHub <Github size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
