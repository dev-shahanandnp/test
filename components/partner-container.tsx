import type { NextPage } from "next";
import styles from "./partner-container.module.css";

export type PartnerContainerType = {
  className?: string;
};

const PartnerContainer: NextPage<PartnerContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.ourPartnersWrapper}>
          <b className={styles.ourPartners}>Our Partners</b>
        </div>
        <div className={styles.weWorkWithTheBestInTheIWrapper}>
          <div className={styles.weWorkWithContainer}>
            <p
              className={styles.weWorkWith}
            >{`We work with the best in the industry to bring you top-notch `}</p>
            <p
              className={styles.webHostingIn}
            >{`web hosting in Nepal.  Together, we push the boundaries of success. `}</p>
            <p className={styles.weWorkWith}>
              Meet our trusted technology partners.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-98@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-92@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-93@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-94@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-96@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-91@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-90@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-99@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-100@2x.png" />
        <img className={styles.frameChild} alt="" src="/rectangle-90@2x.png" />
      </div>
    </div>
  );
};

export default PartnerContainer;
