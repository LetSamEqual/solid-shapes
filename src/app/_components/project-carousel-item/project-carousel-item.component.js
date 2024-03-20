import styles from "./project-carousel-item.module.css";
import Link from "next/link";

const CarouselItem = ({ props }) => {
  console.log(props.backgroundImage);
  return (
    <Link href={props.route}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url('${props.backgroundImage}')`,
        }}
      >
        <div className={styles.descriptionContainer}>
          <h1>{props.name}</h1>
          <h3>{props.subheader}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
