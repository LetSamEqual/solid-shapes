"use client";

import styles from "./contact.module.css";

import ContactForm from "../_components/contact-form/contact-form";
import Navbar from "../_components/navbar/navbar.component";

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar props={false} />
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
