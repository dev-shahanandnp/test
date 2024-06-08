import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[9.437rem] text-left text-[2rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <img
        className="w-[30.625rem] relative h-[29.75rem] object-cover"
        alt=""
        src="/image-69transformed-1@2x.png"
      />
      <div className="flex flex-col items-start justify-start gap-[0.812rem]">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="w-[17.625rem] relative font-semibold inline-block shrink-0">
            Advanced Security Features
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[1.625rem] text-[1.125rem]">
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className="w-[31.625rem] relative font-light inline-block shrink-0">
              Get unlimited SSL security certificates to encrypt your websites’
              traffic.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className="w-[31.625rem] relative font-light inline-block shrink-0">
              Protect your website from DDoS attacks with Cloudflare protected
              nameservers.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className="w-[31.625rem] relative font-light inline-block shrink-0">
              Secure your files with automatic backups.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.687rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/mdicheckbold1.svg"
            />
            <div className="w-[31.625rem] relative font-light inline-block shrink-0">
              Ensure your website is up and running with our 99.9% uptime
              guarantee.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
