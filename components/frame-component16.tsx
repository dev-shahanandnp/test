import type { NextPage } from "next";
import FAQAccordion from "./f-a-q-accordion";

export type FrameComponent16Type = {
  className?: string;
};

const FrameComponent16: NextPage<FrameComponent16Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_247px)] top-[930.15rem] right-[7.75rem] left-[7.688rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">Your Web Hosting Questions Answered - FAQ</b>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
          <div className="relative font-light">
            Get the Clarity You Need with Our Comprehensive FAQs
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem] text-black">
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
