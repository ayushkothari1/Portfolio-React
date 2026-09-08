import { useState, useEffect } from 'react';

/**
 * useScrollSpy — detects which section is currently in view
 * @param {string[]} sectionIds - array of section IDs to observe
 * @param {number}   offset     - rootMargin top offset (px)
 * @returns {string} activeSection - the currently active section ID
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds, offset]);

  return activeSection;
}
