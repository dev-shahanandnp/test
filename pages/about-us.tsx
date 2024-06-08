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

const AboutUs: NextPage = () => {
  const [isDomainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const [isResellerOpen, setResellerOpen] = useState(false);
  const [isServersAndVPSOpen, setServersAndVPSOpen] = useState(false);
  const [isCloudSolutionsOpen, setCloudSolutionsOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = useState(false);

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

  return (
    <>
      <div className="w-full relative bg-color h-[304.563rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
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
        <div className="absolute top-[267.188rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem] text-primary">
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
        <div className="absolute top-[13.25rem] left-[5.625rem] flex flex-row items-start justify-start gap-[10.062rem]">
          <div className="flex flex-col items-start justify-start gap-[2.187rem]">
            <div className="flex flex-col items-start justify-start gap-[0.812rem]">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">
                  <span>{`Our Architectural `}</span>
                  <span className="text-primary">Journey</span>
                </b>
              </div>
              <div className="flex flex-col items-start justify-start text-[1rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">
                    The Story Behind Name Protozoa Host
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="w-[29.75rem] relative font-light flex items-center shrink-0">
                    At Protozoa Host, our name reflects our spirit. Just like
                    the tiny protozoan that thrives in harsh environments, we're
                    here to endure and flourish. We chose this name because it
                    symbolizes our commitment to resilience and longevity. While
                    others may fade away, we're dedicated to staying the course,
                    navigating challenges, and continuing on our journey with
                    unwavering determination.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-center text-[1.125rem]">
              <div className="flex flex-row items-start justify-start gap-[6.125rem]">
                <div className="rounded-9xs flex flex-col items-start justify-start py-[0.625rem] px-[1.25rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[3.938rem] rounded-84xl h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/image-58@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">2018</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="relative font-light">Established</div>
                  </div>
                </div>
                <div className="rounded-9xs flex flex-col items-start justify-start py-[0.625rem] px-[1.25rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[3.938rem] rounded-84xl h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/image-58@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">2000+</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="relative font-light">Client's Trust</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[5.687rem]">
                <div className="rounded-9xs flex flex-col items-start justify-start py-[0.625rem] px-[1.25rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[3.938rem] rounded-84xl h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/image-58@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">5000+</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="relative font-light">Sites Hosted</div>
                  </div>
                </div>
                <div className="rounded-9xs flex flex-col items-start justify-start py-[0.625rem] px-[1.25rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[3.938rem] rounded-84xl h-[3.938rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                      <img
                        className="w-[3rem] relative h-[3rem] object-cover"
                        alt=""
                        src="/image-58@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">100+</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="relative font-light">
                      Private Corporate Partnership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[36.25rem] relative rounded-9xs bg-gainsboro h-[38.75rem]" />
        </div>
        <div className="absolute top-[132.125rem] left-[calc(50%_-_627px)] flex flex-col items-center justify-start gap-[3.312rem] text-center">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">
              <p className="m-0">What makes Protozoa Host The</p>
              <p className="m-0">
                <span className="text-primary">#1</span>
                <span> Choice for </span>
                <span className="text-primary">You</span>
                <span className="text-black">!</span>
              </p>
            </b>
          </div>
          <div className="w-[78.438rem] flex flex-row flex-wrap items-start justify-start gap-[3.062rem_6.312rem] text-[1.125rem]">
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Priority Support</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    Protozoa Host Priority Support ensures swift, personalized
                    assistance for seamless hosting, prioritizing speedy
                    resolutions for uninterrupted online presence.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Light-Speed Web Server</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    Elevate your website speed with Nest Nepal's Light-Speed Web
                    Server. Enjoy rapid performance and enhanced user experience
                    for a seamless online presence.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Free SSL Certificate</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        Secure your website with Nest Nepal's Free SSL
                        Certificate. Enhance online security effortlessly, at no
                        extra cost.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Scalable Solutions</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    Whether you're a small startup or a large enterprise, our
                    hosting solutions would be scalable to accommodate your
                    growing.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Competitive Pricing</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        While offering premium hosting services, I would strive
                        to maintain competitive pricing to provide value for
                        money.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-color flex flex-row items-center justify-start py-[1.25rem] px-[1.875rem] border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                <img
                  className="w-[3.75rem] relative h-[3.75rem] object-cover"
                  alt=""
                  src="/image-59@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Daily Backup</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1rem] text-grey-2">
                  <div className="w-[26.063rem] relative font-light flex items-center shrink-0">
                    Ensure peace of mind with Nest Nepal's Daily Backup.
                    Safeguard your data effortlessly with our automatic daily
                    backup service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[184.625rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">What Makes Us Stand Out From Others?</b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Bridging Worlds with Personalized Hosting - Wherever You Are
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem]">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What is ProtozoaHost and its mission?
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
                  Can you provide a brief history of ProtozoaHost?
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
                  How extensive is ProtozoaHost's client base?
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
                  What type of websites does ProtozoaHost host, and how many?
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
                  What distinguishes ProtozoaHost as the leading web hosting
                  provider in Nepal?
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
                  How does ProtozoaHost ensure round-the-clock support?
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
                  Why is ProtozoaHost exclusive to Nepal, and what benefits does
                  this offer?
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
                  Can you elaborate on ProtozoaHost's pioneering use of payment
                  gateways for automation?
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
                  How does ProtozoaHost accommodate websites with high traffic?
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
                  Does ProtozoaHost operate in countries outside of Nepal under
                  different brand names?
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
                  Is it true that the CEO of ProtozoaHost also serves as the
                  head of customer support?
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
        <div className="absolute top-[58.25rem] left-[calc(50%_-_720px)] w-[90rem] h-[67.625rem] text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[90rem] h-[67.625rem]" />
          <div className="absolute top-[37.125rem] left-[calc(50%_-_615px)] flex flex-row items-center justify-center gap-[5.687rem]">
            <img
              className="w-[26.075rem] relative h-[19.881rem]"
              alt=""
              src="/group-36.svg"
            />
            <div className="flex flex-col items-end justify-start">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">Our Vision</b>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                <div className="w-[43.813rem] relative font-light flex items-center shrink-0">
                  ProtozoaHost envisions a digital landscape where everyone can
                  flourish online. Our goal is to be the leading provider of web
                  hosting solutions, empowering clients to achieve their digital
                  aspirations. We aim to make reliable and affordable web
                  hosting effortless, enabling businesses to thrive and
                  individuals to express themselves freely. Innovation,
                  integrity, and a customer-centric approach are at the core of
                  our operations.
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[6.813rem] left-[calc(50%_-_571px)] flex flex-row items-center justify-center gap-[2.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">Our Mission</b>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                <div className="w-[41.625rem] relative font-light flex items-center shrink-0">
                  At ProtozoaHost, our mission is to empower individuals and
                  businesses to thrive online by offering reliable, affordable,
                  and innovative web hosting solutions. We are dedicated to
                  customer satisfaction and technological excellence, aiming to
                  be the catalyst for our customers' digital success. Join us in
                  elevating your online presence and unlocking new possibilities
                  together.
                </div>
              </div>
            </div>
            <img
              className="w-[26rem] relative h-[21.875rem]"
              alt=""
              src="/group-35.svg"
            />
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

export default AboutUs;
