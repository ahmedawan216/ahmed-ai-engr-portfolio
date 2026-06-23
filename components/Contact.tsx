'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import MagneticButton from './MagneticButton';

const socials = [
  {
    label: 'Email',
    value: 'ahmediqbalawan124@gmail.com',
    href: 'mailto:ahmediqbalawan124@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-awan123',
    href: 'https://linkedin.com/in/ahmed-awan123',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/ahmedawan216',
    href: 'https://github.com/ahmedawan216',
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)',
        }}
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-bg-card mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-text-secondary font-medium">
              Available for work
            </span>
          </div>

          <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-5">
            Let&apos;s Build Something
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto mb-12">
            Open to remote AI Engineering roles and freelance projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <MagneticButton href="mailto:ahmediqbalawan124@gmail.com" variant="primary">
            Say hello
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(99,102,241,0.4)] transition-all duration-300">
                  <Icon size={17} />
                </span>
                <span className="text-sm">{social.value}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}