import type { NextPage } from "next";

export type FrameComponent15Type = {
  className?: string;
  cPanel?: string;
  easyToUseControlPanelForM?: string;
};

const FrameComponent15: NextPage<FrameComponent15Type> = ({
  className = "",
  cPanel,
  easyToUseControlPanelForM,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-[1.25rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-[0.625rem]">
        <b className="relative">{cPanel}</b>
      </div>
      <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
        <div className="w-[22.375rem] relative font-light flex items-center shrink-0">
          {easyToUseControlPanelForM}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;
