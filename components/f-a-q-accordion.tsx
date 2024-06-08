import type { NextPage } from "next";

export type FAQAccordionType = {
  className?: string;
  thisIsAQuestion?: string;
};

const FAQAccordion: NextPage<FAQAccordionType> = ({
  className = "",
  thisIsAQuestion,
}) => {
  return (
    <div
      className={`w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start text-left text-[1.125rem] text-black font-outfit-light-body-text-6 border-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
        <div className="relative">{thisIsAQuestion}</div>
        <img
          className="w-[1.5rem] relative h-[0.85rem] object-contain"
          alt=""
          src="/down.svg"
        />
      </div>
    </div>
  );
};

export default FAQAccordion;
