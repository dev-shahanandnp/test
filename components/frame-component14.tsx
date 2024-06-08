import type { NextPage } from "next";
import FrameComponent15 from "./frame-component15";
import styles from "./frame-component14.module.css";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.ourHostingSolutionsWrapper}>
        <div className={styles.ourHostingSolutions}>Our Hosting Solutions</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <FrameComponent15
            cPanel="cPanel"
            easyToUseControlPanelForM="Easy-to-use control panel for managing domains, emails, and files."
          />
          <FrameComponent15
            cPanel="WP Squared"
            easyToUseControlPanelForM="Managed WordPress hosting with top security and performance."
          />
          <FrameComponent15
            cPanel="Plesk Panel"
            easyToUseControlPanelForM="Versatile management for hosting, email, and security."
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <div className={styles.ourHostingSolutionsWrapper}>
              <b className={styles.vps}>VPS</b>
            </div>
            <div className={styles.virtualPrivateServerHostingWrapper}>
              <div className={styles.virtualPrivateServerContainer}>
                <span className={styles.virtualPrivateServerContainer1}>
                  <p className={styles.virtualPrivateServer}>
                    Virtual Private Server hosting offering dedicated
                  </p>
                  <p className={styles.virtualPrivateServer}>
                    resources and greater control for your web
                  </p>
                  <p className={styles.virtualPrivateServer}>environments.</p>
                </span>
              </div>
            </div>
          </div>
          <FrameComponent15
            cPanel="Google Workspace"
            easyToUseControlPanelForM=" Suite of  cloud based tools for email, documents, and collaboration."
          />
          <FrameComponent15
            cPanel="Zoho Worksplace"
            easyToUseControlPanelForM="Suite of cloud-based productivity tools including email, document creation, and collaboration."
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
