'use client';

import React from 'react';
import { motion } from 'framer-motion';

const journey = [
  {
    label: 'UI/UX',
    detail: 'Started with design fundamentals — layout, hierarchy, usability',
  },
  {
    label: 'Frontend',
    detail: 'Built production apps with React, Next.js, and TypeScript',
  },
  {
    label: 'AI Engineering',
    detail: 'Now building RAG systems, multi-agent AI, and LLM applications',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function About(): JSX.Element {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-accent text-sm font-medium mb-3 tracking-wide">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              From frontend to AI
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              I started in UI/UX, learning how people actually use software
              before I learned how to build it. That led me into frontend
              development with React and Next.js, where I shipped real
              products. Today I&apos;m focused on AI engineering — building
              RAG systems, multi-agent AI, and LLM-powered applications that
              combine the same product instincts with real, deployed AI
              infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="hidden md:flex items-center justify-center relative h-80 group cursor-pointer"
          >
            <div
              aria-hidden="true"
              className="absolute w-72 h-72 rounded-full blur-3xl transition-all duration-500 group-hover:scale-110"
              style={{
                background:
                  'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute w-72 h-72 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle, rgba(99,102,241,0.6), transparent 70%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute w-48 h-48 rounded-full blur-2xl translate-x-12 -translate-y-8 transition-all duration-500 group-hover:scale-110"
              style={{
                background:
                  'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute w-48 h-48 rounded-full blur-2xl translate-x-12 -translate-y-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle, rgba(168,85,247,0.5), transparent 70%)',
              }}
            />
            <div className="relative w-56 h-56 rounded-2xl border border-border bg-bg-secondary/40 backdrop-blur-sm rotate-6 transition-transform duration-500 group-hover:rotate-3" />
            <div className="absolute w-56 h-56 rounded-2xl border border-accent/30 bg-bg-secondary/20 backdrop-blur-sm -rotate-3 transition-transform duration-500 group-hover:-rotate-1" />
          </motion.div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {journey.map((step, i) => (
              <motion.div
                key={step.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  {i < journey.length - 1 && (
                    <div className="hidden md:block h-px flex-1 bg-border" />
                  )}
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-1.5">
                  {step.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}