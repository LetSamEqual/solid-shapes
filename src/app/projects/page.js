import styles from "./projects.module.css";
import Link from "next/link";
import Navbar from "../_components/navbar/navbar.component";
import ProjectTile from "../_components/project-page-tile/project-page-tile.component";
import projects from "../_data/projects-info";

const Projects = () => {
  return (
    <div>
      <Navbar props={true} />
      <div className={styles.linksContainer}>
        {projects.map((project) => {
          return <ProjectTile key={project.id} props={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
