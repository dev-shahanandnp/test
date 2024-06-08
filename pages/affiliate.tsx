import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DomainDropdown from "../components/domain-dropdown";
import PortalPopup from "../components/portal-popup";
import HostingDropdown from "../components/hosting-dropdown";
import Reseller from "../components/reseller";
import ServersAndVPS from "../components/servers-and-v-p-s";
import CloudSolutions from "../components/cloud-solutions";
import Support from "../components/support";
import MyAccount from "../components/my-account";
import { useRouter } from "next/router";

const Affiliate: NextPage = () => {
  const [isDomainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const [isResellerOpen, setResellerOpen] = useState(false);
  const [isServersAndVPSOpen, setServersAndVPSOpen] = useState(false);
  const [isCloudSolutionsOpen, setCloudSolutionsOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = useState(false);
  const router = useRouter();

  const openDomainDropdown = useCallback(() => {
    setDomainDropdownOpen(true);
  }, []);

  const closeDomainDropdown = useCallback(() => {
    setDomainDropdownOpen(false);
  }, []);

  const openHostingDropdown = useCallback(() => {
    setHostingDropdownOpen(true);
  }, []);

  const closeHostingDropdown = useCallback(() => {
    setHostingDropdownOpen(false);
  }, []);

  const openReseller = useCallback(() => {
    setResellerOpen(true);
  }, []);

  const closeReseller = useCallback(() => {
    setResellerOpen(false);
  }, []);

  const openServersAndVPS = useCallback(() => {
    setServersAndVPSOpen(true);
  }, []);

  const closeServersAndVPS = useCallback(() => {
    setServersAndVPSOpen(false);
  }, []);

  const openCloudSolutions = useCallback(() => {
    setCloudSolutionsOpen(true);
  }, []);

  const closeCloudSolutions = useCallback(() => {
    setCloudSolutionsOpen(false);
  }, []);

  const openSupport = useCallback(() => {
    setSupportOpen(true);
  }, []);

  const closeSupport = useCallback(() => {
    setSupportOpen(false);
  }, []);

  const openMyAccount = useCallback(() => {
    setMyAccountOpen(true);
  }, []);

  const closeMyAccount = useCallback(() => {
    setMyAccountOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/affiliate-assests");
  }, [router]);

  return (
    <>
      <div className="w-full relative bg-color h-[275.063rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
        <div className="absolute top-[0rem] left-[calc(50%_-_720px)] flex flex-col items-center justify-start gap-[0.437rem] text-[0.75rem] text-primary">
          <div className="w-[90rem] bg-aliceblue box-border overflow-hidden flex flex-col items-start justify-start py-[0.187rem] px-[5.437rem] border-b-[1px] border-solid border-foundation-secondary-blue-b75">
            <div className="flex flex-row items-center justify-start gap-[23.125rem]">
              <div className="flex flex-row items-start justify-start gap-[1.625rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/calling-2.svg"
                  />
                  <div className="relative font-light">9851316413</div>
                </div>
                <div className="rounded-mini flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/envelope-1.svg"
                  />
                  <div className="relative font-light">
                    support@protozoahost.com
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/money-1-1.svg"
                  />
                  <div className="relative font-light">Affiliates</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/blog-1.svg"
                  />
                  <div className="relative font-light">Blogs</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/headset-1.svg"
                  />
                  <div className="relative font-light">Contact</div>
                </div>
                <div className="rounded-mini flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/infobutton-1.svg"
                  />
                  <div className="relative font-light">About Us</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[2.062rem]">
                <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/facebook-1-1.svg"
                  />
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/instagramlogo-1.svg"
                  />
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/twitter-1-1.svg"
                  />
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/linkedin-1-1.svg"
                  />
                </div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/-icon-menu.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[77.5rem] flex flex-row items-center justify-start gap-[17rem] text-[1rem]">
            <div className="flex flex-col items-start justify-start p-[0.518rem]">
              <img
                className="w-[5.275rem] relative h-[3.313rem] object-cover"
                alt=""
                src="/protozoahostlogo11e1695609575419-1@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[0.625rem]">
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openDomainDropdown}
              >
                <div className="relative font-medium">Domains</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openHostingDropdown}
              >
                <div className="relative font-medium">Hostings</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openReseller}
              >
                <div className="relative font-medium">Reseller</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openServersAndVPS}
              >
                <div className="relative font-medium">{`Server & VPS`}</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openCloudSolutions}
              >
                <div className="relative font-medium">Cloud Solutions</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openSupport}
              >
                <div className="relative font-medium">Support</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] cursor-pointer"
                onClick={openMyAccount}
              >
                <div className="relative font-medium">My Account</div>
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0.187rem]">
                  <div className="flex flex-col items-start justify-start">
                    <img
                      className="w-[0.563rem] relative h-[0.313rem]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[34.375rem]">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[34.375rem]" />
          <div className="absolute top-[3.375rem] left-[5.75rem] flex flex-row items-center justify-start gap-[19.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-col items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block">
                              <span>{`Join the `}</span>
                              <span className="text-primary">
                                Highest-Paying
                              </span>
                              <span>{` Web Hosting `}</span>
                              <span className="text-primary">
                                Affiliate Program
                              </span>
                              <span> in Nepal</span>
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-3">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                              Join our affiliate program to earn commissions on
                              each referred hosting account. Share your unique
                              affiliate link, and earn a referral fee for every
                              successful signup that stays active for 30 days.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem] text-[1rem] text-primary">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              500+ Active Affiliates
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.375rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              10000+ Referrals
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.375rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">{`Signup & Get & 500 Instant Bonus`}</div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.375rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              2.5 Lakh+ Paid
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[1.812rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">
                      Become an Affiliate
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-primary border-[1px] border-solid border-primary">
                    <div className="relative font-medium">
                      Already an Affiliate?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[24.75rem] relative h-[27.625rem] object-cover"
              alt=""
              src="/image-52@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[237.688rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem] text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color" />
          <div className="absolute h-[91.64%] w-full top-[4.18%] right-[0%] bottom-[4.18%] left-[0%] flex flex-col items-center justify-start gap-[2.5rem]">
            <div className="flex flex-col items-end justify-center gap-[2.562rem]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-center justify-start p-[0.625rem]">
                        <div className="relative font-semibold">Hostings</div>
                      </div>
                      <div className="flex flex-col items-start justify-center p-[0.625rem] gap-[1.125rem] text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          Domain Registration In Nepal
                        </div>
                        <div className="relative font-light">
                          Shared Hosting
                        </div>
                        <div className="relative font-light">
                          WordPress Hosting
                        </div>
                        <div className="relative font-light">VPS Hosting</div>
                        <div className="relative font-light">
                          Windows Hosting
                        </div>
                        <div className="relative font-light">
                          Reseller Hosting
                        </div>
                        <div className="relative font-light">
                          Nepal Based-Local Data Center Hosting
                        </div>
                      </div>
                    </div>
                    <div className="w-[14.5rem] flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start p-[0.625rem]">
                          <div className="w-[12.75rem] relative font-semibold flex items-center shrink-0">
                            Information
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center p-[0.625rem] gap-[1.125rem] text-[1rem] text-grey-2">
                          <div className="relative font-light">
                            Affiliate Program
                          </div>
                          <div className="relative font-light">{`Data Center & Servers`}</div>
                          <div className="relative font-light">
                            Payment Methods
                          </div>
                          <div className="relative font-light">
                            Server Status
                          </div>
                          <div className="relative font-light">
                            Free Website Migration
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[10rem] flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start p-[0.625rem]">
                          <div className="w-[12.75rem] relative font-semibold flex items-center shrink-0">
                            Company
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center p-[0.625rem] gap-[1.125rem] text-[1rem] text-grey-2">
                          <div className="relative font-light">About</div>
                          <div className="relative font-light">Affiliates</div>
                          <div className="relative font-light">Careers</div>
                          <div className="relative font-light">Partners</div>
                          <div className="relative font-light">Reviews</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[12.25rem] flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-center justify-start p-[0.625rem]">
                          <div className="w-[12.75rem] relative font-semibold flex items-center shrink-0">
                            Help
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center p-[0.625rem] gap-[1.125rem] text-[1rem] text-grey-2">
                          <div className="relative font-light">Tutorials</div>
                          <div className="relative font-light">
                            Knowledge Base
                          </div>
                          <div className="relative font-light">
                            Repost Abuse
                          </div>
                          <div className="relative font-light">Contact Us</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.5rem] gap-[2.687rem] ml-[-2.563rem] text-[0.875rem]">
                    <div className="w-[0.031rem] relative box-border h-[19.969rem] border-r-[0.5px] border-solid border-grey-3" />
                    <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative font-light whitespace-pre-wrap">
                          Questions? We’re here to help
                        </div>
                        <div className="relative font-light">
                          Available 9am–8pm CT, 7 days a week.
                        </div>
                      </div>
                      <div className="rounded-lg flex flex-col items-start justify-center py-[1.25rem] px-[0.75rem] gap-[0.875rem] border-[0.5px] border-solid border-grey-3">
                        <div className="w-[21.063rem] box-border flex flex-row items-center justify-start gap-[3.562rem] border-b-[0.5px] border-solid border-grey-2">
                          <div className="flex flex-row items-center justify-start">
                            <img
                              className="w-[3.813rem] relative h-[3.813rem] overflow-hidden shrink-0"
                              alt=""
                              src="/chat-223402-1.svg"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                                <div className="relative">
                                  Customer Support Chat
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-grey-3">
                                <div className="relative font-light">
                                  Messenger and Instagram
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[1.875rem] relative h-[1.875rem]"
                            alt=""
                            src="/-icon-arrow-ios-forward.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[1.75rem] border-b-[0.5px] border-solid border-grey-3">
                          <div className="flex flex-row items-center justify-start">
                            <img
                              className="w-[3.813rem] relative h-[3.813rem] overflow-hidden shrink-0"
                              alt=""
                              src="/email-3-1.svg"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                                <div className="relative">
                                  Customer Support Call
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-grey-3">
                                <div className="relative font-light">{`+9779851316413 `}</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[4.069rem] relative h-[1.875rem]"
                            alt=""
                            src="/-icon-arrow-ios-forward1.svg"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[1.75rem]">
                          <div className="flex flex-row items-center justify-start">
                            <img
                              className="w-[3.813rem] relative h-[3.813rem] overflow-hidden shrink-0"
                              alt=""
                              src="/email-4-1.svg"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                                <div className="relative">
                                  Customer Support Email
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-grey-3">
                                <div className="relative font-light">
                                  support@protozoahost.com
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[1.944rem] relative h-[1.875rem]"
                            alt=""
                            src="/-icon-arrow-ios-forward2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[2.375rem] flex flex-row items-center justify-start text-[0.875rem] text-grey-2">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[1.394rem] relative h-[1.563rem]"
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-light">
                    Your IP is Being Monitored for Security Purposes.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[1.062rem] text-[0.875rem] text-grey-2">
              <div className="w-[80rem] flex flex-row items-start justify-start gap-[14.562rem]">
                <div className="flex flex-row items-end justify-start gap-[0.625rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">About Us</div>
                  </div>
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <div className="w-[0.031rem] relative box-border h-[1.156rem] border-r-[0.5px] border-solid border-grey-2" />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">{`Cancellation & Refunds Policy`}</div>
                  </div>
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <div className="w-[0.031rem] relative box-border h-[1.156rem] border-r-[0.5px] border-solid border-grey-2" />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">
                      Terms and Conditions
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <div className="w-[0.031rem] relative box-border h-[1.156rem] border-r-[0.5px] border-solid border-grey-2" />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">Privacy Policy</div>
                  </div>
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <div className="w-[0.031rem] relative box-border h-[1.156rem] border-r-[0.5px] border-solid border-grey-2" />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">Legal</div>
                  </div>
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <div className="w-[0.031rem] relative box-border h-[1.156rem] border-r-[0.5px] border-solid border-grey-2" />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-light">Sitemap</div>
                  </div>
                </div>
                <div className="h-[2.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                  <div className="rounded-11xl bg-grey-2 flex flex-col items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                      alt=""
                      src="/facebook-1-11.svg"
                    />
                  </div>
                  <div className="rounded-11xl bg-grey-2 flex flex-col items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                      alt=""
                      src="/instagramlogo-11.svg"
                    />
                  </div>
                  <div className="rounded-11xl bg-grey-2 flex flex-col items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                      alt=""
                      src="/twitter-1-11.svg"
                    />
                  </div>
                  <div className="rounded-11xl bg-grey-2 flex flex-col items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                      alt=""
                      src="/linkedin-1-11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[90.013rem] relative box-border h-[0.013rem] border-t-[0.2px] border-solid border-grey-2" />
              <div className="w-[80rem] flex flex-row items-start justify-start gap-[32.25rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-light">
                    Copyright © 2018 - 2023 Protozoa Host Pvt. Ltd. | All Rights
                    Reserved.
                  </div>
                </div>
                <div className="w-[19.813rem] h-[2.375rem] flex flex-col items-center justify-center">
                  <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.312rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[179.625rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>{`Frequently Asked Questions - `}</span>
                <span className="text-primary">FAQs</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Find answers to frequently asked questions about our Affiliate
                Marketing
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem]">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What is the ProtozoaHost Affiliate Program and how can I earn
                  money with it?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  How much do I have to pay to join the affiliate program, and
                  how can I start earning money?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  Can I track my referrals and earnings, and how does it help me
                  maximize my earnings?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  Can I refer myself or my own accounts to earn commissions, or
                  is it against the rules?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  How does the ProtozoaHost Affiliate Program Work, and how can
                  I earn money through referrals?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What is your commission structure, and how much money can I
                  earn per successful referral?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What support is available for affiliates, and how can it help
                  me earn more money?
                </div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_277px)] top-[48.625rem] right-[8.625rem] left-[8.688rem] flex flex-col items-center justify-start gap-[3.125rem]">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">
              <span>{`Easy to `}</span>
              <span className="text-primary">Start.</span>
              <span>{` Easy to `}</span>
              <span className="text-primary">Earn.</span>
            </b>
          </div>
          <div className="flex flex-row items-start justify-center gap-[6.25rem] text-center text-primary">
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[3.938rem] rounded-84xl bg-foundation-primary-blue-b50 h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                    <b className="w-[2.5rem] relative flex items-center justify-center shrink-0">
                      01
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                    <div className="w-[14.938rem] relative font-semibold flex items-center justify-center shrink-0">
                      Sign Up
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[15.75rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        It takes less than 120 seconds to complete our online
                        signup formSign up now, earn money, and
                      </p>
                      <p className="m-0">enjoy an instant Rs. 500 bonus.</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[3.938rem] rounded-81xl bg-foundation-primary-blue-b50 h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                    <b className="relative">02</b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                    <div className="w-[14.938rem] relative font-semibold flex items-center justify-center shrink-0">
                      Promote
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[15.75rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">Use Affiliate Banners</p>
                      <p className="m-0">
                        Never be empty handed. Marketing materials in one place,
                        tailored to your style.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[3.938rem] rounded-81xl bg-foundation-primary-blue-b50 h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                    <b className="relative">03</b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                    <div className="w-[15.563rem] relative font-semibold flex items-center justify-center shrink-0">
                      Get Paid
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="flex-1 relative font-light">
                    Receive payments quickly and securely when you refer new
                    customers who stay with us for at least 60 days. Start
                    earning high-paying commissions on every sale you make!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[81.125rem] left-[calc(50%_-_623px)] w-[77.875rem] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
          <img
            className="w-[33.875rem] relative h-[24.563rem] object-cover"
            alt=""
            src="/image-49@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[1.562rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    Affiliate Assets
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Make an impact with our provided visuals and generate sale.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[1rem]"
              onClick={onFrameContainer1Click}
            >
              <div className="relative font-semibold">Check all assests</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[152.188rem] left-[calc(50%_-_622px)] flex flex-row items-start justify-start p-[0.625rem] gap-[1.375rem] text-center">
          <div className="rounded-9xs bg-color flex flex-col items-center justify-start py-[1.375rem] px-[3.75rem] gap-[2.5rem] border-[1px] border-solid border-foundation-primary-blue-b50">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">
                    <p className="m-0">24x7</p>
                    <p className="m-0 text-primary">Contact Support</p>
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
                <div className="w-[28.813rem] relative font-light flex items-center justify-center shrink-0">
                  Here at Protozoa Host, we are proud to offer free lifetime web
                  hosting renewals for our affiliates. Hosting your website with
                  us has never been easier or more worthwhile!
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-left text-[0.875rem] text-color">
              <div className="relative font-medium">Learn More</div>
            </div>
          </div>
          <div className="rounded-9xs bg-color flex flex-col items-center justify-start py-[1.375rem] px-[3.75rem] gap-[2.5rem] border-[1px] border-solid border-foundation-primary-blue-b50">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">
                    <p className="m-0">Ready to Make</p>
                    <p className="m-0 text-primary">Money?</p>
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
                <div className="w-[28.813rem] relative font-light flex items-center justify-center shrink-0">
                  Become part of the Protozoa Host family by clicking the "Join
                  Now" button! Our FAQ list covers any additional queries you
                  may have, or alternatively and get in touch
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-left text-[0.875rem] text-color">
              <div className="relative font-medium">Join Now</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[111.938rem] left-[calc(50%_-_597px)] flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="w-[34.938rem] relative flex items-center justify-center shrink-0">{`Need Even More Reasons to Join Our Web Hosting Affiliate Program? `}</b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.125rem] text-left text-[1.125rem]">
            <div className="w-[74.688rem] flex flex-row items-start justify-start p-[0.625rem] box-border gap-[5.625rem]">
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">Earn Money:</p>
                      <p className="m-0">Signup Now</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">{`Start Making Cash with ProtozoaHost's Refer & Earn Program Today, No Registration Fees!`}</div>
                </div>
              </div>
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">Instant Bonus</p>
                      <p className="m-0">Upon Sign-up</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                    <p className="m-0">
                      Join our web hosting affiliate program and receive a
                      immediate 500 bonus!
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">Unlock Lucrative</p>
                      <p className="m-0">Earnings</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                    Benefit from Best-in-Class Commissions, ranging from 10 to
                    10000 per referral, and Multiply Your Income with Every
                    Sale!
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[74.688rem] flex flex-row items-start justify-start p-[0.625rem] box-border gap-[5.625rem]">
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">24/7 Conversion</p>
                      <p className="m-0">Assistance</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                    Bring in potential customers, and our team handles the
                    conversion. You receive full commission on successful sales.
                  </div>
                </div>
              </div>
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">Simple Payout</p>
                      <p className="m-0">Process</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                    Receive your earnings directly into your bank account once
                    your balance hits 5000, hassle-free.
                  </div>
                </div>
              </div>
              <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[0.875rem] px-[1.25rem] border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start p-[0.625rem]">
                    <img
                      className="w-[2.875rem] relative h-[2.875rem] object-cover"
                      alt=""
                      src="/hp1-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">
                      <p className="m-0">Dynamic</p>
                      <p className="m-0">Banners</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                  <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                    Utilize eye-catching banners tailored to your requirements
                    to enhance conversion rates and elevate your affiliate
                    marketing efforts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDomainDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDomainDropdown}
        >
          <DomainDropdown onClose={closeDomainDropdown} />
        </PortalPopup>
      )}
      {isHostingDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHostingDropdown}
        >
          <HostingDropdown onClose={closeHostingDropdown} />
        </PortalPopup>
      )}
      {isResellerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReseller}
        >
          <Reseller onClose={closeReseller} />
        </PortalPopup>
      )}
      {isServersAndVPSOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeServersAndVPS}
        >
          <ServersAndVPS onClose={closeServersAndVPS} />
        </PortalPopup>
      )}
      {isCloudSolutionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCloudSolutions}
        >
          <CloudSolutions onClose={closeCloudSolutions} />
        </PortalPopup>
      )}
      {isSupportOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSupport}
        >
          <Support onClose={closeSupport} />
        </PortalPopup>
      )}
      {isMyAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMyAccount}
        >
          <MyAccount onClose={closeMyAccount} />
        </PortalPopup>
      )}
    </>
  );
};

export default Affiliate;
