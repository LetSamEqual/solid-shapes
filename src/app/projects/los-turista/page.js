import styles from "./los-turista.module.css";
import Navbar from "@/app/_components/navbar/navbar.component";

const LosTurista = () => {
  return (
    <div className={styles.container}>
      <Navbar props={true} />
      <section className={styles.landingContainer}>
        <h1>
          Los <span className={styles.headingAccent}>Turista</span>
        </h1>
        <h2>Travel blog</h2>
        <h3>Tools: React, GitHub Actions, GitHub Pages, CMS</h3>
      </section>
      <section className={styles.shortSectionContainer}>
        <div className={styles.firstSectionTextContainer}>
          <h3>The short version</h3>
          <p>
            The goal for this project was to produce a customised travel blog
            that would allow the user to add and edit the site on the go and
            likely in a low tech environment. In addition, the site needed a
            specific look that would match the writing’s more journalistic
            style.
          </p>
          <p>
            For this I researched other travel blog for design ideas, and dug
            deep into content management systems to create a custom and low cost
            version. The final result relied on dynamic routing, CI/CD using
            GitHub actions and a basic CMS.
          </p>
        </div>
      </section>
      <section className={styles.longSectionContainer}>
        <h2>The long version</h2>
        <div className={styles.imageAndContentContainer}>
          <div className={styles.secondSectionTextContainer}>
            <p>
              A journalist wanted a site that would allow them to easily produce
              and host articles while on the go. They wanted to separate
              themselves from the avalanche of Medium articles with a customised
              site that had an edgy and high-calibre feel to the design.
              <br />
              <br />
              With this in mind, I realised that the first step was to find a
              look that the user would be happy with. I began researching other
              travel blogs that had a similar intention; that is, gonzo-type
              reporting rather than travel tips.
              <br />
              <br />
              After creating a mood board, I identified that the common elements
              between the sites that resonated with the user; that is, an
              abundance of large, HD images, an engaging and focused hero
              section, a dark theme and a sprinkling of responsive animations.
            </p>
          </div>
          <div
            className={`${styles.firstImageContainer} ${styles.demoImageContainers}`}
          ></div>
        </div>
      </section>
      <section className={styles.imageAndContentContainerReverse}>
        <div
          className={`${styles.secondImageContainer} ${styles.demoImageContainers}`}
        ></div>
        <div className={styles.secondSectionTextContainer}>
          <p>
            Now that I had a more concrete idea of the site’s appearance and
            functionality, the next step was to research methods for achieving
            the required functionality. The two key functions I needed, besides
            hosting, was a CMS and a CI/CD system. The CMS would allow the user
            to write blog posts on the go, and the CI/CD system would allow them
            to update the site with a push of a button.
            <br />
            <br />
            For the CMS, I researched the typical mechanics behind these
            systems. The technical elements behind this is the creation of a a
            templated page that looks for content to display, and a markdown
            file that looks for a page to be displayed on to. When the templated
            page loads, it looks for a markdown file in a specific folder with a
            file name equal to that page’s route then populates the page with
            that file’s contents.
            <br />
            <br />
            By adding a basic markdown parser to the templated page, along with
            some CSS styling, the inner HTML would be populated with the correct
            HTML elements, the content that fills them, and then styled to match
            the style sheet. From there I created an online folder that the user
            could simply drop files into to create and publish a new article.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            The next step was to create a CI/CD system to push any new markdown
            files live. For this I landed on GitHub Actions as an easy,
            hands-off system that would produce the desired effect. After deep
            diving into YAML files and the steps needed to create and trigger a
            GitHub workflow, I created a system that would convert the markdown
            files into JSON, build a new site whenever a new article was added
            to the folder, overwrite the live blog with the new site files and
            then trigger a refresh.
            <br />
            <br />
            After that, I directed the user to an app that would allow them to
            write, edit and then add files to the site from their iPad. This
            meant the user could write articles on the go and then, when they
            were next able to connect to the internet, push the articles live
            with the press of a button.
          </p>
        </div>
        <div
          className={`${styles.thirdImageContainer} ${styles.demoImageContainers}`}
        ></div>
      </section>
      <section className={styles.imageAndContentContainerReverse}>
        <div
          className={`${styles.fourthImageContainer} ${styles.demoImageContainers}`}
        ></div>
        <div className={styles.secondSectionTextContainer}>
          <p>
            With the site’s functionality sorted, the last step was to implement
            the designs that the user was happy with. The landing page would
            generate cards for each article that had been uploaded, with the
            hero image taken from an S3 bucket that the user could upload to.
            The templated pages also extracted images from the S3 bucket and
            then used them for the carousel or for the article’s background
            image, depending on the user’s selection.
            <br />
            <br />
            The final result was an intuitive system that allowed the user to
            add stunning visuals on a slick and streamlined blog, while still
            placing the articles front and centre. From there, the user just had
            to pack their bags and remember to write.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LosTurista;
