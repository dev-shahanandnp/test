import type { NextPage } from "next";
import FrameComponent12 from "./frame-component12";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.customerSuccessStoriesWrapper}>
            <b className={styles.customerSuccessStoriesContainer}>
              <span>{`Customer Success `}</span>
              <span className={styles.stories}>Stories</span>
            </b>
          </div>
          <div className={styles.readTheRemarkableStoriesOfWrapper}>
            <div className={styles.readTheRemarkable}>
              Read the remarkable stories of individuals who turned their online
              dreams into reality and witnessed game-changing success with
              ProtozoaHost
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-42@2x.png"
            />
            <FrameComponent12 />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-42@2x.png"
            />
            <FrameComponent12 />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-42@2x.png"
            />
            <FrameComponent12 />
          </div>
        </div>
      </div>
      <div className={styles.readMoreStoriesWrapper}>
        <div className={styles.readMoreStories}>Read More Stories</div>
      </div>
    </div>
  );
};

export default FrameComponent11;
