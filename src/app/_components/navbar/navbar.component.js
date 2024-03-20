"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ props }) => {
  const pathname = usePathname();

  let linkStyle;

  if (props) {
    linkStyle = styles.activeWhite;
  } else {
    linkStyle = styles.activeBlack;
  }

  return (
    <div
      className={`${styles.linksContainer} ${props ? styles.black : ""}
      `}
    >
      <Link className={pathname === "/" ? `${linkStyle}` : ""} href="/">
        Home
      </Link>
      <Link className={pathname === "/bio" ? `${linkStyle}` : ""} href="/bio">
        Bio
      </Link>
      <Link
        className={pathname === "/projects" ? `${linkStyle}` : ""}
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className={pathname === "/contact" ? `${linkStyle}` : ""}
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
