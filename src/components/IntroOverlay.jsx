import React, { useEffect, useRef, useState } from 'react';
import './IntroOverlay.css';

const logoIcon = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168">
  <rect width="168" height="168" rx="24" fill="#050608"/>
  <rect x="4" y="4" width="160" height="160" rx="22" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.6"/>
  <circle cx="84" cy="72" r="28" fill="none" stroke="#16a34a" stroke-width="4"/>
  <line x1="84" y1="44" x2="84" y2="100" stroke="#fbbf24" stroke-width="3"/>
  <line x1="56" y1="72" x2="112" y2="72" stroke="#fbbf24" stroke-width="3"/>
  <text x="84" y="128" text-anchor="middle" fill="#fbbf24" font-family="sans-serif" font-size="14" font-weight="700" letter-spacing="2">HALAL</text>
</svg>`);

// Plays once per browser session. Reveal-style intro: a green-dark ground is
// painted, the mark resolves, a gold line draws, then the ground lifts away.
const SESSION_KEY = 'qhm_intro_played';
const HOLD_MS = 820;
const LIFT_MS = 700;

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function IntroOverlay() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === 'undefined') return 'done';
    if (prefersReducedMotion()) return 'done';
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return 'done';
    } catch (e) {}
    return 'enter';
  });

  const timers = useRef([]);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (phase === 'done') {
      document.documentElement.removeAttribute('data-intro');
      return;
    }

    document.documentElement.setAttribute('data-intro', 'active');
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (e) {}

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setPhase('lift');
      timers.current.push(setTimeout(() => setPhase('done'), LIFT_MS));
    };

    timers.current.push(setTimeout(finish, HOLD_MS));

    const skip = () => finish();
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('wheel', skip, { once: true, passive: true });
    window.addEventListener('touchstart', skip, { once: true, passive: true });
    window.addEventListener('pointerdown', skip, { once: true });

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.overflow = prevOverflow;
      document.documentElement.removeAttribute('data-intro');
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchstart', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [phase === 'done']);

  if (phase === 'done') return null;

  return (
    <div
      className={`intro-overlay ${phase === 'lift' ? 'is-lifting' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro-inner">
        <img className="intro-mark" src={logoIcon} alt="" width="168" height="168" />
        <span className="intro-rule" />
        <span className="intro-label">Quality Halal Market</span>
      </div>
    </div>
  );
}