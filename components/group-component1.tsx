import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";
import FrameComponent4 from "./frame-component4";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <FrameComponent5
            migrate="Migrate"
            yourWebsiteInJustAFewStep=" Your Website in Just a Few Steps"
            switchingHostingProviders="Switching hosting providers can be a lot of hassle. Let our expert Tech Support team do what they do best to provide a smooth professional website transfer. Moving your site over won't incur any downtime or data loss, and we'll assist you to review your migrated site prior to going live."
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <FrameComponent4
                    prop="01"
                    signUpForProtozoaHostAndC="Sign up for Protozoa Host and Contact Support"
                  />
                  <div className={styles.freeMigrationsAreAvailableWrapper}>
                    <div className={styles.freeMigrationsAre}>
                      Free migrations are available for all of Protozoa Host’s
                      plans. Provide all of the needed website details and
                      coordinate with our team.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.wrapper}>
                      <b className={styles.b}>02</b>
                    </div>
                    <div className={styles.chooseHostingPlanWrapper}>
                      <div className={styles.chooseHostingPlanContainer}>
                        <span className={styles.chooseHostingPlanContainer1}>
                          <p className={styles.chooseHostingPlan}>
                            Choose Hosting Plan
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.freeMigrationsAreAvailableWrapper}>
                    <div className={styles.freeMigrationsAre}>
                      Simply choose your plan to get started. Our committed
                      migrations team will manage the process of transferring
                      your site.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent1}>
                  <FrameComponent4
                    prop="03"
                    signUpForProtozoaHostAndC="Post-Migration Assistance and Monitoring"
                    propWidth="unset"
                    propHeight="unset"
                    propWidth1="249px"
                  />
                  <div className={styles.sitBackAndRelaxWhileOurEWrapper}>
                    <div className={styles.sitBackAndContainer}>
                      <span className={styles.chooseHostingPlanContainer1}>
                        <p className={styles.chooseHostingPlan}>
                          Sit back and relax while our experts do the heavy
                          lifting for you. Verify your website prior to going
                          live.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.startMigrationWrapper}>
            <div className={styles.startMigration}>Start Migration</div>
          </div>
          <div className={styles.contactSalesWrapper}>
            <div className={styles.contactSales}>Contact Sales</div>
          </div>
        </div>
      </div>
      <img className={styles.groupChild} alt="" src="/arrow-1.svg" />
      <img className={styles.groupItem} alt="" src="/arrow-1.svg" />
    </div>
  );
};

export default GroupComponent1;
