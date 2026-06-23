'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from './MagneticButton';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
});

const NAME = 'Ahmed Awan';

const stats = [
  { value: 4, label: 'AI Products Deployed', suffix: '' },
  { value: 0, label: 'RAG Systems', suffix: '', display: 'RAG' },
  { value: 0, label: 'Agentic AI', suffix: '', display: 'Agentic' },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const controls = animate(motionValue, value, {
        duration: 3,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
        repeat: Infinity,
        repeatDelay: 1.5,
      });
      return () => controls.stop();
    }
  }, [isInView, value, motionValue]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  const words = NAME.split(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Static gradient glow base, always present, particles layer on top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(99,102,241,0.10), transparent 65%)',
        }}
      />

      <div className="section-container relative z-10 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-accent font-medium mb-5 tracking-wide"
        >
          AI Engineer · Rawalpindi, Pakistan
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 flex justify-center flex-wrap gap-x-4">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-text-primary"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="gradient-text text-xl sm:text-2xl md:text-3xl font-semibold mb-6 max-w-3xl mx-auto"
        >
          Building RAG systems, AI agents, and LLM-powered applications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          From frontend developer to AI builder — I build real, deployed AI
          products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <MagneticButton
            href="#projects"
            onClick={undefined}
            variant="primary"
          >
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Get In Touch
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto pb-10"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
              <Counter value={4} />+
            </div>
            <p className="text-xs md:text-sm text-text-secondary">
              AI Products Deployed
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
              RAG
            </div>
            <p className="text-xs md:text-sm text-text-secondary">
              Systems Built
            </p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
              Agentic
            </div>
            <p className="text-xs md:text-sm text-text-secondary">
              AI Workflows
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
