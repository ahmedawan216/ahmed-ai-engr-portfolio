'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'AI & LLM',
    skills: [
      'Python',
      'LangChain',
      'RAG',
      'Agentic AI',
      'LangGraph',
      'LLMs',
      'Prompt Engineering',
      'Groq',
      'OpenAI API',
      'HuggingFace',
    ],
  },
  {
    category: 'Concepts',
    skills: [
      'RAG Pipelines',
      'Multi-Agent Systems',
      'Vector Search',
      'Embeddings',
      'Document Retrieval',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Databases',
    skills: ['Git', 'GitHub', 'SQLite', 'Streamlit', 'FAISS', 'Chroma', 'Vector Databases'],
  },
];

const totalSkills = skillGroups.reduce(
  (sum, group) => sum + group.skills.length,
  0
);

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-14"
        >
          <p className="text-accent text-sm font-medium mb-3 tracking-wide">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What I work with
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            The technologies and concepts I use to design, build, and deploy
            real AI systems, from RAG pipelines to multi-agent workflows.
          </p>
          <p className="text-text-secondary text-sm mt-3">
            {skillGroups.length} categories · {totalSkills}+ technologies
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: 'easeOut' }}
            >
              <h3 className="text-text-secondary text-sm font-medium mb-4 tracking-wide uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.35,
                      delay: gi * 0.1 + si * 0.04,
                      ease: 'easeOut',
                    }}
                    className="px-4 py-2 rounded-lg border border-border bg-bg-card text-text-primary text-sm transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}