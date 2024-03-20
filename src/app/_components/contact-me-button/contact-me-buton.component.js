import styles from "./contact-me-button.module.css";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="/contact">
      <h3 className={styles.contactButton}>Contact</h3>
    </Link>
  );
};

export default ContactButton;
