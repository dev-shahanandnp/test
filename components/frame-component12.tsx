import type { NextPage } from "next";
import styles from "./frame-component12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.searchMindsAcheives10xBusiWrapper}>
        <div className={styles.searchMindsAcheives}>
          Search Minds Acheives 10x Business Boost: Thanks to ProtozoaHost
          Premium Hosting
        </div>
      </div>
      <div className={styles.readMoreParent}>
        <div className={styles.readMore}>Read more</div>
        <img
          className={styles.basilarrowUpOutlineIcon}
          alt=""
          src="/basilarrowupoutline@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;
