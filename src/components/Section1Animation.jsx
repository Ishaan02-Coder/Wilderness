
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Section1Animation = ({ refs }) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    gsap.set(refs.liane1Ref.current, { drawSVG: 0 });
    gsap.set("body", { backgroundColor: "#47B27A" });
    gsap.set([
      refs.lianeklein1Ref.current,
      refs.lianeklein3Ref.current,
      refs.wiggleLeafRef.current,
      refs.lianeklein1MobileRef.current,
      refs.lianeklein3MobileRef.current,
      refs.wiggleLeafMobileRef.current,
    ], { scaleY: 0, transformOrigin: "top center" });

    mm.add("(min-width: 960px)", () => {
      gsap.timeline()
        .to("#abw_scroll_down", { opacity: 1, duration: 2 }, 0.25)
        .to("#abw_scroll_down", {
          yPercent: -10,
          yoyoEase: "power2.inOut",
          yoyo: true,
          repeat: -1,
          duration: 1,
        });

      gsap.timeline({
        defaults: { ease: "elastic.out(1, 0.3)" },
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      })
        .to(refs.lianeklein1Ref.current, { scaleY: 1, duration: 2 }, 0.5)
        .to(refs.wiggleLeafRef.current, { scaleY: 1, duration: 2.25 }, 1)
        .to(refs.lianeklein3Ref.current, { scaleY: 1, duration: 2 }, 0.5)
        .to("#abw_scroll_down", { opacity: 0, visibility: "hidden", duration: 0.5 }, 0.55);

      gsap.set(refs.wiggleLeafRef.current, { rotate: -10 });
      gsap.to(refs.wiggleLeafRef.current, {
        rotate: 10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top top",
        },
      });

      gsap.set([
        refs.tree1LeftRef.current,
        refs.tree2LeftRef.current,
        refs.tree3LeftRef.current,
      ], { transformOrigin: "center left" });
      gsap.set([
        refs.tree1RightRef.current,
        refs.tree2RightRef.current,
        refs.tree3RightRef.current,
      ], { transformOrigin: "center right" });
      gsap.set(refs.tree3RightRef.current, { yPercent: 10 });

      ScrollTrigger.create({
        trigger: refs.abwSection1Ref.current,
        pin: refs.abwSection1Ref.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        anticipatePin: 0.5,
      });

      gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      })
        .to(refs.tree3LeftRef.current, { scale: 0.5, rotate: -20, y: "10%" }, 0)
        .to(refs.tree2LeftRef.current, { scale: 0.5, rotate: -28, yPercent: -6 }, 0.25)
        .to(refs.tree1LeftRef.current, { scale: 0.5, yPercent: -3 }, 0.5)
        .to(refs.tree3RightRef.current, { scale: 0.5, rotate: 20, yPercent: 6 }, 0)
        .to(refs.tree2RightRef.current, { scale: 0.5, rotate: 28 }, 0.25)
        .to(refs.tree1RightRef.current, { scale: 0.657 }, 0.5)
        .fromTo("body", { backgroundColor: "#47B27A" }, { backgroundColor: "#13735F" }, 0)
        .fromTo(refs.liane1Ref.current, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 6 }, 1)
        .fromTo("#watchface, #watchface_mobile", { fill: "#13735F" }, { fill: "#E6CE00" }, 6)
        .fromTo("body", { backgroundColor: "#13735F" }, { backgroundColor: "#E6CE00" }, 6);
    });

    mm.add("(max-width: 959px)", () => {
      gsap.timeline()
        .to("#abw_scroll_down", { opacity: 1, duration: 2 }, 0.25)
        .to("#abw_scroll_down", {
          yPercent: -10,
          yoyoEase: "power2.inOut",
          yoyo: true,
          repeat: -1,
          duration: 1,
        });

      gsap.timeline({
        defaults: { ease: "elastic.out(1, 0.3)" },
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top 10%",
          end: "bottom bottom",
        },
      })
        .to(refs.lianeklein1MobileRef.current, { scaleY: 1, duration: 2 }, 0)
        .to(refs.wiggleLeafMobileRef.current, { scaleY: 1, duration: 2.25 }, 0)
        .to(refs.lianeklein3MobileRef.current, { scaleY: 1, duration: 2 }, 0)
        .to("#abw_scroll_down", { opacity: 0, visibility: "hidden", duration: 0.5 }, 0.55);

      gsap.set(refs.wiggleLeafMobileRef.current, { rotate: -10 });
      gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2 },
        repeat: -1,
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top 10%",
        },
      })
        .to(refs.wiggleLeafMobileRef.current, { rotate: 10 })
        .to(refs.wiggleLeafMobileRef.current, { rotate: -10 });

      gsap.set([
        refs.tree1LeftMobileRef.current,
        refs.tree2LeftMobileRef.current,
        refs.tree3LeftMobileRef.current,
      ], { transformOrigin: "center left" });
      gsap.set([
        refs.tree1RightMobileRef.current,
        refs.tree2RightMobileRef.current,
        refs.tree3RightMobileRef.current,
      ], { transformOrigin: "center right" });
      gsap.set(refs.tree3RightMobileRef.current, { rotate: 5, yPercent: -10, scale: 0.7 });
      gsap.set(".aw_btn_download", { opacity: 0, yPercent: -10 });

      ScrollTrigger.create({
        trigger: refs.abwSection1Ref.current,
        pin: refs.abwSection1Ref.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
      });

      gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: refs.abwSection1Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      })
        .to(refs.tree3LeftMobileRef.current, { scale: 0.5, rotate: -20, xPercent: -1 }, 0)
        .to(refs.tree3RightMobileRef.current, { scale: 0.5, rotate: 20, xPercent: 1 }, 0)
        .to("body", { backgroundColor: "#47B27A" }, { backgroundColor: "#13735F", duration: 2 }, 0)
        .to(".aw_btn_download", { opacity: 1, yPercent: 0 }, 0.5)
        .fromTo(refs.liane1Ref.current, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 6 }, 1)
        .fromTo("body", { backgroundColor: "#13735F" }, { backgroundColor: "#E6CE00", duration: 2 }, "-=2");
    });

    return () => mm.revert();
  }, [refs]);

  return null;
};

export default Section1Animation;
