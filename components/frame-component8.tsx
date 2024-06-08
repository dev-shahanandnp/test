import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.ellipseDiv} />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.https}>https://</div>
        <div className={styles.com}>.com</div>
        <div className={styles.groupChild1} />
        <img
          className={styles.freepikExport20240606161727sIcon}
          alt=""
          src="/freepikexport20240606161727swsp-1@2x.png"
        />
        <img className={styles.groupChild2} alt="" src="/vector-3.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
        <div className={styles.groupChild3} />
        <img className={styles.security1Icon} alt="" src="/security-1.svg" />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.unlimitedFreeMigrationsFrWrapper}>
              <b
                className={styles.unlimitedFreeMigrations}
              >{`Unlimited Free Migrations & Free SSL Certificates`}</b>
            </div>
            <div className={styles.transitioningToProtozoahostWrapper}>
              <div className={styles.transitioningToProtozoahostContainer}>
                <span className={styles.transitioningToProtozoahostContainer1}>
                  <p className={styles.transitioningToProtozoahost}>
                    Transitioning to ProtozoaHost from your existing service
                    provider? Allow us to manage the entire migration process on
                    your behalf.
                  </p>
                  <p className={styles.transitioningToProtozoahost}>&nbsp;</p>
                  <p className={styles.transitioningToProtozoahost}>
                    When you transfer any number of your websites to your
                    ProtozoaHost subscription, you won't incur any expenses.
                    Whether you possess 1, 10, or even 100 websites, there will
                    be no charges applicable.
                  </p>
                  <p className={styles.transitioningToProtozoahost}>&nbsp;</p>
                  <p className={styles.transitioningToProtozoahost}>
                    Every website hosted through ProtozoaHost is equipped with a
                    complimentary default AutoSSL. As soon as your website is up
                    and running, our automated SSL checker will seamlessly
                    deploy a free SSL certificate for you. This process occurs
                    hourly to ensure a secure browsing experience.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
