import type { NextPage } from "next";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[11.625rem] left-[0.75rem] w-[20.313rem] flex flex-col items-start justify-start text-left text-[1.125rem] text-grey-2 font-outfit-light-body-text-6 ${className}`}
    >
      <div className="w-[20.313rem] flex flex-row items-center justify-center py-[0.787rem] pr-[0.787rem] pl-[0rem] box-border">
        <div className="w-[17.75rem] relative font-light inline-block shrink-0">
          Search Minds Acheives 10x Business Boost: Thanks to ProtozoaHost
          Premium Hosting
        </div>
      </div>
      <div className="w-[20.313rem] flex flex-row items-center justify-center py-[0.787rem] pr-[0.787rem] pl-[0rem] box-border gap-[11.312rem] text-[0.875rem] text-primary">
        <div className="relative font-medium">Read more</div>
        <img
          className="w-[1.413rem] relative h-[1.413rem] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/basilarrowupoutline@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;
