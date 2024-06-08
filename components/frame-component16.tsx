import type { NextPage } from "next";
import FAQAccordion from "./f-a-q-accordion";
import styles from "./frame-component16.module.css";

export type FrameComponent16Type = {
  className?: string;
};

const FrameComponent16: NextPage<FrameComponent16Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.yourWebHostingQuestionsAnsWrapper}>
          <b className={styles.yourWebHosting}>
            Your Web Hosting Questions Answered - FAQ
          </b>
        </div>
        <div className={styles.getTheClarityYouNeedWithWrapper}>
          <div className={styles.getTheClarity}>
            Get the Clarity You Need with Our Comprehensive FAQs
          </div>
        </div>
      </div>
      <div className={styles.faqAccordionParent}>
        <FAQAccordion thisIsAQuestion="Why should you choose ProtozoaHost for your web hosting?" />
        <FAQAccordion thisIsAQuestion="How does ProtozoaHost ensure uptime for web hosting plans in Nepal?" />
        <FAQAccordion thisIsAQuestion="Can I upgrade my hosting plan as my website grows?" />
        <FAQAccordion thisIsAQuestion="What makes ProtozoaHost a preferred choice for hosting in Nepal with Nepal based web hosting plans?" />
        <FAQAccordion thisIsAQuestion="How easy is it to migrate my website to ProtozoaHost?" />
        <FAQAccordion thisIsAQuestion="How does ProtozoaHost ensure quality email hosting in Nepal?" />
        <FAQAccordion thisIsAQuestion="How To Register a Domain?" />
        <FAQAccordion thisIsAQuestion="What is Shared cPanel Hosting?" />
      </div>
    </div>
  );
};

export default FrameComponent16;
