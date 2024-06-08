import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start p-[0.625rem] gap-[3.375rem] text-left text-[1rem] text-grey-2 font-outfit-light-body-text-6 ${className}`}
    >
      <FrameComponent2
        image62="/image-62@2x.png"
        hostingerProvedItselfARel="Hostinger proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period."
      />
      <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[1rem] px-[0.812rem]">
        <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
          <img
            className="w-[2.875rem] relative h-[2.875rem] object-cover"
            alt=""
            src="/image-63@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="w-[17.813rem] relative font-light inline-block shrink-0">
            <p className="m-0">
              Plans include SSL certificates and all servers have an advanced
              security module to protect your data.
            </p>
          </div>
        </div>
      </div>
      <FrameComponent2
        image62="/image-64@2x.png"
        hostingerProvedItselfARel="With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured."
      />
    </div>
  );
};

export default FrameComponent1;
