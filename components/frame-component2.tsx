import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
  image62?: string;
  hostingerProvedItselfARel?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  image62,
  hostingerProvedItselfARel,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.image62Wrapper}>
        <img className={styles.image62Icon} alt="" src={image62} />
      </div>
      <div className={styles.hostingerProvedItselfAReliWrapper}>
        <div className={styles.hostingerProvedItself}>
          {hostingerProvedItselfARel}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
