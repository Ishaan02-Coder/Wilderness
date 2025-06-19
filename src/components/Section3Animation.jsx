
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionThreeAnimation = ({ refs }) => {
  useEffect(() => {
    const media = gsap.matchMedia();
    gsap.set([refs.abwSection3H2FirstlineRef.current, refs.abwSection3H2SecondlineRef.current], { opacity: 0, yPercent: 20 });
              gsap.set(refs.abwParanussbaumImageRef.current, { opacity: 0.5, yPercent: 20 });
        
    media.add("(min-width: 960px)", () => {
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: refs.abwSection3Ref.current,
          scrub: true,
          pin: false,
          start: "top 50%",
          end: "bottom 50%",
        }
      })
        .fromTo(refs.liane5Ref.current, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 4 }, 0)
        .to(refs.abwParanussbaumRef.current.querySelector("img"), { opacity: 1, yPercent: 0, duration: 1 }, 0)
        .to(refs.abwSection3H2FirstlineRef.current, { opacity: 1, yPercent: 0, duration: 1 }, 0)
        .to(refs.abwSection3H2SecondlineRef.current, { opacity: 1, yPercent: 0, duration: 1 }, 0.25)
        .to("body", { backgroundColor: "#F7F7F7", duration: 2 }, 2);
    });

    media.add("(max-width: 959px)", () => {
      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: refs.abwSection3Ref.current,
          scrub: true,
          pin: false,
          start: "top 50%",
          end: "bottom 11%",
        }
      })
        .fromTo(refs.liane5Ref.current, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 3 }, 0)
        .to(refs.abwParanussbaumRef.current.querySelector("img"), { opacity: 1, yPercent: 0, duration: 1 }, 0)
        .to(refs.abwSection3H2FirstlineRef.current, { opacity: 1, yPercent: 0, duration: 1 }, 0)
        .to(refs.abwSection3H2SecondlineRef.current, { opacity: 1, yPercent: 0, duration: 1 }, 0.25)
        .to("body", { backgroundColor: "#F7F7F7", duration: 2 }, 2);
    });

    return () => media.revert();
  }, [refs]);

  return null;
};

export default SectionThreeAnimation;
