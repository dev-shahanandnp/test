import type { NextPage } from "next";

export type HostingDropdownType = {
  className?: string;
};

const HostingDropdown: NextPage<HostingDropdownType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[90rem] relative shadow-[0px_60px_100px_rgba(0,_0,_0,_0.15)] bg-color box-border h-[32.813rem] overflow-hidden max-w-full max-h-full text-left text-[1.25rem] text-black font-outfit-light-body-text-6 border-t-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
    >
      <div className="absolute top-[1.375rem] left-[calc(50%_-_645px)] flex flex-row items-start justify-start gap-[1.875rem]">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[0.625rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <div className="relative font-medium">Shared Hosting</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.625rem] relative h-[1.688rem] object-cover"
                    alt=""
                    src="/database-1@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Web Hosting</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2819@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Combo cPanel Hosting</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2821@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Cloud cPanel Hosting</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2822@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Business cPanel Hosting</div>
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
            <div className="w-[12rem] h-[2.813rem]" />
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2823@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">{`Python & Django Hosting`}</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2824@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative"> Node.JS cPanel Hosting</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                    <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-2825@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Tomcat cPanel Hosting</div>
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
        <div className="flex flex-col items-start justify-start gap-[0.625rem]">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <div className="relative font-medium">Windows Hosting</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-2826@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">Windows Plesk MSSQL 2019</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-2827@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">PowerMax Windows MSSQL 2022</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-2828@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">Nepali Windows Plesk Hosting</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Instantly Access Domain Ownership and Registration Details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.625rem]">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <div className="relative font-medium">WordPress Hosting</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-2829@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative whitespace-pre-wrap">
                    WordPress Hosting
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/reseller-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">WPSquared Pro Hosting</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-2820@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">Nepali WordPress Hosting</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Instantly Access Domain Ownership and Registration Details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingDropdown;
