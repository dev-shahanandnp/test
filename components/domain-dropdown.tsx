import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type DomainDropdownType = {
  className?: string;
};

const DomainDropdown: NextPage<DomainDropdownType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/domain-registration");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/transfer-your-domain");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/np-domain");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/domain-registration");
  }, [router]);

  const onFrameContainer12Click = useCallback(() => {
    router.push("/domain-registration");
  }, [router]);

  const onFrameContainer22Click = useCallback(() => {
    router.push("/s-s-l-checker");
  }, [router]);

  return (
    <div
      className={`w-[90rem] relative shadow-[0px_60px_100px_rgba(0,_0,_0,_0.15)] bg-color box-border h-[32.813rem] max-w-full max-h-full overflow-auto text-left text-[1.125rem] text-black font-outfit-light-body-text-6 border-t-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
    >
      <div className="absolute top-[1.375rem] left-[4.875rem] flex flex-row items-start justify-start text-[1.25rem]">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[0.625rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <div className="relative font-medium">Domain Registration</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainerClick}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2830@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Search Your Domain</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainer1Click}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2831@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Transfer Your Domain</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainer2Click}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2832@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">.np Free Domain</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-[1.125rem]">
            <div className="w-[12.75rem] h-[2.813rem]" />
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainer3Click}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2830@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">SSL Certificates</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainer12Click}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2830@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">SSL Checker</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer"
                onClick={onFrameContainer22Click}
              >
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2832@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">WHOis lookup</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1.375rem] left-[70.688rem] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                      <img
                        className="w-[1.313rem] relative h-[1.313rem] object-cover"
                        alt=""
                        src="/image-283@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative">AI Logo Maker</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
                  <div className="w-[11.188rem] relative font-medium flex items-center">
                    Build a Logo with AI Instantly
                  </div>
                  <div className="w-[13.938rem] relative text-[0.75rem] font-light flex items-center">
                    Your one-stop solution for professional logo design. Try it
                    for free-no sign up needed!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-primary">
          <div className="w-[10.875rem] rounded-lg bg-color box-border flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] gap-[0.625rem] border-[1px] border-solid border-primary">
            <div className="relative font-medium">Build a logo now</div>
            <img
              className="w-[1rem] relative h-[1rem]"
              alt=""
              src="/-icon-diagonal-arrow-right-up-outline2.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1.375rem] left-[48.813rem] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                      <img
                        className="w-[1.313rem] relative h-[1.313rem] object-cover"
                        alt=""
                        src="/image-283@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative">Featured</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
                  <div className="w-[13.938rem] relative font-medium flex items-center">
                    Choose a Best Name for your Business.
                  </div>
                  <div className="w-[13.938rem] relative text-[0.75rem] font-light flex items-center">{`Register your Domain at Nepal’s No.1 Domain Registrar & Get your Business online Today with our Web Hosting Plans.`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainDropdown;
