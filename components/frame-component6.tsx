import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.chooseFromTheMostPopularDWrapper}>
          <b className={styles.chooseFromTheContainer}>
            <p
              className={styles.chooseFromThe}
            >{`Choose from the Most Popular `}</p>
            <p className={styles.chooseFromThe}>
              <span className={styles.domain}>Domain</span>
              <span> Extensions</span>
            </p>
          </b>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.chooseFromTheMostPopularDWrapper}>
                  <div className={styles.domains}>Domains</div>
                </div>
                <div className={styles.getStartedWithThePerfectDWrapper}>
                  <div className={styles.getStartedWith}>
                    Get Started with the perfect domain, which comes with free
                    domain privacy protection forever.
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.searchDomainsWrapper}>
                  <div className={styles.domains}>Search Domains</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.layer11} alt="" src="/layer-1-1@2x.png" />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.frameParent1}>
                <div className={styles.frameContainer}>
                  <div className={styles.chooseFromTheMostPopularDWrapper}>
                    <div className={styles.domains}>SSL Certificates</div>
                  </div>
                  <div className={styles.getStartedWithThePerfectDWrapper}>
                    <div
                      className={styles.enhanceYourWebsites}
                    >{`Enhance your website's security and boost visitor confidence with our SSL Certificates. `}</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.searchDomainsWrapper}>
                    <div className={styles.domains}>
                      Get Premium SSL Certificates
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.image120Icon}
              alt=""
              src="/image-120@2x.png"
            />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.frameParent3}>
                <div className={styles.frameContainer}>
                  <div className={styles.chooseFromTheMostPopularDWrapper}>
                    <div className={styles.domains}>Domain Transfer</div>
                  </div>
                  <div className={styles.getStartedWithThePerfectDWrapper}>
                    <div className={styles.enhanceYourWebsites}>
                      Looking to switch your domain provider? Transfer your
                      domain to us for a seamless experience.
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.searchDomainsWrapper}>
                    <div className={styles.domains}>Transfer Domain</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.image121Icon}
              alt=""
              src="/image-121@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
