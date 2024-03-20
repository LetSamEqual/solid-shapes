import styles from "./mortgage-budget.module.css";
import Navbar from "@/app/_components/navbar/navbar.component";

const MortgageBudget = () => {
  return (
    <div className={styles.container}>
      <Navbar props={true} />
      <section className={styles.landingContainer}>
        <h1>
          Mortgage <span className={styles.headingAccent}>Budget</span>
        </h1>
        <h2>Financial SSG</h2>
        <h3>
          Tools: Next.JS, AWS Hosting, GitHub Actions, Google Indexing, AdSense
        </h3>
      </section>
      <section className={styles.shortSectionContainer}>
        <div className={styles.firstSectionTextContainer}>
          <h3>The short version</h3>
          <p>
            A client contracted me to build a budgeting tool that would allow
            people to calculate the mortgage they could afford. This needed to
            juggle multiple inputs, display results in real time and save
            results between visits.
          </p>
          <p>
            I used Next.js to create an SSG that could be crawled easily,
            ensuring that the site was indexed and searchable, and allowed for
            AdSense integration.
          </p>
          <p>
            Due to the iterative nature of this project, I employed Github
            Actions to create an easy CI/CD system.
          </p>
          <p>
            Finally, I used my copywriting experience to populate the site with
            rich content that helped the site’s SEO, and offer users helpful
            advice about the housing market.
          </p>
        </div>
      </section>
      <section className={styles.longSectionContainer}>
        <h2>The long version</h2>
        <div className={styles.imageAndContentContainer}>
          <div className={styles.secondSectionTextContainer}>
            <p>
              The client came to me with a passion project of theirs, born from
              their own experiences of trying to buy a home. With the amount of
              financial information that a home buyer needs to keep track of,
              working out whether a home is viable based on price, interest
              rate, strata fees, etc can become an incredible source of tedium
              and stress in an already stressful process. The client wanted a
              system that would quickly work out these numbers, and store them
              between sessions so they had a single personalised calculator they
              could quickly refer to when needed.
              <br />
              <br />
              After several meetings with the client, I pinned down exactly what
              information was needed from a user and what information needed to
              be displayed. After that there were some design discussions to
              figure out what be the easiest layout for users to navigate, and
              what the client envisioned for the website. With that done, I got
              to work.
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
            I began by creating the basic skeleton of the calculator using
            Next.js. I chose Next.js because I knew the end goal was to gain
            revenue from AdSense, which meant the site had to be easy to index
            and crawl. This meant we would have a better chance at being
            approved for AdSense later compared to an SPAs, which crawlers have
            trouble navigating.
            <br />
            <br />
            The main function of the site was based on a series of input fields
            that would output results based on some rather complex calculations.
            On the technical side, these inputs would be saved to an object
            stored in state. I created a generic input handler that could be
            used across all inputs. This worked by using the input field’s name
            to target the appropriate key in the stored object, then spreading
            the object so only the corresponding key-value pair was updated.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            To ensure the values were readable, the displayed values in the
            input fields were automatically formatted to include separating
            commas and dollar signs. This worked by using an ‘on blur’ function
            that automatically used the ‘Intl.NumberFormat’ method built into
            JS. When the user clicked back onto a field, an ‘on focus’ function
            triggered that converted the amount back to numerals using regex so
            users would be able to edit the figures without having to delete
            these formatting additions.
            <br />
            <br />
            To ensure a strictness for the input fields, I added an ‘on key
            down’ function that would check what character the user was trying
            to input into the field. If the user types a character other than a
            number or a decimal point, a warning appears under the field
            indicating the rule for the input system to the user and disallow
            this and any further incorrect inputs.
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
            The second essential aspect of projects was to ensure the site could
            be used to quickly calculate the feasibility of a home’s price while
            the user was out at house inspections. This meant that the site
            needed a mobile-first design that could show all results at a glance
            in an easy to read and organised system, while also allowing users
            to adjust their figures on the fly. This created a spacing issue,
            due to the amount of inputs on the page, and the comprehensive
            nature of the results given. Basically, we needed a way for users to
            switch views quickly and intuitively.
            <br />
            <br />
            After toying around with some design concepts, I settled on adding
            results to sliding window, which could be hidden while the user was
            inputting data, and then revealed when the user wanted to check the
            outcome. After some styling and an ample dose of media queries, I
            created a nice looking window that, with some animation, slide over
            the input section when needed and then disappeared at the bottom of
            the page when it wasn’t.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            The last core component of this site was the ability to store
            results between sessions, and referred back to on the fly. While
            this could be done by creating an account for each user and then
            storing them server side, our belief was that forcing users to
            create an account to access the core value of the system would
            prevent people from adopting it, either due to their own security
            concerns or simply because it added an unnecessary layer of friction
            for users.
            <br />
            <br />
            To provide the client with the system they envisioned while avoiding
            a login system, I leveraged Windows Local Storage to store the data
            on the user’s device. This would be updated continuously as users go
            through each field, meaning they wouldn’t lose any information they
            added if they forgot to click a ‘save’ button.
            <br />
            <br />
            To navigate any privacy concerns that users might have about this
            feature, I created a toggle that, if turned off, would delete all
            stored data except for the users preference to use the site without
            this feature, to avoid users having to turn it off each time they
            visited the site. I also added disclaimers that made it clear that
            this data was only being saved to the user’s device and their device
            only, and that they could opt out of this feature if they wanted.
          </p>
        </div>
        <div
          className={`${styles.fifthImageContainer} ${styles.demoImageContainers}`}
        ></div>
      </section>
      <section className={styles.imageAndContentContainerReverse}>
        <div
          className={`${styles.sixthImageContainer} ${styles.demoImageContainers}`}
        ></div>
        <div className={styles.secondSectionTextContainer}>
          <p>
            Finally, after some reviews and adjustments based on the client’s
            feedback, we had a site that was ready to see the light of day. I
            decided to use AWS for hosting due to the cost effectiveness and my
            relative familiarity with the system. I set up an S3 bucket to store
            the files, then used Route 53 to connect the bucket to the external
            domain that the client had previously purchased. Then I requested an
            SSL certificate from AWS to ensure the page had HTTPS, and connected
            this to the site using Cloudfront.
            <br />
            <br />I knew the client planned to add more information to the
            site’s resources section. This meant that there would be additional
            updates to the site that would quickly become tedious to perform
            manually. To avoid the tedium, I created a CI/CD system using GitHub
            Actions and Amazon CLI.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            Now that the site was live, the next step was to secure indexing and
            AdSense approval. To ensure success during the phase, I added to and
            tightened up the metadata and the copy to ensure key search terms
            were included across the site. With these updates the indexing
            process was complete relatively quickly.
            <br />
            <br />
            However the approval for AdSense had far more extensive requirements
            and very little specific information about why a website was
            rejected. This sent me to numerous forums for tips on site approval.
            The advice was generally to stick to semantic HTML tags, and include
            more relevant content that would keep users on the site for as long
            as possible. For this I used my own copywriting experience to add
            ‘rich content’ to the site, and to provide more value by offering
            helpful articles about the housing market. After a few weeks of
            updates and resubmitting reviews to Google, we were ready to serve
            ads.
          </p>
        </div>
        <div
          className={`${styles.seventhImageContainer} ${styles.demoImageContainers}`}
        ></div>
      </section>
      <section className={styles.imageAndContentContainerReverse}>
        <div
          className={`${styles.seventhImageContainer} ${styles.demoImageContainers}`}
        ></div>
        <div className={styles.secondSectionTextContainer}>
          <p>
            The final step was to place the types of ads where we wanted them.
            The main hurdle to this was that the boiler plate code that AdSense
            provides is intended for vanilla JS. This meant that the code had to
            be adapted to work for Next.js.
            <br />
            <br />
            The technical steps for achieving this was to split the provided
            code into two sections, the first being the display div and the
            second being the fetch script.
            <br />
            <br />
            By adding the script to the ‘_document’ file, I could ensure the
            content would be fetched no matter which page the user landed on.
            From there I created a reusable ad component that would include the
            display div. This component also included a useEffect that would
            first check whether the container already had content in it, and so
            avoid any potential issues with rerenders unnecessarily repopulating
            the ad container.
            <br />
            <br />I then placed these ad components at designated spots
            throughout the site, and pushed the updates to live. After
            confirming that the client was recieving payments from AdSense, the
            project was completed and, in the client’s words, “was above and
            beyond what they’d hoped for”.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MortgageBudget;
