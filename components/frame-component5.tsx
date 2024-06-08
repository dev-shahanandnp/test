import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  className?: string;
  migrate?: string;
  yourWebsiteInJustAFewStep?: string;
  switchingHostingProviders?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  className = "",
  migrate,
  yourWebsiteInJustAFewStep,
  switchingHostingProviders,
  propColor,
  propColor1,
  propWidth,
}) => {
  const migrateStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const yourWebsiteInStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const switchingHostingProvidersStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`flex flex-col items-center justify-start text-left text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-[0.625rem]">
        <b className="relative">
          <span style={migrateStyle}>{migrate}</span>
          <span className="text-black" style={yourWebsiteInStyle}>
            {yourWebsiteInJustAFewStep}
          </span>
        </b>
      </div>
      <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem] text-grey-2">
        <div
          className="w-[67.25rem] relative font-light inline-block shrink-0"
          style={switchingHostingProvidersStyle}
        >
          {switchingHostingProviders}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
