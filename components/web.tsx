import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./web.module.css";

export type WebType = {
  className?: string;
  image102?: string;
  webHosting?: string;
  getWebHosting?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Web: NextPage<WebType> = ({
  className = "",
  image102,
  webHosting,
  getWebHosting,
  propLeft,
  propBorderRadius,
  propWidth,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const webStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const image102IconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      width: propWidth,
    };
  }, [propBorderRadius, propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={[styles.web, className].join(" ")} style={webStyle}>
      <div className={styles.image102Parent}>
        <img
          className={styles.image102Icon}
          alt=""
          src={image102}
          style={image102IconStyle}
        />
        <div className={styles.frameParent}>
          <div className={styles.frameParent}>
            <div className={styles.webHostingWrapper}>
              <div className={styles.webHosting}>{webHosting}</div>
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
      <div className={styles.webInner} style={frameDivStyle}>
        <div className={styles.getWebHostingParent} style={frameDiv1Style}>
          <div className={styles.save30Extra}>{getWebHosting}</div>
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

export default Web;
