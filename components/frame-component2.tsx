import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
  image62?: string;
  hostingerProvedItselfARel?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  image62,
  hostingerProvedItselfARel,
}) => {
  return (
    <div
      className={`rounded-9xs bg-color flex flex-col items-start justify-start py-[1rem] px-[0.812rem] text-left text-[1rem] text-grey-2 font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
        <img
          className="w-[2.875rem] relative h-[2.875rem] object-cover"
          alt=""
          src={image62}
        />
      </div>
      <div className="flex flex-row items-center justify-center p-[0.625rem]">
        <div className="w-[17.813rem] relative font-light inline-block shrink-0">
          {hostingerProvedItselfARel}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
