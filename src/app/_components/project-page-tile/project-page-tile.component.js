import styles from "./project-page-tile.module.css";
import Link from "next/link";

const ProjectTile = ({ props }) => {
  return (
    <Link href={props.route}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{props.name}</h2>
        </div>
        <div className={styles.blankContainer}>
          <div className={styles.projectDescriptionContainer}>
            <div className={styles.angledDiv}></div>
            <p className={styles.projectDescription}>
              {props.projectCardDescription}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTile;
