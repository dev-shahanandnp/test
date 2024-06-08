import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[876.525rem] left-[5.75rem] flex flex-col items-center justify-start gap-[3.125rem] text-center text-[2rem] text-black font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">
            <p className="m-0">Boost your team's productivity with</p>
            <p className="m-0">
              <span className="text-primary">{`Protozoa Host `}</span>
              <span>Email and Workspace Platforms</span>
            </p>
          </b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[2.25rem] text-left text-[1.25rem] text-color">
        <div className="flex flex-col items-start justify-start gap-[2.25rem]">
          <div className="w-[43.875rem] relative shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] h-[16.125rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[43.875rem] h-[16.125rem]" />
            <div className="absolute top-[2.125rem] left-[2rem] w-[18.875rem] flex flex-col items-start justify-start">
              <div className="w-[18.75rem] flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">Google Workspace</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                  <div className="w-[19.188rem] relative font-light flex items-center shrink-0">
                    Boost your team's productivity with Google Workspace.
                    Integrated tools like Gmail, Docs, and Drive ensure seamless
                    collaboration.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                  <div className="relative font-medium">Sell all Plans</div>
                </div>
              </div>
            </div>
            <div className="absolute top-[4.125rem] left-[23.125rem] flex flex-col items-center justify-start p-[0.625rem] gap-[0.625rem]">
              <div className="flex flex-col items-start justify-start pt-[0rem] px-[0.625rem] pb-[0.625rem]">
                <img
                  className="w-[15.438rem] relative h-[2.025rem] object-cover"
                  alt=""
                  src="/image-116@2x.png"
                />
              </div>
              <img
                className="w-[15.375rem] relative h-[2.25rem] object-cover"
                alt=""
                src="/image-115@2x.png"
              />
            </div>
          </div>
          <div className="w-[43.875rem] relative h-[16.125rem]">
            <div className="absolute top-[0rem] left-[0rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[43.875rem] h-[16.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[43.875rem] h-[16.125rem]" />
              <div className="absolute top-[2.188rem] left-[2rem] w-[18.875rem] flex flex-col items-start justify-start">
                <div className="w-[18.875rem] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Zoho Workplace</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                    <div className="w-[19.188rem] relative font-light flex items-center shrink-0">
                      Enhance your business with Zoho Workplace with suite of
                      web apps like Mail, Writer, Sheet, and more all integrated
                      into your domain.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Become Zoho</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[5.813rem] left-[23.125rem] w-[18.75rem] h-[4.813rem] object-cover"
              alt=""
              src="/image-114@2x.png"
            />
          </div>
        </div>
        <div className="w-[32.375rem] relative h-[34.5rem]">
          <div className="absolute top-[0rem] left-[0rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[32.375rem] h-[34.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[32.375rem] h-[34.5rem]" />
            <div className="absolute top-[22.75rem] left-[1.563rem] flex flex-col items-start justify-start">
              <div className="w-[29.25rem] flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">
                    Microsoft Office 365
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                  <div className="w-[28.125rem] relative font-light flex items-center shrink-0">
                    Instantly access domain ownership and registration details
                    with Microsoft Office 365 integration.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem]">
                <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                  <div className="relative font-medium">Buy Office 365</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[2.438rem] left-[2.188rem] w-[28.438rem] h-[18.625rem]" />
          <img
            className="absolute top-[6.125rem] left-[4.25rem] w-[23.875rem] h-[12.625rem] object-cover"
            alt=""
            src="/image-117@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
