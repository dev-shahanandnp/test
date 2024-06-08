import type { NextPage } from "next";
import FrameComponent12 from "./frame-component12";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[781.213rem] left-[calc(50%_-_597px)] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-left text-[2rem] text-black font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[3.125rem]">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">
              <span>{`Customer Success `}</span>
              <span className="text-primary">Stories</span>
            </b>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
            <div className="w-[40rem] relative font-light inline-block shrink-0">
              Read the remarkable stories of individuals who turned their online
              dreams into reality and witnessed game-changing success with
              ProtozoaHost
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[4.375rem] text-[1.125rem] text-grey-2">
          <div className="w-[21.938rem] relative h-[21.688rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-[21.938rem] h-[21.688rem] border-[0.5px] border-solid border-grey" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[21.938rem] h-[10.938rem] object-cover"
              alt=""
              src="/rectangle-42@2x.png"
            />
            <FrameComponent12 />
          </div>
          <div className="w-[21.938rem] relative h-[21.688rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-[21.938rem] h-[21.688rem] border-[0.5px] border-solid border-grey" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[21.938rem] h-[10.938rem] object-cover"
              alt=""
              src="/rectangle-421@2x.png"
            />
            <FrameComponent12 />
          </div>
          <div className="w-[21.938rem] relative h-[21.688rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-[21.938rem] h-[21.688rem] border-[0.5px] border-solid border-grey" />
            <img
              className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[21.938rem] h-[10.938rem] object-cover"
              alt=""
              src="/rectangle-422@2x.png"
            />
            <FrameComponent12 />
          </div>
        </div>
      </div>
      <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-[0.875rem] text-primary border-[1px] border-solid border-primary">
        <div className="relative font-medium">Read More Stories</div>
      </div>
    </div>
  );
};

export default FrameComponent11;
