// File Structure Suggestion (continued):
// - components/
//     ├── CommonRefs.js             ✅ done earlier
//     ├── SectionTwoAnimation.jsx   ✅ desktop version done
//     ├── SectionThreeAnimation.jsx ✅ done
//     ├── Section2Animation.jsx     ✅ now mobile+desktop version
//     └── OtherSVGContent.jsx       ✅ done

// Section2Animation.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const Section2Animation = ({ refs }) => {
  useEffect(() => {
    const customEase = gsap.parseEase("M0,0 C0.066,0.148 0.118,0.434 0.131,0.56 0.152,0.766 0.172,0.911 0.22,0.911 0.256,0.911 0.273,0.872 0.314,0.81 0.369,0.725 0.405,0.753 0.418,0.762 0.494,0.812 0.486,0.902 0.576,0.912 0.679,0.923 0.694,0.884 0.776,0.904 0.88,0.95 0.872,0.98 1,1");

    const media = gsap.matchMedia();

    gsap.set([refs.watchfaceMobileRef.current, refs.watchfaceRef.current], { fill: "transparent" });
    gsap.set([
      refs.watchleaf2Ref.current, refs.watchleaf3Ref.current,
      refs.watchleaf2MobileRef.current, refs.watchleaf3MobileRef.current
    ], { scale: 0, transformOrigin: "left bottom" });
    gsap.set([
      refs.watchleaf8Ref.current, refs.watchleaf8MobileRef.current
    ], { scale: 0, transformOrigin: "right bottom" });
    gsap.set([
      refs.watchleaf5Ref.current, refs.watchleaf7Ref.current,
      refs.watchleaf5MobileRef.current, refs.watchleaf7MobileRef.current
    ], { scale: 0, transformOrigin: "left top" });
    gsap.set([
      refs.watchleaf4Ref.current, refs.watchleaf6Ref.current,
      refs.watchleaf4MobileRef.current, refs.watchleaf6MobileRef.current
    ], { scale: 0, transformOrigin: "right top" });
    gsap.set([refs.number100prozentRef.current, refs.number100prozentMobileRef.current], {
      yPercent: 300, opacity: 0
    });
    gsap.set([refs.abwForestPhotoRef.current, refs.abwForestPhotoMobileRef.current], {
      yPercent: 100
    });
    gsap.set([
      refs.watchRef.current, refs.watchpointerRef.current,
      refs.nochsindRef.current, refs.ProzentRef.current,
      refs.LandoberflaecheRef.current, refs.watchMobileRef.current,
      refs.watchpointerMobileRef.current, refs.nochsindMobileRef.current,
      refs.ProzentMobileRef.current, refs.LandoberflaecheMobileRef.current
    ], { opacity: 0 });

    media.add("(min-width: 960px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: refs.abwSection2Ref.current,
          scrub: true,
          pin: refs.abwSection2Ref.current,
          start: "top top",
          end: "+=300%"
        }
      })
        .fromTo(refs.liane2Ref.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 })
        .to(refs.number100prozentRef.current, { yPercent: 0, opacity: 1, duration: 4 }, 1.5)
        .to(refs.watchRef.current, { opacity: 1, duration: 1 }, 4)
        .add(
          gsap.timeline({
            defaults: { duration: 4, scale: 1, ease: customEase },
            scrollTrigger: {
              trigger: refs.abwSection2Ref.current,
              start: "top 50%",
              end: "+=140%"
            }
          }).to([
            refs.watchleaf2Ref.current, refs.watchleaf3Ref.current,
            refs.watchleaf4Ref.current, refs.watchleaf5Ref.current,
            refs.watchleaf6Ref.current, refs.watchleaf7Ref.current,
            refs.watchleaf8Ref.current
          ], { scale: 1 }),
          "3"
        )
        .fromTo(refs.watchpointerRef.current,
          { opacity: 0, rotation: -90, transformOrigin: "right bottom" },
          { opacity: 1, rotation: 0, duration: 2 },
          8
        )
        .fromTo(refs.liane3Ref.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 }, 10)
        .to(refs.nochsindRef.current, { opacity: 1, duration: 2 }, 10)
        .fromTo(refs.numberlargeRef.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 5 }, 13.86)
        .to(refs.numberlargeRef.current, { fill: "#13735F", stroke: "#13735F", duration: 2 }, 15)
        .to([refs.ProzentRef.current, refs.LandoberflaecheRef.current], { opacity: 1 }, 16)
        .to(refs.watchfaceRef.current, { fill: "transparent" }, 15)
        .to(".cls-100prozent-3", { opacity: 1, duration: 2 }, 16)
        .to(refs.abwForestPhotoRef.current, { yPercent: 0, duration: 6 }, 18)
        .to([
          refs.zeitRef.current, refs.number100prozentRef.current,
          refs.zugebenRef.current, ...refs.nochsindRef.current.querySelectorAll("*"),
          refs.ProzentRef.current, refs.LandoberflaecheRef.current,
          refs.watchpointerRef.current, refs.numberlargeRef.current,
          refs.watchRef.current, refs.watchleaf2Ref.current, refs.watchleaf3Ref.current,
          refs.watchleaf4Ref.current, refs.watchleaf5Ref.current, refs.watchleaf6Ref.current,
          refs.watchleaf7Ref.current, refs.watchleaf8Ref.current
        ], { fill: "#ffffff", duration: 4 }, 22)
        .to([refs.number100prozentRef.current, refs.numberlargeRef.current], { stroke: "#ffffff", duration: 4 }, 22)
        .to("body", { backgroundColor: "#fff", duration: 1 }, 24)
        .fromTo(refs.liane4Ref.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 }, 24);
    });

    media.add("(max-width: 959px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: refs.abwSection2Ref.current,
          scrub: true,
          pin: refs.abwSection2Ref.current,
          start: "top top",
          end: "+=300%"
        }
      })
        .fromTo(refs.liane2MobileRef.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 })
        .to(refs.number100prozentMobileRef.current, { yPercent: 0, opacity: 1, duration: 4 }, 1.5)
        .to(refs.watchMobileRef.current, { opacity: 1, duration: 1 }, 4)
        .add(
          gsap.timeline({
            defaults: { duration: 4, scale: 1, ease: customEase },
            scrollTrigger: {
              trigger: refs.abwSection2Ref.current,
              start: "top 50%",
              end: "+=140%"
            }
          }).to([
            refs.watchleaf2MobileRef.current, refs.watchleaf3MobileRef.current,
            refs.watchleaf4MobileRef.current, refs.watchleaf5MobileRef.current,
            refs.watchleaf6MobileRef.current, refs.watchleaf7MobileRef.current,
            refs.watchleaf8MobileRef.current
          ], { scale: 1 }),
          "3"
        )
        .fromTo(refs.watchpointerMobileRef.current,
          { opacity: 0, rotation: -90, transformOrigin: "right bottom" },
          { opacity: 1, rotation: 0, duration: 2 },
          8
        )
        .fromTo(refs.liane3MobileRef.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 }, 10)
        .to(refs.nochsindMobileRef.current, { opacity: 1, duration: 2 }, 10)
        .fromTo(refs.numberlargeMobileRef.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 5 }, 13.86)
        .to(refs.numberlargeMobileRef.current, { fill: "#13735F", stroke: "#13735F", duration: 2 }, 15)
        .to([refs.ProzentMobileRef.current, refs.LandoberflaecheMobileRef.current], { opacity: 1 }, 16)
        .to(refs.watchfaceMobileRef.current, { fill: "transparent" }, 15)
        .to(document.querySelectorAll(".cls-100prozent-mobile-3"), { opacity: 1, duration: 2 }, 16)
        .to(refs.abwForestPhotoRef.current, { yPercent: 0, duration: 6 }, 18)
        .to([
          refs.zeitMobileRef.current, refs.number100prozentMobileRef.current,
          refs.zugebenMobileRef.current, ...refs.nochsindMobileRef.current.querySelectorAll("*"),
          refs.ProzentMobileRef.current, refs.LandoberflaecheMobileRef.current,
          refs.watchpointerMobileRef.current, refs.numberlargeMobileRef.current,
          refs.watchMobileRef.current, refs.watchleaf2MobileRef.current,
          refs.watchleaf3MobileRef.current, refs.watchleaf4MobileRef.current,
          refs.watchleaf5MobileRef.current, refs.watchleaf6MobileRef.current,
          refs.watchleaf7MobileRef.current, refs.watchleaf8MobileRef.current
        ], { fill: "#ffffff", duration: 4 }, 22)
        .to([refs.number100prozentMobileRef.current, refs.numberlargeMobileRef.current], { stroke: "#ffffff", duration: 4 }, 22)
        .to("body", { backgroundColor: "#fff", duration: 1 }, 24)
        .fromTo(refs.liane4MobileRef.current, { drawSVG: 0 }, { drawSVG: "100%", duration: 4 }, 24);
    });

    return () => media.revert();
  }, [refs]);

  return null;
};

export default Section2Animation;
