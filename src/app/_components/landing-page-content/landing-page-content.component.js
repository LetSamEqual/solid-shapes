import styles from "./landing-page-content.module.css";

const LandingPageContent = () => {
  return (
    <div className={styles.component__container}>
      {/* <div className={styles.link__container}>
        <button
          className={`${styles.link_containers} ${styles.services__button__container}`}
        >
          <h3 className={styles.link_headings}>Services</h3>
        </button>
        <button
          className={`${styles.link_containers} ${styles.portfolio__button__container}`}
        >
          <h3 className={styles.link_headings}>Portfolio</h3>
        </button>
        <button
          className={`${styles.link_containers} ${styles.about__button__container}`}
        >
          <h3 className={styles.link_headings}>About</h3>
        </button>
      </div> */}
      <div className={styles.services__content__container}>
        <h2>Services</h2>
        <p>
          Whether it’s as complex as a website refresh or as simple as a adding
          a new page, Solid Shapes has the experience to get the job done.
        </p>
        <p>
          We offer a range of services that cover the full lifecycle of a
          digital campaign, including:
        </p>
        <ul>
          <li>frontend development</li>
          <li>backend systems</li>
          <li>hosting services</li>
          <li>copywriting</li>
          <li>SEO advice</li>
        </ul>
      </div>
      <div className={styles.circles__container}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default LandingPageContent;
