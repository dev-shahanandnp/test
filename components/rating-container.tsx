import type { NextPage } from "next";
import styles from "./rating-container.module.css";

export type RatingContainerType = {
  className?: string;
};

const RatingContainer: NextPage<RatingContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.image26Parent, className].join(" ")}>
      <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <span>4.5</span>
          <span className={styles.span}>/5</span>
        </div>
      </div>
      <div className={styles.iconStarParent}>
        <div className={styles.iconStar}>
          <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
        </div>
        <div className={styles.basedOn448Container}>
          <span>{`Based on `}</span>
          <span className={styles.reviews}>448 Reviews</span>
        </div>
      </div>
      <img className={styles.frameChild} alt="" />
    </div>
  );
};

export default RatingContainer;
