"use client";

import styles from "./page.module.css";

import Carousel from "./_components/project-carousel/project-carousel.component";
import Navbar from "./_components/navbar/navbar.component";
import Proficiencies from "./_components/proficiencyGraphic/proficiencyGraphic.component";
import { useState, useRef } from "react";
import Timeline from "./_components/programming-timeline/programming-timeline";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [opacityLevel, setOpacityLevel] = useState(1);

  const sectionOneRef = useRef();
  const sectionTwoRef = useRef();

  const handleScroll = (e) => {
    const sectionOneHeight = sectionOneRef.current.clientHeight;
    const sectionTwoHeight = sectionTwoRef.current.clientHeight;

    const target = e.currentTarget;

    if (target.scrollTop < sectionOneHeight + 79) {
      setScrolled(false);
    }
    if (target.scrollTop > sectionOneHeight + 80) {
      setScrolled(true);
    }

    // if (target.scrollTop < sectionOneHeight + 449) {
    //   setOpacityLevel(1);
    // }

    // if (target.scrollTop > sectionOneHeight + 450) {
    //   const opacity =
    //     1 -
    //     ((target.scrollTop - sectionOneHeight - 450) / sectionTwoHeight) * 4;
    //   setOpacityLevel(opacity);
    // }
  };

  return (
    <div className={styles.pageContainer} onScroll={handleScroll}>
      <Navbar props={scrolled} />
      <main id="main" className={styles.sectionsContainer}>
        <section ref={sectionOneRef} className={`${styles.introContainer}`}>
          <h1 className={styles.title}>Solid Shapes</h1>
          <div className={styles.subheaderContainer}>
            <h3 className={styles.introText}>Your next</h3>
            <div className={styles.rolesCeiling}></div>
            <div className={styles.rolesFloor}></div>
            <div className={styles.introSpanContainer}>
              <h3
                className={`${styles.introSpanCommon} ${styles.firstIntroSpan}`}
              >
                web developer
              </h3>{" "}
              <h3
                className={`${styles.introSpanCommon} ${styles.secondIntroSpan}`}
              >
                UI specialist
              </h3>
              <h3
                className={`${styles.introSpanCommon} ${styles.thirdIntroSpan}`}
              >
                content writer
              </h3>
              <h3
                className={`${styles.introSpanCommon} ${styles.fourthIntroSpan}`}
              >
                web developer
              </h3>
            </div>
          </div>
        </section>
        <section className={styles.firstTransition}></section>
        <section
          ref={sectionTwoRef}
          className={`${styles.proficiencyContainer}`}
        >
          <div
            className={styles.proficiencyComponentContainer}
            // style={{ opacity: `${opacityLevel}` }}
          >
            <Proficiencies />
          </div>
        </section>
        <section className={`${styles.projectContainer}`}>
          <h2>Portfolio</h2>
          <div className={styles.carouselContainer}>
            <Carousel />
          </div>
        </section>
      </main>
    </div>
  );
}
