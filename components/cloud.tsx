import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CloudType = {
  className?: string;
  image101?: string;
  cloudHosting?: string;
  getCloud?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTextAlign?: CSSProperties["textAlign"];
  propTextAlign1?: CSSProperties["textAlign"];
};

const Cloud: NextPage<CloudType> = ({
  className = "",
  image101,
  cloudHosting,
  getCloud,
  propLeft,
  propTextAlign,
  propTextAlign1,
}) => {
  const cloudStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const cloudHostingStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const getCloudStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div
      className={`absolute top-[0rem] left-[26.063rem] rounded-lg bg-color flex flex-col items-center justify-start py-[1.875rem] px-[1.25rem] gap-[0.625rem] text-center text-[1.25rem] text-black font-outfit-light-body-text-6 border-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
      style={cloudStyle}
    >
      <div className="flex flex-col items-center justify-start py-[0rem] px-[1.437rem]">
        <div className="flex flex-row items-center justify-start">
          <img
            className="w-[3.75rem] relative h-[3.75rem] object-cover"
            alt=""
            src={image101}
          />
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <div className="relative font-semibold" style={cloudHostingStyle}>
                {cloudHosting}
              </div>
            </div>
            <div className="relative text-[0.875rem] text-left">
              Starting From Only
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1.5rem]">
            <div className="relative font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Rs 1199.00/year
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[0.625rem]">
          <div className="relative font-medium">
            Save 30% Extra Using Promo "PROTO30"
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
          <div className="w-[18.188rem] relative font-light flex items-center justify-center shrink-0">
            Find Your Ideal Shared Hosting Plan: Customized, Cost-Effective,
            Starting from Rs 99.00/mo.
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-primary flex flex-col items-center justify-start text-[0.875rem] text-color">
        <div className="rounded-lg flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] gap-[0.625rem]">
          <div className="relative font-medium" style={getCloudStyle}>
            {getCloud}
          </div>
          <img
            className="w-[1rem] relative h-[1rem]"
            alt=""
            src="/-icon-diagonal-arrow-right-up-outline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cloud;
