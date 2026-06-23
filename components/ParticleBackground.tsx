'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useIsMobile } from './useIsMobile';

/**
 * Subtle particle field for the hero section.
 * Desktop only — on mobile/touch devices this renders a simple static
 * gradient instead, per the animation philosophy (performance first).
 */
export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, [isMobile]);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 26,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ['#6366f1', '#8b5cf6', '#3b82f6'] },
        opacity: {
          value: { min: 0.15, max: 0.45 },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
        links: {
          enable: true,
          distance: 140,
          color: '#6366f1',
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.25 },
          },
        },
      },
      background: { color: 'transparent' },
    }),
    []
  );

  // Mobile / touch: simple static gradient, no particle engine at all.
  if (isMobile) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)',
        }}
      />
    );
  }

  if (!init) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.18), transparent 60%)',
        }}
      />
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <Particles id="hero-particles" options={options} className="h-full w-full" />
    </div>
  );
}
