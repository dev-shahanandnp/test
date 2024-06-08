import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[825.775rem] left-[5.75rem] flex flex-col items-center justify-start gap-[3.125rem] text-center text-[2rem] text-black font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">
            <p className="m-0">{`Choose from the Most Popular `}</p>
            <p className="m-0">
              <span className="text-primary">Domain</span>
              <span> Extensions</span>
            </p>
          </b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[2.25rem] text-left text-[1.25rem] text-color">
        <div className="w-[32.375rem] relative h-[34.5rem]">
          <div className="absolute top-[0rem] left-[0rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[32.375rem] h-[34.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[32.375rem] h-[34.5rem]" />
            <div className="absolute top-[22.75rem] left-[1.563rem] flex flex-col items-start justify-start">
              <div className="w-[29.25rem] flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">Domains</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                  <div className="w-[28.125rem] relative font-light flex items-center shrink-0">
                    Get Started with the perfect domain, which comes with free
                    domain privacy protection forever.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                  <div className="relative font-medium">Search Domains</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[2.438rem] left-[2.188rem] w-[28.438rem] h-[18.625rem] object-cover"
            alt=""
            src="/layer-1-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[2.25rem]">
          <div className="w-[43.875rem] relative h-[16.125rem]">
            <div className="absolute top-[0rem] left-[0rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[43.875rem] h-[16.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[43.875rem] h-[16.125rem]" />
              <div className="absolute top-[2.813rem] left-[2rem] flex flex-col items-start justify-start">
                <div className="w-[29.25rem] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">SSL Certificates</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                    <div className="w-[19.188rem] relative font-light flex items-center shrink-0">{`Enhance your website's security and boost visitor confidence with our SSL Certificates. `}</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">
                      Get Premium SSL Certificates
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[1.125rem] left-[20.875rem] w-[20.313rem] h-[13.563rem] object-cover"
              alt=""
              src="/image-120@2x.png"
            />
          </div>
          <div className="w-[43.875rem] relative h-[16.125rem]">
            <div className="absolute top-[0rem] left-[0rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[43.875rem] h-[16.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[43.875rem] h-[16.125rem]" />
              <div className="absolute top-[3.25rem] left-[2rem] w-[18.875rem] flex flex-col items-start justify-start">
                <div className="w-[29.25rem] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Domain Transfer</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                    <div className="w-[19.188rem] relative font-light flex items-center shrink-0">
                      Looking to switch your domain provider? Transfer your
                      domain to us for a seamless experience.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Transfer Domain</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[0.875rem] left-[21.625rem] w-[19.5rem] h-[14.813rem] object-cover"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
