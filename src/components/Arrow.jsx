import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Arrow = () => {
  const abwScrollDownRef = useRef(null);

  useEffect(() => {
    gsap.to(abwScrollDownRef.current, {
      y: -20,            // move up 20px
      duration: 1.0,
      repeat: -1,        // infinite loop
      yoyo: true,        // go back down
      ease: 'sine.inOut' // smooth easing
    });
  }, []);

  return (
    <svg
      ref={abwScrollDownRef}
      id="abw_scroll_down"
      viewBox="0 0 97 96"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      style={{
        opacity: 1,
        visibility: 'visible',
        transform: 'translate3d(-32.3313px, 0px, 0px)'
      }}
    >
      <path
        d="M.748 3.64C.318 3.296.05 2.788.006 2.24c-.043-.55.14-1.094.512-1.504a1.999 1.999 0 0 1 2.91-.055l44.56 40.16L92.748.442a1.998 1.998 0 0 1 2.734.218c.711.785.688 1.985-.054 2.742L49.327 45.022a2.007 2.007 0 0 1-2.68 0L.748 3.64Zm92 47.16L47.986 91.222 3.427 51.062a2.003 2.003 0 1 0-2.68 2.98l45.899 41.359a1.999 1.999 0 0 0 2.68 0L95.426 53.78a2.002 2.002 0 0 0-1.21-3.559 2.013 2.013 0 0 0-1.47.598l.001-.02Z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Arrow;
