import type { NextPage } from "next";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent}>
          <div className={styles.newCustomerWrapper}>
            <div className={styles.newCustomer}>NEW CUSTOMER?</div>
          </div>
          <div className={styles.offOnYourOrderUsePromocodWrapper}>
            <div className={styles.offOnYourContainer}>
              <p className={styles.offOnYourOrder}>
                <span className={styles.off}>45% OFF</span>
                <span className={styles.onYourOrder}> on your order</span>
              </p>
              <p className={styles.offOnYourOrder}>
                <span className={styles.onYourOrder}>Use PROMOCODE “</span>
                <span className={styles.off}>PROTOMENEW</span>
                <span className={styles.span}>”</span>
              </p>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.getStartedParent}>
              <div className={styles.getStarted}>Get Started</div>
              <img
                className={styles.iconDiagonalArrowRightUp}
                alt=""
                src="/-icon-diagonal-arrow-right-up-outline1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image82Icon} alt="" src="/image-82@2x.png" />
      <img className={styles.image83Icon} alt="" src="/image-83@2x.png" />
    </div>
  );
};

export default GroupComponent2;
