import styles from "./programming-timeline.module.css";

const Timeline = ({ scrollValue }) => {
  return (
    <section className={styles.container}>
      <div className={styles.leftTextContainer}>
        <h3 className={styles.heading}>November 2021</h3>
        <p className={styles.paragraph}>
          Stuck in lockdown, I decided to start learning the basics of web
          development after work.
        </p>
      </div>

      <div className={styles.rightTextContainer}>
        <h3 className={styles.heading}>January 2022</h3>
        <p className={styles.paragraph}>
          Pretty soon I realised I enjoyed coding and could turn this into a
          career. I found an online React course and enrolled.
        </p>
      </div>

      <div className={styles.leftTextContainer}>
        <h3 className={styles.heading}>March 2022</h3>
        <p className={styles.paragraph}>
          After a few months I’m building standalone components comfortably,
          from fetch requests to calendars to contact forms.
        </p>
      </div>

      <div className={styles.rightTextContainer}>
        <h3 className={styles.heading}>September 2022</h3>
        <p className={styles.paragraph}>
          I build my first full SPA – an ecommerce site called Crwn Clothing.
          Later, I add a working backend, including a login system and inventory
          management using Firebase and React Context.
        </p>
      </div>

      <div className={styles.leftTextContainer}>
        <h3 className={styles.heading}>April 2023</h3>
        <p className={styles.paragraph}>
          After nearly two years of working two jobs, I take two months to
          travel the world before properly making the switch from writer and
          editor to full-time web developer.
        </p>
      </div>

      <div className={styles.rightTextContainer}>
        <h3 className={styles.heading}>June 2023</h3>
        <p className={styles.paragraph}>
          I use the skills I’ve learnt from the last two years to launch my own
          travel blog in preparation of the journey.
        </p>
      </div>

      <div className={styles.leftTextContainer}>
        <h3 className={styles.heading}>October 2023</h3>
        <p className={styles.paragraph}>
          I return to Australia, move to Melbourne with my partner, and start
          doing freelance web development
        </p>
      </div>

      <div className={styles.rightTextContainer}>
        <h3 className={styles.heading}>November 2023</h3>
        <p className={styles.paragraph}>
          I’m hired to build a budgeting website for first home buyers: Mortgage
          Budget.
        </p>
      </div>

      <div className={styles.leftTextContainer}>
        <h3 className={styles.heading}>January 2023</h3>
        <p className={styles.paragraph}>
          The first iteration of Mortgage Budget goes live.
        </p>
      </div>

      <div className={styles.rightTextContainer}>
        <h3 className={styles.heading}>February 2023</h3>
        <p className={styles.paragraph}>
          After some further development, the site is ready to be indexed and
          integrated with AdSense.
        </p>
      </div>

      <div className={styles.centreLine}></div>
    </section>
  );
};

export default Timeline;
