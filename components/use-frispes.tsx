import type { NextPage } from "next";

export type UseFrispesType = {
  className?: string;
};

const UseFrispes: NextPage<UseFrispesType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[60.938rem] left-[calc(50%_-_588px)] overflow-hidden flex flex-col items-center justify-start gap-[0.937rem] text-center text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[0.625rem]">
        <b className="relative">
          <span>{`Trusted By `}</span>
          <span className="text-black">Leading Brands</span>
        </b>
        <div className="relative text-[1.125rem] font-light text-grey-2">
          Trusted by Big brands, small bussiness, new startup and inividuals
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[3.75rem]">
        <img
          className="w-[7.5rem] relative h-[2.481rem] overflow-hidden shrink-0"
          alt=""
          src="/logo.svg"
        />
        <img
          className="w-[11.25rem] relative h-[2.413rem] overflow-hidden shrink-0"
          alt=""
          src="/logo1.svg"
        />
        <img
          className="w-[7.5rem] relative h-[2.188rem] overflow-hidden shrink-0"
          alt=""
          src="/logo2.svg"
        />
        <img
          className="w-[10.625rem] relative h-[2.269rem] overflow-hidden shrink-0"
          alt=""
          src="/logo3.svg"
        />
        <img
          className="w-[9.106rem] relative h-[2.856rem] overflow-hidden shrink-0"
          alt=""
          src="/logo4.svg"
        />
        <img
          className="w-[8.738rem] relative h-[4.163rem] overflow-hidden shrink-0"
          alt=""
          src="/logo5.svg"
        />
      </div>
    </div>
  );
};

export default UseFrispes;
