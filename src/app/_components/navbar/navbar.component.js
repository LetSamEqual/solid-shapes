"use client";

import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = ({ props }) => {
  return (
    <div
      className={`${styles.linksContainer}
      `}
    >
      <Link className={styles.linkStyle} href="/">
        Home
      </Link>
      <Link className={styles.linkStyle} href="/bio">
        Bio
      </Link>
      <Link className={styles.linkStyle} href="/projects">
        Projects
      </Link>
      <Link className={styles.linkStyle} href="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
