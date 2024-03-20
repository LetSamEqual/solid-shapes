import styles from "./booking-calendar.module.css";
import Navbar from "@/app/_components/navbar/navbar.component";

const BookingCalendar = () => {
  return (
    <div className={styles.container}>
      <Navbar props={true} />
      <section className={styles.landingContainer}>
        <h1>
          Booking <span className={styles.headingAccent}>Calendar</span>
        </h1>
        <h2>Calendar component</h2>
        <h3>Tools: React, GitHub Actions, GitHub Pages, CMS</h3>
      </section>
      <section className={styles.shortSectionContainer}>
        <div className={styles.firstSectionTextContainer}>
          <h3>The short version</h3>
          <p>
            The idea was to create a functional date selector that could be used
            for a hotel booking service or similar. This system primarily leans
            on the date class system built into JS, with the dates styled in a
            grid and displayed based on conditional classnames. The selected
            dates are returned as an object, which could be converted to a JSON
            and then sent to a server with a simple Post request. This component
            was only a back-end system, while the front-end design would be
            arranged by a third-party.
          </p>
        </div>
      </section>
      <section className={styles.longSectionContainer}>
        <h2>The long version</h2>
        <div className={styles.imageAndContentContainer}>
          <div className={styles.secondSectionTextContainer}>
            <p>
              I began by identifying the main requirements of this system. The
              dates should be displayed in a familiar format – that is, one
              month at a time in a grid structure, a row at the top showing days
              of the week, and with some dates from the previous and next month
              displayed to make up a full week. From there, the user should be
              able to simply click the dates on the calendar to select a booking
              window. There should be visual feedback from each click so the
              user knows immediately what dates have been selected, meaning
              there should be a CSS rule that changes the appearance of the
              selected dates on the calendar. It shouldn’t allow people to
              select dates prior to the current date, or to select an end date
              prior to the start date. Finally, the system should be user
              friendly, reducing the number of clicks that the user has to go
              through to adjust their booking window.
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
            The first requirement – that is, displaying dates in a familiar
            format – ended up being the hardest solution to comprehend. While it
            was easy to get dates for each month using the in-built Date class
            system, it was hard to match each date with the day of the week they
            fall on. However, with some deeper research into the docs on the
            Date system I discovered that each Date instance includes the day of
            the week it falls on with a 0–6 ID. That is, Sunday = 0 and Saturday
            = 6. Using this number, and some lateral thinking, I realised I
            could slice the appropriate number of dates from an array of the
            previous months dates and next months dates, and add it to the array
            of dates that should be shown on the calendar.
            <br />
            <br />
            The beauty of this solution is that it not only populates the array
            with the correct dates to display, but also ensures each date is
            aligned with the correct position on the calendar grid. By mapping
            this new array of dates, which included a section of the previous
            and next months dates, the array would always start on the same
            weekday.
          </p>
        </div>
      </section>
      <section className={styles.imageAndContentContainer}>
        <div className={styles.secondSectionTextContainer}>
          <p>
            From there, the rest quickly fell into place. As each day displayed
            on the calendar was a Date instance, an onClick function simply
            needed to take the target’s date and store it to state. The onClick
            function then just needed to handle the logic of which state to
            store the date in – the start date or the end date. I did this by
            having the onClick function check whether the start date state was
            empty, and if true then populate it with the selected date. If not
            then the end date would be populated. If both start and end date
            states were populated then the start date was replaced with the new
            date and the end date was returned to an empty string.
            <br />
            <br />I then added a check to each day in the calendar that checked
            whether it fell before the current date, or before the start date
            saved to state. If it was, then the button was disabled to keep
            users from selecting invalid dates. This check was similar to the
            classname I used for each date instance, which would change the
            styling for each date depending on the dates stored in state to give
            the user visual cues about the dates they had and could select.
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
            After that there was just a simple ‘next month’ ‘previous month’
            selector, which performed all the above again for either the next or
            previous month. This of course maintained state so a user could
            select a start date in one month and then an end date in a future
            month. Finally, the start and end date states were stored in an
            object, which could be converted to JSON and sent via a Post to some
            endpoint when the user confirms their selected dates. This project
            ended up being incredibly interesting as a puzzle, and altogether
            not a bad way to spend some time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookingCalendar;
