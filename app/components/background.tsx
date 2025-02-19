'use client';

import { useEffect, useState } from 'react';
import styles from './background.module.css';

const Background = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    // Check system dark mode preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDark(e.matches);
      setIsAnimationReady(true);
    };

    // Initial check
    updateTheme(darkModeQuery);

    // Listen for changes
    darkModeQuery.addEventListener('change', updateTheme);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsAnimationReady(true);
        setIsDark(prev => !prev);
      }
    };

    const handleClick = () => {
      setIsAnimationReady(true);
      setIsDark(prev => !prev);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      darkModeQuery.removeEventListener('change', updateTheme);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Update document classes when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      className={`${styles.root} ${
        isAnimationReady ? styles.animation_ready : ''
      } ${isDark ? styles.dark : ''}`}
    >
      <div className={styles.dappled_light}>
        <div className={styles.glow}></div>
        <div className={styles.glow_bounce}></div>
        <div className={styles.perspective}>
          <div className={styles.leaves}>
            <svg style={{ width: 0, height: 0, position: 'absolute' }}>
              <defs>
                <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" numOctaves="1" seed="1">
                    <animate
                      attributeName="baseFrequency"
                      dur="20s"
                      keyTimes="0;0.5;1"
                      values="0.005 0.003;0.008 0.006;0.005 0.003"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic">
                    <animate
                      attributeName="scale"
                      dur="24s"
                      keyTimes="0;0.5;1"
                      values="45;60;45"
                      repeatCount="indefinite"
                    />
                  </feDisplacementMap>
                </filter>
              </defs>
            </svg>
          </div>
          <div className={styles.blinds}>
            <div className={styles.shutters}>
              {Array.from({ length: 23 }).map((_, i) => (
                <div key={i} className={styles.shutter}></div>
              ))}
            </div>
            <div className={styles.vertical}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.progressive_blur}>
          <div className={styles.blur_layer1}></div>
          <div className={styles.blur_layer2}></div>
          <div className={styles.blur_layer3}></div>
          <div className={styles.blur_layer4}></div>
        </div>
      </div>
    </div>
  );
};

export default Background; 