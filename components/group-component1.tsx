import type { NextPage } from "next";
import FrameComponent5 from "./frame-component5";
import FrameComponent4 from "./frame-component4";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[682.463rem] left-[8.563rem] w-[72.875rem] h-[36.563rem] text-left text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-start gap-[3.125rem]">
        <div className="flex flex-col items-center justify-start gap-[3.125rem]">
          <FrameComponent5
            migrate="Migrate"
            yourWebsiteInJustAFewStep=" Your Website in Just a Few Steps"
            switchingHostingProviders="Switching hosting providers can be a lot of hassle. Let our expert Tech Support team do what they do best to provide a smooth professional website transfer. Moving your site over won't incur any downtime or data loss, and we'll assist you to review your migrated site prior to going live."
          />
          <div className="flex flex-col items-center justify-start text-center">
            <div className="flex flex-row items-center justify-center gap-[6.25rem]">
              <div className="flex flex-col items-center justify-start">
                <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                  <FrameComponent4
                    prop="01"
                    signUpForProtozoaHostAndC="Sign up for Protozoa Host and Contact Support"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[15.75rem] relative font-light flex items-center justify-center shrink-0">
                      Free migrations are available for all of Protozoa Host’s
                      plans. Provide all of the needed website details and
                      coordinate with our team.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="rounded-84xl bg-foundation-primary-blue-b50 flex flex-row items-center justify-center p-[0.625rem]">
                      <b className="relative">02</b>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                      <div className="w-[14.938rem] relative font-semibold flex items-center shrink-0">
                        <span className="w-full">
                          <p className="m-0">Choose Hosting Plan</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[15.75rem] relative font-light flex items-center justify-center shrink-0">
                      Simply choose your plan to get started. Our committed
                      migrations team will manage the process of transferring
                      your site.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-[1rem] text-grey-2">
                <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                  <FrameComponent4
                    prop="03"
                    signUpForProtozoaHostAndC="Post-Migration Assistance and Monitoring"
                    propWidth="unset"
                    propHeight="unset"
                    propWidth1="15.563rem"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[15.75rem] relative font-light flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">
                          Sit back and relax while our experts do the heavy
                          lifting for you. Verify your website prior to going
                          live.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.625rem] gap-[1.812rem] text-[0.875rem] text-color">
          <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
            <div className="relative font-medium whitespace-pre-wrap">
              Start Migration
            </div>
          </div>
          <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-primary border-[1px] border-solid border-primary">
            <div className="relative font-medium">Contact Sales</div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[16.313rem] left-[11.938rem] max-h-full w-[22.625rem]"
        alt=""
        src="/arrow-1.svg"
      />
      <img
        className="absolute top-[16.313rem] left-[38.313rem] max-h-full w-[22.625rem]"
        alt=""
        src="/arrow-1.svg"
      />
    </div>
  );
};

export default GroupComponent1;
