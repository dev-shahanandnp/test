import type { NextPage } from "next";
import styles from "./frame-component18.module.css";

export type FrameComponent18Type = {
  className?: string;
  asset0571?: string;
  freeMigration?: string;
};

const FrameComponent18: NextPage<FrameComponent18Type> = ({
  className = "",
  asset0571,
  freeMigration,
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.asset0571Parent}>
        <img className={styles.asset0571Icon} alt="" src={asset0571} />
        <div className={styles.frameParent}>
          <div className={styles.freeMigrationWrapper}>
            <div className={styles.freeMigration}>{freeMigration}</div>
          </div>
          <div className={styles.fastSecureAndScalableHosWrapper}>
            <div className={styles.fastSecureAndContainer}>
              <p
                className={styles.fastSecureAnd}
              >{`Fast, secure, and scalable hosting tailored for your `}</p>
              <p className={styles.fastSecureAnd}>website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent18;
