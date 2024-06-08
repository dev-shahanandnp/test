import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-default8.module.css";

export type Property1Default8Type = {
  className?: string;
  image107?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default8: NextPage<Property1Default8Type> = ({
  className = "",
  image107,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1DefaultStyle}
    >
      <div className={styles.image107Parent}>
        <img className={styles.image107Icon} alt="" src={image107} />
        <div className={styles.frameParent}>
          <div className={styles.frameParent}>
            <div className={styles.windowsaspnetResellerHostiWrapper}>
              <div className={styles.windowsaspnetResellerHosti}>
                Windows/ASP.NET Reseller Hosting
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
      <div className={styles.property1defaultInner}>
        <div className={styles.getWindowsaspnetParent}>
          <div className={styles.save30Extra}>Get Windows/ASP.NET</div>
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

export default Property1Default8;
