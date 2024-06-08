import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent2
        image62="/image-62@2x.png"
        hostingerProvedItselfARel="Hostinger proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period."
      />
      <div className={styles.frameGroup}>
        <div className={styles.image63Wrapper}>
          <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
        </div>
        <div className={styles.plansIncludeSslCertificatesWrapper}>
          <div className={styles.plansIncludeSslContainer}>
            <p className={styles.plansIncludeSsl}>
              Plans include SSL certificates and all servers have an advanced
              security module to protect your data.
            </p>
          </div>
        </div>
      </div>
      <FrameComponent2
        image62="/image-64@2x.png"
        hostingerProvedItselfARel="With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured."
      />
    </div>
  );
};

export default FrameComponent1;
