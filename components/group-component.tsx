import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.mWrapper}>
            <b className={styles.m}>1.4M+</b>
          </div>
          <div className={styles.requestPerSecondWrapper}>
            <div className={styles.requestPerSecondContainer}>
              <p className={styles.requestPer}>Request Per</p>
              <p className={styles.requestPer}>Second</p>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.mWrapper}>
            <b className={styles.m}>5+</b>
          </div>
          <div className={styles.requestPerSecondWrapper}>
            <div className={styles.requestPerSecondContainer}>
              <p className={styles.requestPer}>Data Centers</p>
              <p className={styles.requestPer}>around the world</p>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.mWrapper}>
            <b className={styles.m}>1</b>
          </div>
          <div className={styles.requestPerSecondWrapper}>
            <div className={styles.requestPerSecondContainer}>
              <p className={styles.requestPer}>Local Data</p>
              <p className={styles.requestPer}>Center in Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
