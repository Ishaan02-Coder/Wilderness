import React from "react";
import { useOtherRefs } from "./CommonRefs";
import Section3Animation from "./Section3Animation";

const Section3 = ({refs}) => {

  return (
    <>

      <Section3Animation refs={refs} />
  <section id="abw_section_3" ref={refs.abwSection3Ref}>
                    <div className="center mt164 mt_mobile_48 mb96 mb_mobile_32">
                        <h2 className="h1 green">
                            <span id="abw_section_3_h2_firstline" ref={refs.abwSection3H2FirstlineRef}>Lebendiger Baum.</span>
                            <strong id="abw_section_3_h2_secondline" ref={refs.abwSection3H2SecondlineRef}>Lebendiger Raum.</strong>
                        </h2>
                    </div>
                    <picture id="abw_paranussbaum" ref={refs.abwParanussbaumRef}>
                        <source media="(max-width: 959px)" srcset="https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/images/paranussbaum_mobile.svg" sizes="(min-width: 0px) 100vw"/>
                        <source media="(min-width: 960px)" srcset="
                https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/images/paranussbaum-800.png   800w,
                https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/images/paranussbaum-1140.png 1140w,
                https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/images/paranussbaum-2084.png 2084w,
                https://d2ijqnyf2ixq2j.cloudfront.net/cms/static-pages/assets/images/paranussbaum-2880.png 2880w
              " sizes="(min-width: 960px) 95vw"/>
                        <img className="img-fluid" ref={refs.abwParanussbaumImageRef} width="2851" height="4384" src="" alt="Paranussbaum in Peru von Wilderness International" loading="eager"/>
                    </picture>
                    <svg id="lianebaum" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.233 2208" preserveAspectRatio="xMidYMid meet">
                        <g id="liane">
                            <path vectorEffect="non-scaling-stroke" id="liane5" ref={refs.liane5Ref} d="M134.616 2208c0-21.976-8.191-74.163-23.24-101.68-9.814-17.946-73.95-69.838-75.959-113.011-1.417-30.466-41.802-60.224-26.215-86.439 4.826-8.116 50.238-48.833 63.2-84.018 12.964-35.185 47.328-106.571 14.816-148.148-8.91-11.394-37.037-142.593-37.037-150s-1.852-24.074 50.926-57.408 69.444-70.37 78.703-81.481 14.815-70.37 11.111-79.63-12.321-26.722-56.305-50.974c-26.918-14.843 28.113-46.174 34.708-55.568 3.727-5.308 3.568-12.447-.45-17.539-5.763-7.306-23.943-44.827-62.429-48.785-38.166-3.924-82.59-21.578-93.7-29.319s-9.211-45.927-10.713-70.037C.417 1008.021 59.44 859.89 53.884 850.63c-5.555-9.26-9.259-27.778-9.259-48.148s9.26-24.074 24.074-35.186 53.704-120.37 46.296-151.851-6.601-145.437 7.408-205.556c5.198-22.309 48.148-51.852 55.555-59.26s31.293-20.13 38.7-23.834 53.428-65.956 50.435-138.395c-1.582-38.282-94.69-26.66-137.283-56.289-32.61-22.685-16.982-52.803-14.896-69.314.906-7.17 19.702-42.876 19.702-50.103V0" 
                            style={{
                  fill: "none",
                  stroke: "#13735f",
                  strokeMiterlimit: 10,
                  strokeWidth: "4px",
                                }}/>
                        </g>
                    </svg>
                </section>
    </>
  );
};

export default Section3;
