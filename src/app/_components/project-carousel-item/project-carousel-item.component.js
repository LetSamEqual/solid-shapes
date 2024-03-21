import styles from "./project-carousel-item.module.css";
import Link from "next/link";

const CarouselItem = ({ props }) => {
  return (
    <Link href={props.route}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url('${props.backgroundImage}')`,
        }}
      >
        <div className={styles.descriptionContainer}>
          <h2>{props.name}</h2>
          <h3>{props.subheader}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
