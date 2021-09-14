// TRICK:  https://www.gatsbyjs.com/docs/debugging-html-builds/

import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useScroll, useScrollUpdate } from "../context/ScrollContext";

const isBrowser = typeof window !== "undefined";

export const scrollFunction = (isLoaded) => {
  const scrollSection = useScroll();
  const setScrollSection = useScrollUpdate();
  useEffect(() => {
    if (isBrowser) {
      const homeScroll = () =>
        scroller.scrollTo("homeSection", {
          duration: 1000,
          smooth: true,
          spy: true,
          delay: 100,
        });
      const aboutScroll = () =>
        scroller.scrollTo("aboutSection", {
          duration: 800,
          smooth: true,
          spy: true,
          delay: 100,
          offset: -70,
        });
      const projectScroll = () =>
        scroller.scrollTo("projectSection", {
          duration: 1000,
          smooth: true,
          spy: true,
          delay: 100,
          offset: -70,
        });
      const contactScroll = () =>
        scroller.scrollTo("contactSection", {
          duration: 1500,
          smooth: true,
          spy: true,
          delay: 100,
        });

      if (isLoaded) {
        switch (scrollSection) {
          case "homeSection":
            homeScroll();
            break;
          case "aboutSection":
            aboutScroll();
            break;
          case "projectSection":
            projectScroll();
            break;
          case "contactSection":
            contactScroll();
            break;
          default:
            break;
        }
        setScrollSection(false);
      }
    }
  }, [scrollSection, isLoaded]);
};
