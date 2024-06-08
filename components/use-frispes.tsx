import type { NextPage } from "next";
import styles from "./use-frispes.module.css";

export type UseFrispesType = {
  className?: string;
};

const UseFrispes: NextPage<UseFrispesType> = ({ className = "" }) => {
  return (
    <div className={[styles.useFrispes, className].join(" ")}>
      <div className={styles.head}>
        <b className={styles.title}>
          <span>{`Trusted By `}</span>
          <span className={styles.leadingBrands}>Leading Brands</span>
        </b>
        <div className={styles.subtitle}>
          Trusted by Big brands, small bussiness, new startup and inividuals
        </div>
      </div>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
        <img className={styles.logoIcon2} alt="" src="/logo2.svg" />
        <img className={styles.logoIcon3} alt="" src="/logo3.svg" />
        <img className={styles.logoIcon4} alt="" src="/logo4.svg" />
        <img className={styles.logoIcon5} alt="" src="/logo5.svg" />
      </div>
    </div>
  );
};

export default UseFrispes;
