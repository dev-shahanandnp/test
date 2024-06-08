import type { NextPage } from "next";
import styles from "./group-component4.module.css";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.frameParent}>
        <div className={styles.oneClickInstallsSoYouCanWrapper}>
          <b className={styles.oneClickInstallsSoContainer}>
            <p className={styles.oneClickInstallsSo}>
              One-Click installs so you can
            </p>
            <p className={styles.oneClickInstallsSo}>build happy.</p>
          </b>
        </div>
        <div className={styles.image8Parent}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
