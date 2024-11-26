"use client";

import styles from "./page.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";
import { CustomEase } from "gsap/all";
import KUTE, { borderRadius, translate } from "kute.js";
import Navbar from "@components/navbar/navbar.component.js";
import PortfolioCircle from "@components/portfolio-circle/portfolio-circle.component";
import SmoothScrolling from "@components/smooth-scrolling/smooth-scrolling";
import Image from "next/image";
import ContactForm from "@components/contact-form/contact-form";
import PortfolioWindow from "@components/portfolio-window/portfolio-window.component";
import designDev from "@assets/landing-page/web-design-dev.png";
import seoAdsense from "@assets/landing-page/seo-adsense.png";
import appleIcon from "@assets/landing-page/apple_icon.png";
import salesforceIcon from "@assets/landing-page/salesforce_icon.png";
import microsoftIcon from "@assets/landing-page/microsoft_icon.png";
import proficienciesIcons from "@assets/landing-page/proficiencies.png";

const Home = () => {
  gsap.registerPlugin(useGSAP);
  const gsapContainer = useRef();
  const section1Container = useRef();
  const blob = useRef();
  const blobContainer = useRef();
  const intro = useRef();
  const introContainer = useRef();
  const circles = useRef();
  const yellowCircle = useRef();
  const purpleCircle = useRef();
  const salmonCircle = useRef();
  const s1Header = useRef();

  useEffect(() => {
    const blobTween = KUTE.fromTo(
      "#landing__blob__1",
      { path: "#landing__blob__1" },
      { path: "#landing__blob__2" },
      { repeat: 999, duration: 7000, yoyo: true }
    );
    blobTween.start();
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, CustomEase);
      gsap.registerPlugin(MotionPathPlugin);
      CustomEase.create(
        "pauseEnd",
        "M0,0 C0,0 0.14,0.064 0.169,0.103 0.196,0.14 0.237,0.228 0.251,0.268 0.267,0.317 0.296,0.442 0.309,0.484 0.323,0.532 0.346,1 0.489,1 0.64,1 0.697,1 0.723,1 0.779,1 1,1 1,1 "
      ),
        gsap.defaults({
          ease: "pauseEnd",
        });

      const blobTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      });
      blobTl.to(blob.current, {
        scale: 1.1,
        rotate: "+=30",
        duration: 20,
      });

      const windowX = window.innerWidth;
      const windowY = window.innerHeight;
      const scaleAmount = () => {
        if (windowX > windowY) {
          return windowX / 250;
        }
        return windowY / 250;
      };

      const tl = gsap
        .timeline()
        .to(blobContainer.current, {
          scale: 5,
          duration: 3,
          ease: "none",
        })
        .to(section1Container.current, {
          backgroundColor: "#1c1018",
          duration: 0.1,
        })
        .to(blobContainer.current, {
          display: "none",
          duration: 0.1,
        })
        .to(intro.current, {
          opacity: 0,
          ease: "none",
          duration: 2,
        })
        .to(
          circles.current,
          {
            motionPath: [
              { x: "-45vw", y: "10vh" },
              { x: "-40vw", y: "20vh" },
            ],
            duration: 5,
          },
          "<2.5"
        )
        .to(
          yellowCircle.current,
          {
            width: "30px",
            height: "30px",
            duration: 5,
          },
          "<"
        )
        .to(
          salmonCircle.current,
          {
            opacity: 1,
            motionPath: [{ x: "7vw", y: 0 }],
            ease: "expoScale(0.5,7,none)",
            duration: 2,
          },
          ">"
        )
        .to(
          purpleCircle.current,
          {
            motionPath: [{ x: "7vw", y: 0 }],
            ease: "expoScale(0.5,7,none)",
            duration: 2,
          },
          "<"
        )
        .to(
          purpleCircle.current,
          {
            opacity: 1,
            motionPath: [{ x: "14vw", y: 0 }],
            ease: "expoScale(0.5,7,none)",
            duration: 2,
          },
          ">"
        )
        .from(s1Header.current, {
          opacity: 0,
          motionPath: [{ x: "-30vw", y: 0 }],
          ease: "expoScale(0.5,7,none)",
          // ease: CustomEase.create(
          //   "custom",
          //   "M0,0 C0,0 0.386,0.02 0.431,0.035 0.47,0.048 0.553,0.051 0.59,0.069 0.626,0.087 0.704,0.124 0.739,0.148 0.772,0.172 0.813,0.233 0.836,0.269 0.859,0.306 0.864,0.359 0.884,0.402 0.903,0.443 0.916,0.546 0.93,0.592 0.944,0.641 0.952,0.73 0.965,0.783 0.978,0.839 1,1 1,1 "
          // ),
          duration: 5,
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: gsapContainer.current,
        start: "top top",
        end: `bottom top`,
        scrub: true,
        pin: true,
      });
    },
    { scope: gsapContainer }
  );

  return (
    <div className={styles.home__container}>
      <Navbar props={false} />
      <SmoothScrolling>
        <div ref={gsapContainer} className={styles.gsap__container}>
          <div
            ref={section1Container}
            className={styles.first__section_container}
          >
            <div ref={blobContainer} className={styles.blob__container}>
              <div ref={blob} className={styles.blobs__container}>
                <svg
                  id="visual"
                  viewBox="0 0 900 600"
                  width="900"
                  height="600"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                >
                  <g transform="translate(456.01906506741494 307.5479612940319)">
                    <path
                      id="landing__blob__1"
                      d="M157.9 -141.2C201.2 -114.6 230.6 -57.3 219.7 -11C208.7 35.4 157.4 70.7 114 97.9C70.7 125 35.4 144 -12.6 156.6C-60.6 169.2 -121.2 175.5 -163 148.3C-204.8 121.2 -227.9 60.6 -233 -5.1C-238 -70.7 -225.1 -141.4 -183.3 -168.1C-141.4 -194.8 -70.7 -177.4 -6.7 -170.7C57.3 -163.9 114.6 -167.9 157.9 -141.2"
                      fill="#1c1018"
                    ></path>
                  </g>
                  <g
                    transform="translate(400.23142493380146 300.5479979061105)"
                    style={{ visibility: "hidden" }}
                  >
                    <path
                      id="landing__blob__2"
                      d="M170.7 -170C220.7 -120.7 260.3 -60.3 264.7 4.4C269.1 69.1 238.1 138.1 188.1 185.3C138.1 232.5 69.1 257.7 3.2 254.5C-62.7 251.4 -125.4 219.7 -150.4 172.6C-175.4 125.4 -162.7 62.7 -159.6 3.1C-156.6 -56.6 -163.1 -113.1 -138.1 -162.5C-113.1 -211.8 -56.6 -253.9 1.9 -255.8C60.3 -257.7 120.7 -219.3 170.7 -170"
                      fill="#1c1018"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div ref={introContainer} className={styles.intro_container}>
              <h1 ref={intro} className={styles.title}>
                Solid Shapes
              </h1>
              <div ref={circles} className={styles.circle__container}>
                <div
                  ref={yellowCircle}
                  className={`${styles.circle} ${styles.yellow__circle}`}
                ></div>
                <div
                  ref={salmonCircle}
                  className={`${styles.circle} ${styles.salmon__circle}`}
                ></div>
                <div
                  ref={purpleCircle}
                  className={`${styles.circle} ${styles.purple__circle}`}
                ></div>
                <h2 ref={s1Header} className={`${styles.s1__header}`}>
                  Create experiences, <br></br>not just websites
                </h2>
              </div>
            </div>
          </div>
        </div>
      </SmoothScrolling>

      <div className={`${styles.s1__container} ${styles.flex__column__center}`}>
        <div
          className={`${styles.two__column__container} ${styles.web__design__development__container}`}
        >
          <div className={`${styles.flex__column__center}`}>
            <p className={`${styles.h2__text__chunk}`}>
              Web{" "}
              <span className={`${styles.salmon__font}`}>
                <strong>design</strong>
              </span>{" "}
              and{" "}
              <span className={`${styles.salmon__font}`}>
                <strong>development</strong>
              </span>
            </p>
            <p className={`${styles.p__text__chunk}`}>
              Refresh, expand or create your online presence with modern designs
              and clean, maintainable code.{" "}
            </p>
          </div>
          <Image
            src={designDev}
            alt="holiday booking site showing a house in Lake Macquarie and the page’s associated code"
            width={406}
            height={480}
            className={`${styles.designDev__img}`}
          />
        </div>
        <div
          className={`${styles.two__column__container} ${styles.copy__writing__container}`}
        >
          <Image
            src={seoAdsense}
            alt="Graph of Google adsense earnings estimates for a website showing an upward trend."
            width={410}
            height={345}
            className={`${styles.seoAdsense__img}`}
          />
          <div className={`${styles.flex__column__center}`}>
            <p className={`${styles.h2__text__chunk}`}>
              <span className={`${styles.light__purple__font}`}>
                <strong>Copy writing</strong>
              </span>{" "}
              and{" "}
              <span className={`${styles.light__purple__font}`}>
                <strong>SEO</strong>
              </span>
            </p>
            <p className={`${styles.p__text__chunk}`}>
              Stand out from the crowd by creating a brand customers connect
              with.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.s2__container} ${styles.flex__column__center} ${styles.yellow__background}`}
      >
        <div
          className={`${styles.s2__top__rotated__div} ${styles.yellow__background}`}
        ></div>
        <div
          className={`${styles.s2__content__container} ${styles.flex__column__center}`}
        >
          <h2 className={`${styles.header}`}>
            With knowledge gathered from working with the best
          </h2>
          <div
            className={`${styles.two__column__container} ${styles.flex__row__center}`}
          >
            <div className={`${styles.flex__column__center}`}>
              <p className={`${styles.h2__text__chunk}`}>
                Trusted by industry titans
              </p>
              <p className={`${styles.p__text__chunk}`}>
                Work with a writer behind some of the biggest brands in the
                world.
              </p>
            </div>
            <div
              className={`${styles.s2__logo__container} ${styles.flex__row__center}`}
            >
              <Image src={appleIcon} alt="Apple logo" width={48} height={48} />
              <Image
                src={salesforceIcon}
                alt="Salesforce logo"
                width={48}
                height={48}
              />
              <Image
                src={microsoftIcon}
                alt="Microsoft logo"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div
            className={`${styles.two__column__container} ${styles.flex__row__center}`}
          >
            <PortfolioCircle />
            <div className={`${styles.flex__column__center}`}>
              <p className={`${styles.h2__text__chunk}`}>
                Skills built from success
              </p>
              <p className={`${styles.p__text__chunk}`}>
                A developer with years of experience building websites that
                excite.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.s2__bottom__rotated__div} ${styles.yellow__background}`}
        ></div>
      </div>
      <div
        className={`${styles.s3__content__container} ${styles.flex__column__center}`}
      >
        <h2 className={`${styles.header}`}>
          Designed based <br></br> on your needs
        </h2>
        <div
          className={`${styles.two__column__container} ${styles.flex__row__center}`}
        >
          <div
            className={`${styles.flex__column__center} ${styles.h2__text__chunk}`}
          >
            <p className={`${styles.yellow__font}`}>Your product</p>
            <p className={`${styles.salmon__font}`}>Your codebase</p>
            <p className={`${styles.light__purple__font}`}>Your way</p>
            <p className={`${styles.p__text__chunk}`}>
              With expertise in Next.js, Vue, Typescript, JQuery, Node,
              Tailwind, SCSS and more, you’ll always get the solution that works
              for you.
            </p>
          </div>
          <div
            className={`${styles.s3__image__container} ${styles.flex__column__center}`}
          >
            <Image
              src={proficienciesIcons}
              alt="icons"
              width={300}
              height={407}
            />
            <div
              className={`${styles.yellow__background} ${styles.small__circle} ${styles.s3__yellow__circle__position}`}
            ></div>
            <div
              className={`${styles.salmon__background} ${styles.small__circle} ${styles.s3__salmon__circle__position}`}
            ></div>
            <div
              className={`${styles.light__purple__background} ${styles.small__circle} ${styles.s3__light__purple__circle__position}`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.yellow__background} ${styles.flex__column__center}`}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ContactForm />
      </div>
      <div
        className={`${styles.flex__column__center}`}
        style={{ height: "100vh", width: "100vw", gap: "30px" }}
      >
        <h2>Check out some of our latest work</h2>
        <PortfolioWindow />
      </div>
    </div>
  );
};

export default Home;
