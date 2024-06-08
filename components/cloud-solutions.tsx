import type { NextPage } from "next";

export type CloudSolutionsType = {
  className?: string;
};

const CloudSolutions: NextPage<CloudSolutionsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[90rem] relative shadow-[0px_60px_100px_rgba(0,_0,_0,_0.15)] bg-color box-border h-[32.813rem] max-w-full max-h-full overflow-auto text-left text-[1.25rem] text-black font-outfit-light-body-text-6 border-t-[1px] border-solid border-foundation-primary-blue-b50 ${className}`}
    >
      <div className="absolute top-[1.375rem] left-[4.875rem] flex flex-row items-start justify-start gap-[1.875rem]">
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[0.625rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <div className="relative font-medium">Workspace Solutions</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
              <div className="flex flex-row items-start justify-start">
                <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                  <img
                    className="w-[1.313rem] relative h-[1.313rem] object-cover"
                    alt=""
                    src="/image-284@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Google Workspace</div>
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
                    src="/image-285@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative">Zoho Workplace</div>
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
                    src="/image-286@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative"> Microsoft Office 365</div>
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
            <div className="relative font-medium">Cloud Services</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-287@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">Google Cloud Console</div>
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
                  src="/image-288@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">AWS Services</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] mt-[-1rem] text-[0.75rem] text-grey-3">
                  <div className="w-[14.813rem] relative font-light flex items-center shrink-0">
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.625rem]">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <div className="relative font-medium">Email Solutions</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1.125rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-[2.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border">
                <img
                  className="w-[1.313rem] relative h-[1.313rem] object-cover"
                  alt=""
                  src="/image-289@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">Zoho Mail</div>
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
                  src="/image-2810@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">G Suite Email</div>
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
                  src="/image-2811@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative">OX Mail</div>
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
        <div className="flex flex-col items-start justify-start text-[1.125rem]">
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
                      Get 25% OFF on Google Workspace
                    </div>
                    <div className="w-[13.938rem] relative text-[0.75rem] font-light flex items-center">
                      Tap into time-saving apps that help you stay on top of
                      your calendar, collaborate on files, update your status
                      and more.
                    </div>
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

export default CloudSolutions;
