import React, { useEffect, useState, useRef } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const throttleTimeout = useRef(null);

  const handleScroll = () => {
    if (throttleTimeout.current === null) {
      throttleTimeout.current = setTimeout(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100 * 0.35;
        setScrollProgress(scrolled);
        throttleTimeout.current = null;
      }, 100); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, []);

  return (
    <progress
      max="100"
      value={scrollProgress}
      className="scroll-progress-bar"
    ></progress>
  );
};

export default ProgressBar;
