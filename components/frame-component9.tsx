import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.nonStopSupportAssistanceWrapper}>
              <b className={styles.nonStopSupportContainer}>
                <p
                  className={styles.nonStopSupport}
                >{`Non-Stop Support | Assistance in `}</p>
                <p className={styles.nonStopSupport}>
                  Nepali, English, Maithili, Hindi
                </p>
              </b>
            </div>
            <div className={styles.atProtozoahostWeUnderstandWrapper}>
              <div className={styles.atProtozoahostWe}>
                At ProtozoaHost, we understand that problems with Reseller
                hosting don't always occur during office hours. That's why our
                stellar Reseller web hosting support team doesn't stick to the
                9-to-5 schedule either. We value all questions and are committed
                to dedicating the time necessary to resolve your issues.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper1}>
              <div className={styles.youCanReachUs247ForHelpWrapper}>
                <div className={styles.youCanReach}>
                  You can reach us 24/7 for help with any issues
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.mditickCircleOutlineParent}>
              <img
                className={styles.mditickCircleOutlineIcon}
                alt=""
                src="/mditickcircleoutline.svg"
              />
              <div className={styles.availableResellerHostingSupWrapper}>
                <div className={styles.youCanReach}>
                  24/7/365 Available Reseller Hosting Support
                </div>
              </div>
            </div>
            <div className={styles.mditickCircleOutlineGroup}>
              <img
                className={styles.mditickCircleOutlineIcon}
                alt=""
                src="/mditickcircleoutline.svg"
              />
              <div className={styles.availableResellerHostingSupWrapper}>
                <div className={styles.youCanReach}>
                  99.95% Support Case Resolution
                </div>
              </div>
            </div>
            <div className={styles.mditickCircleOutlineGroup}>
              <img
                className={styles.mditickCircleOutlineIcon}
                alt=""
                src="/mditickcircleoutline.svg"
              />
              <div className={styles.availableResellerHostingSupWrapper}>
                <div className={styles.youCanReach}>
                  Expert Technical Support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent2}>
            <div className={styles.liveChat1Parent}>
              <img
                className={styles.liveChat1Icon}
                alt=""
                src="/livechat-1.svg"
              />
              <div className={styles.youCanReach}>Start Live Chat</div>
            </div>
            <div className={styles.emailUsWrapper}>
              <div className={styles.youCanReach}>Email Us</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image119Icon} alt="" src="/image-119@2x.png" />
    </div>
  );
};

export default FrameComponent9;
