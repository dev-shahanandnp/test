import type { NextPage } from "next";
import styles from "./frame-component19.module.css";

export type FrameComponent19Type = {
  className?: string;
};

const FrameComponent19: NextPage<FrameComponent19Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.firstNameWrapper}>
        <div className={styles.firstName}>First Name</div>
      </div>
      <div className={styles.firstNameWrapper}>
        <div className={styles.firstName}>Last Name</div>
      </div>
      <div className={styles.enterYourPhoneNumberWrapper}>
        <div className={styles.firstName}>Enter your Phone Number</div>
      </div>
      <div className={styles.enterYourPhoneNumberWrapper}>
        <div className={styles.firstName}>Enter your Email Address</div>
      </div>
      <div className={styles.serviceTypeParent}>
        <div className={styles.firstName}>Service Type</div>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.enterYourRequirementsWrapper}>
        <div className={styles.firstName}>Enter your requirements</div>
      </div>
    </div>
  );
};

export default FrameComponent19;
