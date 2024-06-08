import type { NextPage } from "next";
import styles from "./group-component3.module.css";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.ellipseDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.protozoahostServerParent}>
        <div className={styles.protozoahostServer}>
          <p className={styles.protozoahost}>ProtozoaHost</p>
          <p className={styles.protozoahost}>Server</p>
        </div>
        <div className={styles.div}>4329</div>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.apacheW3tcParent}>
        <div className={styles.protozoahostServer}>
          <p className={styles.protozoahost}>Apache+</p>
          <p className={styles.protozoahost}>W3TC</p>
        </div>
        <div className={styles.div1}>1241</div>
        <div className={styles.groupChild2} />
      </div>
      <div className={styles.nginxFcgiParent}>
        <div className={styles.protozoahostServer}>
          <p className={styles.protozoahost}>Nginx+</p>
          <p className={styles.protozoahost}>FCGI</p>
        </div>
        <div className={styles.div2}>858</div>
        <div className={styles.groupChild3} />
      </div>
      <div className={styles.div3}>0</div>
      <div className={styles.div4}>1000</div>
      <div className={styles.div5}>2000</div>
      <div className={styles.div6}>3000</div>
      <div className={styles.div7}>4000</div>
      <div className={styles.apacheWprocketParent}>
        <div className={styles.protozoahostServer}>
          <p className={styles.protozoahost}>Apache+</p>
          <p className={styles.protozoahost}>WPRocket</p>
        </div>
        <div className={styles.div8}>683</div>
        <div className={styles.groupChild4} />
      </div>
      <img className={styles.image118Icon} alt="" src="/image-118@2x.png" />
      <div className={styles.transactionssec}>Transactions/sec</div>
    </div>
  );
};

export default GroupComponent3;
