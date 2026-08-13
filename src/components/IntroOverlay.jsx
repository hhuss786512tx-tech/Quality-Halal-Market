import React, { useEffect, useRef, useState } from 'react';
import logoMark from '../assets/logo.webp';
import './IntroOverlay.css';

// Reveal-style intro: a dark ground is painted, the real store logo resolves,
// a gold line draws under it, then the ground lifts away to expose the page.
// Unlike the original version of this component, this one is NOT gated by
// sessionStorage — it plays on every full page load AND every time the parent
// remounts it with a new `key` (used for in-app navigation between pages), by
// explicit request. It still respects prefers-reduced-motion and is
// click/tap/key/scroll-skippable.
const HOLD_MS = 780;
const LIFT_MS = 700;

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function IntroOverlay() {
  const [phase, setPhase] = useState(() => (prefersReducedMotion() ? 'done' : 'enter'));
  const timers = useRef([]);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (phase === 'done') return;

    document.documentElement.setAttribute('data-intro', 'active');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`intro-overlay ${phase === 'lift' ? 'is-lifting' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro-inner">
        <img className="intro-mark" src={logoMark} alt="" width="152" height="152" />
        <span className="intro-rule" />
        <span className="intro-label">Quality Halal Market</span>
      </div>
    </div>
  );
}
