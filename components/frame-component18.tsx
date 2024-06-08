import type { NextPage } from "next";

export type FrameComponent18Type = {
  className?: string;
  asset0571?: string;
  freeMigration?: string;
};

const FrameComponent18: NextPage<FrameComponent18Type> = ({
  className = "",
  asset0571,
  freeMigration,
}) => {
  return (
    <div
      className={`w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[4.25rem] px-[0rem] text-center text-[1.25rem] text-primary font-outfit-light-body-text-6 border-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
    >
      <div className="w-[22.625rem] flex flex-col items-center justify-start">
        <img
          className="w-[5.438rem] relative h-[5.438rem] object-cover"
          alt=""
          src={asset0571}
        />
        <div className="w-[22.625rem] h-[5.313rem] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <div className="relative font-semibold">{freeMigration}</div>
          </div>
          <div className="w-[22.563rem] flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] box-border text-[0.875rem] text-grey-2">
            <div className="w-[22.625rem] relative font-light inline-block shrink-0">
              <p className="m-0">{`Fast, secure, and scalable hosting tailored for your `}</p>
              <p className="m-0">website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent18;
