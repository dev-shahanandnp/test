import type { NextPage } from "next";
import styles from "./frame-component15.module.css";

export type FrameComponent15Type = {
  className?: string;
  cPanel?: string;
  easyToUseControlPanelForM?: string;
};

const FrameComponent15: NextPage<FrameComponent15Type> = ({
  className = "",
  cPanel,
  easyToUseControlPanelForM,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.cpanelWrapper}>
        <b className={styles.cpanel}>{cPanel}</b>
      </div>
      <div className={styles.easyToUseControlPanelForWrapper}>
        <div className={styles.easyToUseControlPanel}>
          {easyToUseControlPanelForM}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;
