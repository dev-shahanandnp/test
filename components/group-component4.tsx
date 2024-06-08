import type { NextPage } from "next";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[444.65rem] left-[calc(50%_-_720px)] w-[90rem] h-[27.563rem] text-center text-[2rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[27.563rem]" />
      <div className="absolute top-[6.938rem] left-[12.375rem] flex flex-col items-center justify-start gap-[4.937rem]">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">
            <p className="m-0">One-Click installs so you can</p>
            <p className="m-0">build happy.</p>
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[4.312rem]">
          <img
            className="w-[12.125rem] relative h-[2.5rem] object-cover"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className="w-[7.188rem] relative h-[2.5rem] object-cover"
            alt=""
            src="/image-9@2x.png"
          />
          <img
            className="w-[11.875rem] relative h-[2.5rem] object-cover"
            alt=""
            src="/image-10@2x.png"
          />
          <img
            className="w-[9.5rem] relative h-[2.5rem] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <img
            className="w-[7.313rem] relative h-[2.5rem] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
