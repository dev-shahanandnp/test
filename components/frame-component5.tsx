import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
  migrate?: string;
  yourWebsiteInJustAFewStep?: string;
  switchingHostingProviders?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  className = "",
  migrate,
  yourWebsiteInJustAFewStep,
  switchingHostingProviders,
  propColor,
  propColor1,
  propWidth,
}) => {
  const migrateStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const yourWebsiteInStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const switchingHostingProvidersStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.migrateYourWebsiteInJustAWrapper}>
        <b className={styles.migrateYourWebsiteContainer}>
          <span style={migrateStyle}>{migrate}</span>
          <span className={styles.yourWebsiteIn} style={yourWebsiteInStyle}>
            {yourWebsiteInJustAFewStep}
          </span>
        </b>
      </div>
      <div className={styles.switchingHostingProvidersCaWrapper}>
        <div
          className={styles.switchingHostingProviders}
          style={switchingHostingProvidersStyle}
        >
          {switchingHostingProviders}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
