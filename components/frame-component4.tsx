import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  prop?: string;
  signUpForProtozoaHostAndC?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  prop,
  signUpForProtozoaHostAndC,
  propWidth,
  propHeight,
  propWidth1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const signUpForStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`flex flex-col items-center justify-start text-center text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div
        className="w-[3.75rem] rounded-84xl bg-foundation-primary-blue-b50 h-[3.75rem] flex flex-row items-center justify-center p-[0.625rem] box-border"
        style={frameDiv2Style}
      >
        <b className="relative">{prop}</b>
      </div>
      <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
        <div
          className="w-[14.938rem] relative font-semibold flex items-center justify-center shrink-0"
          style={signUpForStyle}
        >
          {signUpForProtozoaHostAndC}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
