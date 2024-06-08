import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.boostYourTeamsProductivityWrapper}>
          <b className={styles.boostYourTeamsContainer}>
            <p className={styles.boostYourTeams}>
              Boost your team's productivity with
            </p>
            <p className={styles.boostYourTeams}>
              <span className={styles.protozoaHost}>{`Protozoa Host `}</span>
              <span>Email and Workspace Platforms</span>
            </p>
          </b>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.boostYourTeamsProductivityWrapper}>
                  <div className={styles.googleWorkspace}>Google Workspace</div>
                </div>
                <div className={styles.boostYourTeamsProductivityContainer}>
                  <div className={styles.enhanceYourBusiness}>
                    Boost your team's productivity with Google Workspace.
                    Integrated tools like Gmail, Docs, and Drive ensure seamless
                    collaboration.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.sellAllPlansWrapper}>
                  <div className={styles.googleWorkspace}>Sell all Plans</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.image116Wrapper}>
                <img
                  className={styles.image116Icon}
                  alt=""
                  src="/image-116@2x.png"
                />
              </div>
              <img
                className={styles.image115Icon}
                alt=""
                src="/image-115@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.boostYourTeamsProductivityWrapper}>
                    <div className={styles.googleWorkspace}>Zoho Workplace</div>
                  </div>
                  <div className={styles.boostYourTeamsProductivityContainer}>
                    <div className={styles.enhanceYourBusiness}>
                      Enhance your business with Zoho Workplace with suite of
                      web apps like Mail, Writer, Sheet, and more all integrated
                      into your domain.
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.sellAllPlansWrapper}>
                    <div className={styles.googleWorkspace}>Become Zoho</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.image114Icon}
              alt=""
              src="/image-114@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.boostYourTeamsProductivityWrapper}>
                  <div className={styles.googleWorkspace}>
                    Microsoft Office 365
                  </div>
                </div>
                <div className={styles.boostYourTeamsProductivityContainer}>
                  <div className={styles.instantlyAccessDomain}>
                    Instantly access domain ownership and registration details
                    with Microsoft Office 365 integration.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.sellAllPlansWrapper}>
                  <div className={styles.googleWorkspace}>Buy Office 365</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.layer11} />
          <img className={styles.image117Icon} alt="" src="/image-117@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
