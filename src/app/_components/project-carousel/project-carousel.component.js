"use client";

import styles from "./project-carousel.module.css";
import CarouselItem from "../project-carousel-item/project-carousel-item.component";
import projects from "../../_data/projects-info.js";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => {
        return <CarouselItem key={project.id} props={project} />;
      })}
    </div>
  );
};

export default Carousel;
