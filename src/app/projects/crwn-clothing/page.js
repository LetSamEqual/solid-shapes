import styles from "./crwn-clothing.module.css";
import Navbar from "@/app/_components/navbar/navbar.component";

const CrwnClothing = () => {
  return (
    <div className={styles.container}>
      <Navbar props={true} />
      <section className={styles.landingContainer}>
        <h1>
          Crown <span className={styles.headingAccent}>Clothing</span>
        </h1>
        <h2>Ecommerce SPA</h2>
        <h3>Tools: React Routes, React Context, Firebase, Firestore</h3>
      </section>
      <section className={styles.shortSectionContainer}>
        <div className={styles.firstSectionTextContainer}>
          <h3>The short version</h3>
          <p>
            I’d been tasked with building an ecommerce site from the ground up
            for a small fashion outlet ‘Crown Clothing’. The site needed to be
            dynamic enough that the client could add and remove products quickly
            and have these changes reflected immediately.
          </p>
          <p>
            To ensure ease of use, I employed Firestore for database management,
            and React Context to propogate the latest dataset throughout the
            site. For simplicity, I created a sign-in system using Firebase,
            which existed in the same ecosystem as Firestore. On completion the
            site included five product pages, a working sign-in page and a
            check-out page.
          </p>
        </div>
      </section>
      <section className={styles.longSectionContainer}>
        <h2>The long version</h2>
        <div className={styles.imageAndContentContainer}>
          <div className={styles.secondSectionTextContainer}>
            <p>
              Crown Clothing was a fashion outlet focused on men’s and women’s
              streetwear. As the product range was developing quickly, I needed
              to create a modern website that was dynamic enough to accomodate a
              quickly changing product range. It also needed to be robust enough
              that it could be easily changed and adapted later as the company
              grew.
              <br />
              <br />
              With this in mind I worked to discover the essentials of the
              company, namely what their focus was and their desired look.
              Taking the concept and layout from their own team, I began by
              building a basic version of the landing page, which established
              the skeleton of the project – that is, five product pages, a cart
              dropdown, a check-out page, and a ‘sign in and create
              account’ page.
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
            From there I began to build the product pages, which I made into
            reusable components. The intention for this design was to leverage
            React Context and Firestore to create a website that could be
            updated via the database rather than by manually making changes to
            each page.
            <br />
            <br />
            From a technical standpoint, I built this so that the site fetches
            the entire dataset from Firestore on mount and saves it to a React
            Context. Then when a product page loads, it compares the slug for
            the page to the product categories available in Context, then draws
            the corresponding set of products saved there to populate the page.
            These products are then mapped on to tile components.
            <br />
            <br />
            The end result is a design that would allow for easy scaling, as the
            company would simply need to add or replace products in the original
            dataset for the changes to be reflected on the site.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            To keep the design minimal and focused on the products, the ‘add to
            cart’ button is revealed when the user hovers over the tile. On the
            backend, items are added to a seperate ‘Cart Context’ from the
            ‘Categories Context’.
            <br />
            <br />
            The cart is easily accessible from the cart icon, and when clicked
            reveals a dropdown menu. This shows the user what’s currently in
            their cart, along with a link to the check-out page.
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
            When the user navigates to the check-out page they can see a summary
            of the items they’ve added to their cart, including the number and
            price of each item they have. Here they can also increase, decrease
            or delete the number of items in their cart, for ease of use.
            <br />
            <br />
            The products here are taken from the Cart Context and then mapped on
            to check-out components.
            <br />
            <br />
            The grand total of all items in the cart is shown at the bottom of
            the page. The total payable is also saved to the Cart Context so it
            remains attached to the appropriate dataset. This then links to a
            PayPal system to manage payments.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            After building the system for handling products, I began to build
            the sign-in system. Here I decided to remain in the same ecosystem
            as Firestore by using the Firebase system. This meant the client
            only needed one account to manage the site’s two major backend
            systems.
            <br />
            <br />
            The final product is a system that uses the in-built methods in the
            Firebase package to get authorisation, create user with email and
            password, sign in, sign out and track auth state change. It also
            uses Google Auth to create accounts tied to a user’s Google account.
            <br />
            <br />I then used a seperate ‘Sign-in Context’ to hold the users
            sign-in state as they continue to navigate the SPA.
            <br />
            <br />
            With the products, sign-in and payment systems in place, along with
            a happy client, I handed over the site to the company for their own
            team to manage going forward.
          </p>
        </div>
        <div
          className={`${styles.fifthImageContainer} ${styles.demoImageContainers}`}
        ></div>
      </section>
    </div>
  );
};

export default CrwnClothing;
