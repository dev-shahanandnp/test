import type { NextPage } from "next";

export type FrameComponent19Type = {
  className?: string;
};

const FrameComponent19: NextPage<FrameComponent19Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[24.125rem] flex flex-row flex-wrap items-start justify-start gap-[1.062rem_1.5rem] text-left text-[0.75rem] text-grey-3 font-outfit-light-body-text-6 ${className}`}
    >
      <div className="w-[11.313rem] rounded-9xs box-border h-[2.375rem] flex flex-row items-center justify-start py-[0.625rem] pr-[6.75rem] pl-[0.625rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">First Name</div>
      </div>
      <div className="w-[11.313rem] rounded-9xs box-border h-[2.375rem] flex flex-row items-center justify-start py-[0.625rem] pr-[6.75rem] pl-[0.625rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">Last Name</div>
      </div>
      <div className="w-[24.125rem] rounded-9xs box-border h-[2.375rem] flex flex-row items-center justify-start py-[0.625rem] pr-[6.75rem] pl-[0.625rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">Enter your Phone Number</div>
      </div>
      <div className="w-[24.125rem] rounded-9xs box-border h-[2.375rem] flex flex-row items-center justify-start py-[0.625rem] pr-[6.75rem] pl-[0.625rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">Enter your Email Address</div>
      </div>
      <div className="w-[24.125rem] rounded-9xs box-border h-[2.375rem] flex flex-row items-center justify-start py-[0.625rem] pr-[6.75rem] pl-[0.625rem] gap-[17.187rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">Service Type</div>
        <img
          className="w-[0.625rem] relative rounded-12xs-5 h-[0.5rem] object-contain"
          alt=""
          src="/polygon-1.svg"
        />
      </div>
      <div className="w-[24.125rem] rounded-9xs box-border flex flex-row items-center justify-start pt-[0.625rem] pb-[7.312rem] pr-[6.75rem] pl-[0.625rem] border-[0.5px] border-solid border-foundation-primary-blue-b50">
        <div className="relative">Enter your requirements</div>
      </div>
    </div>
  );
};

export default FrameComponent19;
