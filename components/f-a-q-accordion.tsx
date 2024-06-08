import type { NextPage } from "next";
import styles from "./f-a-q-accordion.module.css";

export type FAQAccordionType = {
  className?: string;
  thisIsAQuestion?: string;
};

const FAQAccordion: NextPage<FAQAccordionType> = ({
  className = "",
  thisIsAQuestion,
}) => {
  return (
    <div className={[styles.faqAccordion, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.thisIsA}>{thisIsAQuestion}</div>
        <img className={styles.downIcon} alt="" src="/down.svg" />
      </div>
    </div>
  );
};

export default FAQAccordion;
