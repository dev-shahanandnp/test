import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Property1Default8Type = {
  className?: string;
  image107?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default8: NextPage<Property1Default8Type> = ({
  className = "",
  image107,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className={`rounded-lg bg-color box-border max-w-full flex flex-col items-center justify-start py-[30px] px-5 gap-[10px] text-center text-lg text-black font-outfit-light-body-text-6 border-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
      style={property1DefaultStyle}
    >
      <div className="flex flex-col items-center justify-start py-0 px-[23px]">
        <img
          className="w-[60px] relative h-[60px] object-cover"
          alt=""
          src={image107}
        />
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-2.5">
              <div className="relative font-semibold">
                Windows/ASP.NET Reseller Hosting
              </div>
            </div>
            <div className="relative text-sm text-left">Starting From Only</div>
          </div>
          <div className="flex flex-row items-center justify-center p-2.5 text-left text-5xl">
            <div className="relative font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Rs 1199.00/year
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-2.5 text-left text-3xs">
          <div className="relative font-medium">
            Save 30% Extra Using Promo "PROTO30"
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-2.5 text-sm">
          <div className="w-[291px] relative font-light flex items-center justify-center shrink-0">
            Find Your Ideal Shared Hosting Plan: Customized, Cost-Effective,
            Starting from Rs 99.00/mo.
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-primary flex flex-col items-center justify-start text-left text-sm text-color">
        <div className="rounded-lg flex flex-row items-center justify-center py-3.5 px-[37px] gap-[10px]">
          <div className="relative font-medium">Get Windows/ASP.NET</div>
          <img
            className="w-4 relative h-4"
            alt=""
            src="/-icon-diagonal-arrow-right-up-outline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default8;
