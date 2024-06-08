import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cloud.module.css";

export type CloudType = {
  className?: string;
  image101?: string;
  cloudHosting?: string;
  getCloud?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTextAlign?: CSSProperties["textAlign"];
  propTextAlign1?: CSSProperties["textAlign"];
};

const Cloud: NextPage<CloudType> = ({
  className = "",
  image101,
  cloudHosting,
  getCloud,
  propLeft,
  propTextAlign,
  propTextAlign1,
}) => {
  const cloudStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const cloudHostingStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const getCloudStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div className={[styles.cloud, className].join(" ")} style={cloudStyle}>
      <div className={styles.frameParent}>
        <div className={styles.image101Wrapper}>
          <img className={styles.image101Icon} alt="" src={image101} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameGroup}>
            <div className={styles.cloudHostingWrapper}>
              <div className={styles.cloudHosting} style={cloudHostingStyle}>
                {cloudHosting}
              </div>
            </div>
            <div className={styles.startingFromOnly}>Starting From Only</div>
          </div>
          <div className={styles.rs119900yearWrapper}>
            <div className={styles.rs119900year}>Rs 1199.00/year</div>
          </div>
        </div>
        <div className={styles.save30ExtraUsingPromoPrWrapper}>
          <div className={styles.save30Extra}>
            Save 30% Extra Using Promo "PROTO30"
          </div>
        </div>
        <div className={styles.findYourIdealSharedHostingWrapper}>
          <div className={styles.findYourIdeal}>
            Find Your Ideal Shared Hosting Plan: Customized, Cost-Effective,
            Starting from Rs 99.00/mo.
          </div>
        </div>
      </div>
      <div className={styles.cloudInner}>
        <div className={styles.getCloudParent}>
          <div className={styles.save30Extra} style={getCloudStyle}>
            {getCloud}
          </div>
          <img
            className={styles.iconDiagonalArrowRightUp}
            alt=""
            src="/-icon-diagonal-arrow-right-up-outline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cloud;
