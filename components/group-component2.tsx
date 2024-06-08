import type { NextPage } from "next";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[994.338rem] left-[calc(50%_-_720px)] w-[90rem] h-[21.188rem] text-center text-[2rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[0rem] left-[calc(50%_-_720px)] w-[90rem] h-[21.188rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[21.188rem]" />
        <div className="absolute top-[4rem] left-[calc(50%_-_551px)] flex flex-col items-center justify-center gap-[0.625rem]">
          <div className="flex flex-row items-start justify-start p-[0.625rem]">
            <div className="relative font-semibold">NEW CUSTOMER?</div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
            <div className="w-[27.188rem] relative inline-block shrink-0">
              <p className="m-0">
                <span className="font-semibold font-outfit-light-body-text-6">
                  45% OFF
                </span>
                <span className="font-light"> on your order</span>
              </p>
              <p className="m-0">
                <span className="font-light">Use PROMOCODE “</span>
                <span className="font-semibold font-outfit-light-body-text-6">
                  PROTOMENEW
                </span>
                <span className="font-light font-outfit-light-body-text-6">
                  ”
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-[0.625rem] text-left text-[0.875rem] text-primary">
            <div className="w-[10.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
              <div className="relative font-medium">Get Started</div>
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="/-icon-diagonal-arrow-right-up-outline1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[4.688rem] left-[49.063rem] w-[15.625rem] h-[11.563rem] object-cover"
        alt=""
        src="/image-82@2x.png"
      />
      <img
        className="absolute top-[2.938rem] left-[69.125rem] w-[12.688rem] h-[15rem] object-cover"
        alt=""
        src="/image-83@2x.png"
      />
    </div>
  );
};

export default GroupComponent2;
