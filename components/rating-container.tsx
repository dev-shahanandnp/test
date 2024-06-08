import type { NextPage } from "next";

export type RatingContainerType = {
  className?: string;
};

const RatingContainer: NextPage<RatingContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[1.125rem] text-left text-[0.875rem] text-black font-outfit-light-body-text-6 ${className}`}
    >
      <img
        className="w-[6.938rem] relative h-[3.938rem] object-cover"
        alt=""
        src="/image-26@2x.png"
      />
      <div className="flex flex-row items-center justify-center p-[0.625rem]">
        <div className="relative">
          <span>4.5</span>
          <span className="font-light text-grey-2">/5</span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.375rem] text-[0.625rem] text-grey-2">
        <div className="flex flex-row items-start justify-start gap-[0.137rem]">
          <img
            className="w-[1.113rem] relative h-[1.113rem]"
            alt=""
            src="/vector5.svg"
          />
          <img
            className="w-[1.113rem] relative h-[1.113rem]"
            alt=""
            src="/vector6.svg"
          />
          <img
            className="w-[1.113rem] relative h-[1.113rem]"
            alt=""
            src="/vector7.svg"
          />
          <img
            className="w-[1.113rem] relative h-[1.113rem]"
            alt=""
            src="/vector8.svg"
          />
          <img
            className="w-[1.113rem] relative h-[1.113rem]"
            alt=""
            src="/vector9.svg"
          />
        </div>
        <div className="w-[6.625rem] relative font-light inline-block h-[0.813rem] shrink-0">
          <span>{`Based on `}</span>
          <span className="text-royalblue">448 Reviews</span>
        </div>
      </div>
      <img className="w-[0rem] relative h-[3.938rem]" alt="" />
    </div>
  );
};

export default RatingContainer;
