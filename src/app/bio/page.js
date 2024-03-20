import styles from "./bio.module.css";
import Navbar from "../_components/navbar/navbar.component";
import ContactButton from "../_components/contact-me-button/contact-me-buton.component";

const BioPage = () => {
  return (
    <div className={styles.container}>
      <Navbar props={true} />
      <div className={styles.sectionContainer}>
        <p className={styles.textContainer}>
          I’m Sam Henderson, the designer, developer and copywriter behind
          Solid Shapes.
        </p>
        <p className={styles.textContainer}>
          Five years ago I began my career as a writer and editor, working for
          household names like Apple, Microsoft and Salesforce. It was while
          working with these companies that I fell in love with web design.
          Having seen my copy on some of the best sites in the world (and,
          unfortunately, some of the worst) I realised that while great writing
          can convince people of great ideas, you also need to give people a
          reason to listen. A great website is that reason.
        </p>
      </div>
      <div className={styles.sectionContainer}>
        <p className={styles.textContainer}>
          With this in mind, I set out to learn the secrets to designing and
          building compelling websites.
        </p>
        <p className={styles.textContainer}>
          Today, I’ve created websites and copy for small businesses,
          multinationals and individuals with an idea. My unique blend of
          skills, from front-end development to back-end systems to copywriting,
          means I can combine three teams’ worth of knowledge into one solution
          – the one that works best for you.
        </p>
      </div>
      <div className={styles.sectionContainer}>
        <p className={styles.textContainer}>
          Whether you’re looking to build a full-scale website from scratch, or
          if you have an existing system that just needs that little bit extra,
          Solid Shapes can help you and your company get there. Contact me now
          to find out how.
        </p>
        <ContactButton />
      </div>
    </div>
  );
};

export default BioPage;
