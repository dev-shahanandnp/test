import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[639.963rem] left-[0rem] w-[90rem] h-[7.75rem] text-left text-[2rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[90rem] h-[7.75rem]" />
      <div className="absolute top-[1.813rem] left-[calc(50%_-_378px)] flex flex-row items-start justify-start gap-[5.75rem]">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-col items-center justify-center p-[0.625rem]">
            <b className="relative">1.4M+</b>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
            <div className="relative font-light">
              <p className="m-0">Request Per</p>
              <p className="m-0">Second</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-col items-center justify-center p-[0.625rem]">
            <b className="relative">5+</b>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
            <div className="relative font-light">
              <p className="m-0">Data Centers</p>
              <p className="m-0">around the world</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-col items-center justify-center p-[0.625rem]">
            <b className="relative">1</b>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
            <div className="relative font-light">
              <p className="m-0">Local Data</p>
              <p className="m-0">Center in Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
