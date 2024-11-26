import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./portfolio-window.module.css";
import futureFashion from "@assets/project-pics/future-fashion/future-fashion-card.jpg";
import mortgageBudget from "@assets/project-pics/mortgage-budget-demo-pics/mortgage-budget-card-pic.jpg";
import crownClothing from "@assets/project-pics/crwn-clothing-demo-pics/crwn-clothing-card-pic.png";
import outOfOffice from "@assets/project-pics/travel-blog-demo-pics/travel-blog-card-pic.png";

const PortfolioWindow = () => {
  const defaultDimension = 49;
  const largeDimension = 56;
  const smallDimension = 41;

  const [boxSizes, setBoxSizes] = useState({
    box1: {
      width: defaultDimension,
      height: defaultDimension,
    },
    box2: {
      width: defaultDimension,
      height: defaultDimension,
    },
    box3: {
      width: defaultDimension,
      height: defaultDimension,
    },
    box4: {
      width: defaultDimension,
      height: defaultDimension,
    },
  });

  const onContainerLeave = () => {
    setBoxSizes({
      box1: {
        width: defaultDimension,
        height: defaultDimension,
      },
      box2: {
        width: defaultDimension,
        height: defaultDimension,
      },
      box3: {
        width: defaultDimension,
        height: defaultDimension,
      },
      box4: {
        width: defaultDimension,
        height: defaultDimension,
      },
    });
  };

  const onBox1Hover = () => {
    setBoxSizes({
      box1: {
        width: largeDimension,
        height: largeDimension,
      },
      box2: {
        width: smallDimension,
        height: largeDimension,
      },
      box3: {
        width: largeDimension,
        height: smallDimension,
      },
      box4: {
        width: smallDimension,
        height: smallDimension,
      },
    });
  };

  const onBox2Hover = () => {
    setBoxSizes({
      box1: {
        width: smallDimension,
        height: largeDimension,
      },
      box2: {
        width: largeDimension,
        height: largeDimension,
      },
      box3: {
        width: smallDimension,
        height: smallDimension,
      },
      box4: {
        width: largeDimension,
        height: smallDimension,
      },
    });
  };

  const onBox3Hover = () => {
    setBoxSizes({
      box1: {
        width: largeDimension,
        height: smallDimension,
      },
      box2: {
        width: smallDimension,
        height: smallDimension,
      },
      box3: {
        width: largeDimension,
        height: largeDimension,
      },
      box4: {
        width: smallDimension,
        height: largeDimension,
      },
    });
  };

  const onBox4Hover = () => {
    setBoxSizes({
      box1: {
        width: smallDimension,
        height: smallDimension,
      },
      box2: {
        width: largeDimension,
        height: smallDimension,
      },
      box3: {
        width: smallDimension,
        height: largeDimension,
      },
      box4: {
        width: largeDimension,
        height: largeDimension,
      },
    });
  };

  return (
    <div className={`${styles.container}`} onMouseLeave={onContainerLeave}>
      <button
        className={`${styles.button}`}
        style={{
          width: `${boxSizes.box1.width}%`,
          height: `${boxSizes.box1.height}%`,
          borderRadius: "10px 0px 0px 0px",
        }}
        onMouseOver={onBox1Hover}
      >
        <h3
          className={`${styles.project__heading}`}
          style={{ top: 10, left: 10, borderRadius: "10px 0px 10px 0px" }}
        >
          Future Fashion
        </h3>
        <Image
          src={futureFashion}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "10px 0px 0px 0px",
          }}
          alt="test"
        />
      </button>

      <Link
        href="/projects/mortgage-budget"
        className={`${styles.button}`}
        style={{
          width: `${boxSizes.box2.width}%`,
          height: `${boxSizes.box2.height}%`,
          borderRadius: "0px 10px 0px 0px",
        }}
        onMouseOver={onBox2Hover}
      >
        <h3
          className={`${styles.project__heading}`}
          style={{ top: 10, right: 10, borderRadius: "0px 10px 0px 10px" }}
        >
          Mortgage Budget
        </h3>
        <Image
          src={mortgageBudget}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "0px 10px 0px 0px",
          }}
          alt="test"
        />
      </Link>

      <Link
        href="/projects/crwn-clothing"
        className={`${styles.button}`}
        style={{
          width: `${boxSizes.box3.width}%`,
          height: `${boxSizes.box3.height}%`,
          borderRadius: "0px 0px 0px 10px",
        }}
        onMouseOver={onBox3Hover}
      >
        <h3
          className={`${styles.project__heading}`}
          style={{ bottom: 10, left: 10, borderRadius: "0px 10px 0px 10px" }}
        >
          Crown Clothing
        </h3>
        <Image
          src={crownClothing}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "0px 0px 0px 10px",
          }}
          alt="test"
        />
      </Link>
      <Link
        href="/projects/los-turista"
        className={`${styles.button}`}
        style={{
          width: `${boxSizes.box4.width}%`,
          height: `${boxSizes.box4.height}%`,
          borderRadius: "0px 0px 10px 0px",
        }}
        onMouseOver={onBox4Hover}
      >
        <h3
          className={`${styles.project__heading}`}
          style={{
            bottom: 10,
            right: 10,
            borderRadius: "10px 0px 10px 0px",
          }}
        >
          Out of Office
        </h3>
        <Image
          src={outOfOffice}
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "0px 0px 10px 0px",
          }}
          alt="test"
        />
      </Link>
    </div>
  );
};

export default PortfolioWindow;
