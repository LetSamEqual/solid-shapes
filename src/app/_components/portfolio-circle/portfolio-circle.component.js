import styles from "./portfolio-circle.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";
import { useRef, useState } from "react";
import Link from "next/link";

import Image from "next/image";

import ffLandingPage from "@assets/landing-page/ff-landing-page.png";
import outOfOffice from "@assets/landing-page/out-of-office.png";
import mortgageBudgetLogo from "@assets/landing-page/mortgage-budget.png";

const PortfolioCircle = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  gsap.registerPlugin(useGSAP);
  const ffImg = useRef();
  const secondFfImg = useRef();
  const oooImg = useRef();
  const mortgageBudgetImg = useRef();
  const salmonDot = useRef();
  const purpleDot = useRef();
  const blackDot = useRef();
  const tl = useRef();

  const motionPathDefault = {
    path: [
      { top: 200, left: 60 },
      { top: 110, left: 40 },
      { top: 0, left: 0 },
    ],
  };

  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin);
    tl.current = gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: false,
        defaults: { ease: "power2.out", duration: 0.8, delay: 5 },
      })
      .to(oooImg.current, {
        motionPath: motionPathDefault,
        rotate: "-=25",
      })
      .to(salmonDot.current, { scale: 1, delay: 0 }, "<")
      .to(purpleDot.current, { scale: 1.2, delay: 0 }, "<")
      .to(mortgageBudgetImg.current, {
        motionPath: motionPathDefault,
        rotate: "-=25",
      })
      .to(purpleDot.current, { scale: 1, delay: 0 }, "<")
      .to(blackDot.current, { scale: 1.2, delay: 0 }, "<")
      .to(secondFfImg.current, {
        motionPath: motionPathDefault,
        rotate: "-=25",
      })
      .to(blackDot.current, { scale: 1, delay: 0 }, "<")
      .to(salmonDot.current, { scale: 1.2, delay: 0 }, "<");
  });

  const handlePausePlay = () => {
    if (isPlaying) {
      tl.current.pause();
      setIsPlaying(false);
    } else {
      tl.current.resume();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`${styles.window__container} ${styles.flex__column__center}`}
    >
      <div className={`${styles.img__container}`}>
        <Link href="https://d2j3oro2v8rwif.cloudfront.net/" target="_blank">
          <Image
            src={ffLandingPage}
            alt="womans face with glitter in blue light looking up and away from camera"
            width={320}
            height={320}
            className={`${styles.portfolio__img} ${styles.ffImg}`}
            ref={ffImg}
          />
        </Link>
        <Link href="/projects/los-turista">
          <Image
            src={outOfOffice}
            alt="womans face with glitter in blue light looking up and away from camera"
            width={320}
            height={320}
            className={`${styles.portfolio__img} ${styles.oooImg}`}
            ref={oooImg}
          />
        </Link>
        <Link href="/projects/mortgage-budget">
          <Image
            src={mortgageBudgetLogo}
            alt="womans face with glitter in blue light looking up and away from camera"
            width={320}
            height={320}
            className={`${styles.portfolio__img} ${styles.mortgageBudgetImg}`}
            ref={mortgageBudgetImg}
          />
        </Link>
        <Image
          src={ffLandingPage}
          alt="womans face with glitter in blue light looking up and away from camera"
          width={320}
          height={320}
          className={`${styles.portfolio__img} ${styles.second__ffImg}`}
          ref={secondFfImg}
        />
      </div>
      <div
        className={`${styles.salmon__background} ${styles.small__circle} ${styles.salmon__circle}`}
        ref={salmonDot}
      ></div>
      <div
        className={`${styles.light__purple__background} ${styles.small__circle} ${styles.purple__circle}`}
        ref={purpleDot}
      ></div>
      <div
        className={`${styles.black__background} ${styles.small__circle} ${styles.black__circle}`}
        ref={blackDot}
      ></div>
      <button className={`${styles.pauseButton}`} onClick={handlePausePlay}>
        {isPlaying ? <h1>&#x23F8;</h1> : <h1>&#x23F5;</h1>}
      </button>
    </div>
  );
};

export default PortfolioCircle;
