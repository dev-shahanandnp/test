import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
  prop?: string;
  signUpForProtozoaHostAndC?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  prop,
  signUpForProtozoaHostAndC,
  propWidth,
  propHeight,
  propWidth1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const signUpForStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper} style={frameDiv2Style}>
        <b className={styles.b}>{prop}</b>
      </div>
      <div className={styles.signUpForProtozoaHostAndWrapper}>
        <div className={styles.signUpFor} style={signUpForStyle}>
          {signUpForProtozoaHostAndC}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
