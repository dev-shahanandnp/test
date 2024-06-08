import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.image69Transformed1Parent, className].join(" ")}>
      <img
        className={styles.image69Transformed1Icon}
        alt=""
        src="/image-69transformed-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.advancedSecurityFeaturesWrapper}>
          <div className={styles.advancedSecurityFeatures}>
            Advanced Security Features
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.mdicheckBoldParent}>
            <img
              className={styles.mdicheckBoldIcon}
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className={styles.getUnlimitedSsl}>
              Get unlimited SSL security certificates to encrypt your websites’
              traffic.
            </div>
          </div>
          <div className={styles.mdicheckBoldParent}>
            <img
              className={styles.mdicheckBoldIcon}
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className={styles.getUnlimitedSsl}>
              Protect your website from DDoS attacks with Cloudflare protected
              nameservers.
            </div>
          </div>
          <div className={styles.mdicheckBoldParent}>
            <img
              className={styles.mdicheckBoldIcon}
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className={styles.getUnlimitedSsl}>
              Secure your files with automatic backups.
            </div>
          </div>
          <div className={styles.mdicheckBoldParent}>
            <img
              className={styles.mdicheckBoldIcon}
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className={styles.getUnlimitedSsl}>
              Ensure your website is up and running with our 99.9% uptime
              guarantee.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
