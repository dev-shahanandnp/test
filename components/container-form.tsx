import type { NextPage } from "next";
import styles from "./container-form.module.css";

export type ContainerFormType = {
  className?: string;
};

const ContainerForm: NextPage<ContainerFormType> = ({ className = "" }) => {
  return (
    <div className={[styles.lineParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <img className={styles.groupInner} alt="" />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.lineDiv} />
      <div className={styles.cpanelDashboard}>{`cPanel Dashboard `}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild2} />
        <div className={styles.sslCertificate}>SSL Certificate</div>
        <div className={styles.groupChild3} />
        <div className={styles.active}>Active</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild4} />
        <div className={styles.fileManager}>File Manager</div>
        <img className={styles.folder1Icon} alt="" src="/folder-1.svg" />
      </div>
      <div className={styles.groupChild5} />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild4} />
        <div className={styles.databases}>Databases</div>
        <img className={styles.database21} alt="" src="/database-2-1.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild4} />
        <div className={styles.wordpressOverview}>Wordpress Overview</div>
        <img className={styles.wordpress31} alt="" src="/wordpress-3-1.svg" />
      </div>
      <div className={styles.businessParent}>
        <div className={styles.business}>Business</div>
        <div className={styles.active1}>Active</div>
        <div className={styles.seeDetails}>See Details</div>
        <img className={styles.fi2891526Icon} alt="" src="/fi-2891526.svg" />
      </div>
      <div className={styles.domainParent}>
        <div className={styles.business}>Domain</div>
        <div className={styles.active1}>Active</div>
        <div className={styles.seeDetails}>Manage</div>
        <img className={styles.fi2891526Icon} alt="" src="/fi-28915261.svg" />
      </div>
      <div className={styles.businessEmailParent}>
        <div className={styles.business}>Business Email</div>
        <div className={styles.active1}>Active</div>
        <div className={styles.seeDetails}>Manage</div>
        <img className={styles.fi2891526Icon} alt="" src="/fi-28915262.svg" />
      </div>
      <div className={styles.dailyBackupsParent}>
        <div className={styles.business}>Daily backups</div>
        <div className={styles.active1}>Active</div>
        <div className={styles.seeDetails}>Manage</div>
        <img className={styles.fi2891526Icon} alt="" src="/fi-28915263.svg" />
      </div>
      <img className={styles.nepal1Icon} alt="" src="/nepal-1@2x.png" />
      <img
        className={styles.performance1Icon}
        alt=""
        src="/performance-1@2x.png"
      />
      <img className={styles.bigBrand1} alt="" src="/big-brand-1@2x.png" />
      <div className={styles.groupChild8} />
      <div className={styles.groupChild9} />
      <div className={styles.groupChild10} />
      <div className={styles.groupChild11} />
      <div className={styles.groupChild12} />
      <img
        className={styles.wepikExport20240401055453mwlIcon}
        alt=""
        src="/wepikexport20240401055453mwlb-1@2x.png"
      />
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild13} />
        <div className={styles.groupParent}>
          <div className={styles.safeParent}>
            <div className={styles.safe}>Safe</div>
            <div className={styles.noMalwareFound}>No malware found</div>
            <div className={styles.seeMalwareScanner}>See malware scanner</div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group-82.svg" />
        </div>
      </div>
      <img className={styles.group210} alt="" src="/group-2-10@2x.png" />
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild14} />
        <div className={styles.performanceScoreForProtozoaParent}>
          <div className={styles.performanceScoreForContainer}>
            <p className={styles.performanceScoreFor}>Performance score for</p>
            <p className={styles.performanceScoreFor}>protozoahost.com</p>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>0-49</div>
            <div className={styles.ellipseDiv} />
          </div>
          <div className={styles.group}>
            <div className={styles.div1}>50-89</div>
            <div className={styles.groupChild15} />
          </div>
          <div className={styles.container}>
            <div className={styles.div2}>90-100</div>
            <div className={styles.groupChild16} />
          </div>
          <div className={styles.groupChild17} />
          <div className={styles.div3}>99</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
