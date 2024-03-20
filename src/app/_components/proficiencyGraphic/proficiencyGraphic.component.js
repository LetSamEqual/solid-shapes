import styles from "./proficiencyGraphic.module.css";
import Image from "next/image";

import reactLogo from "../../../../public/assets/proficiency-pics/react-icon.png";
import nextJSLogo from "../../../../public/assets/proficiency-pics/nextjs-icon.png";
import jsLogo from "../../../../public/assets/proficiency-pics/js-icon.png";
import cssLogo from "../../../../public/assets/proficiency-pics/css-icon.png";
import htmlLogo from "../../../../public/assets/proficiency-pics/html-icon.png";
import awsLogo from "../../../../public/assets/proficiency-pics/aws-icon.png";
import githubLogo from "../../../../public/assets/proficiency-pics/github-icon.png";
import figmaLogo from "../../../../public/assets/proficiency-pics/figma-icon.png";
import writingLogo from "../../../../public/assets/proficiency-pics/writing-icon.png";
import shopifyIcon from "../../../../public/assets/proficiency-pics/shopify-icon.png";

const Proficiencies = () => {
  const graphics = [
    {
      heading: "React",
      logo: reactLogo,
      alt: "React logo",
      key: 1,
    },
    {
      heading: "Next.js",
      logo: nextJSLogo,
      alt: "Next.js logo",
      key: 2,
    },
    {
      heading: "Javascript",
      logo: jsLogo,
      alt: "Javascript logo",
      key: 3,
    },
    {
      heading: "CSS",
      logo: cssLogo,
      alt: "CSS logo",
      key: 4,
    },
    {
      heading: "HTML",
      logo: htmlLogo,
      alt: "HTML logo",
      key: 5,
    },
    {
      heading: "Shopify",
      logo: shopifyIcon,
      alt: "Shopify logo",
      key: 6,
    },
    {
      heading: "Hosting",
      logo: awsLogo,
      alt: "AWS logo",
      key: 7,
    },
    {
      heading: "GitHub",
      logo: githubLogo,
      alt: "GitHub logo",
      key: 8,
    },
    {
      heading: "Figma",
      logo: figmaLogo,
      alt: "Figma logo",
      key: 9,
    },
    {
      heading: "Content writing",
      logo: writingLogo,
      alt: "Writing icon",
      key: 10,
    },
  ];

  return (
    <div className={styles.componentContainer}>
      <div>
        <h2>Sam’s skill set</h2>
      </div>
      <div className={styles.logosContainer}>
        {graphics.map((item) => {
          return (
            <div key={item.key} className={styles.graphicContainer}>
              <Image src={item.logo} width={64} height={64} alt={item.alt} />
              <h3 className={styles.graphicHeading}>{item.heading}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proficiencies;
