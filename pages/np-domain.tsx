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

const NpDomain: NextPage = () => {
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
      <div className="w-full relative bg-color h-[367.75rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
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
        <div className="absolute top-[330.375rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem] text-primary">
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
        <div className="absolute top-[247.813rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">Frequently Asked Queries</b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                We have tried to cover the frequently asked questions about
                registering free .np domain by many webmasters.
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
        <div className="absolute top-[141rem] left-[calc(50%_-_720px)] w-[90rem] h-[21.313rem] text-center text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[21.313rem]" />
          <div className="absolute top-[4.75rem] left-[calc(50%_-_423.5px)] flex flex-col items-center justify-center gap-[0.625rem]">
            <div className="flex flex-row items-start justify-start p-[0.625rem]">
              <b className="w-[48.625rem] relative inline-block shrink-0">
                Want to go for .com instead .com.np?
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
              <div className="w-[51.688rem] relative font-light inline-block shrink-0">
                With the right domain name, your target audience will find you.
                You will have a unique online presence and a distinct identity
                in a market that continues to grow.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-left text-[0.875rem] text-primary">
              <div className="w-[14.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                <div className="relative font-medium">Register Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[36.313rem]">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[36.313rem]" />
          <div className="absolute top-[8.125rem] left-[5.75rem] flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block shrink-0">
                              Free .np Domain Registration
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                              Request free com.np domain registration in Nepal,
                              check the below steps
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
                              No Renewal Charge
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.125rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Lifetime Holding
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.125rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Nepal based extension
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.125rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Boost trust score
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.125rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Availability high for desired name
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50.563rem] left-[calc(50%_-_619px)] flex flex-col items-center justify-start gap-[6.187rem]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>Generate cover letter for </span>
                <span className="text-primary">.com.np</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem] text-grey-2">
              <div className="w-[42.125rem] relative font-light flex items-center justify-center shrink-0">
                For the domain registration, you need to submit a Cover letter.
                Not sure how to write a cover letter? Get .np Domain
                Registration Request Cover Letter now.
              </div>
            </div>
          </div>
          <div className="w-[77.375rem] relative h-[70.125rem] text-[1rem]">
            <div className="absolute top-[0rem] left-[31.188rem] w-[46.188rem] h-[70.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-color box-border w-[46.188rem] h-[70.125rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
              <div className="absolute top-[6.75rem] left-[33.25rem] flex flex-row items-center justify-center p-[0.625rem]">
                <div className="relative font-medium">Date : 31 May 2024</div>
              </div>
              <div className="absolute top-[11.25rem] left-[3.938rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">To,</div>
                <div className="relative font-medium">The Hostmaster,</div>
                <div className="relative font-medium">
                  Mercantile Communication Pvt. Ltd.
                </div>
                <div className="relative font-medium">
                  Durbar Marg,Kathmandu
                </div>
              </div>
              <div className="absolute top-[44.625rem] left-[3.938rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">Domain name:</div>
                <div className="relative font-medium">
                  Primary Name Server : ns101.prabhuhost.com
                </div>
                <div className="relative font-medium">
                  Secondary Name Server: ns102.prabhuhost.com
                </div>
              </div>
              <div className="absolute top-[53.75rem] left-[3.938rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">Sincerely,</div>
                <div className="relative font-medium">Name:</div>
                <div className="relative font-medium">Address:</div>
              </div>
              <div className="absolute top-[28rem] left-[3.938rem] flex flex-col items-start justify-start p-[0.625rem]">
                <div className="relative font-medium">Dear Sir/Madam,</div>
              </div>
              <div className="absolute top-[33.375rem] left-[3.938rem] flex flex-col items-start justify-start p-[0.625rem]">
                <div className="w-[35.188rem] relative font-light inline-block">
                  <p className="m-0">
                    I am writing this letter to request you to kindly register
                    a yourdomain.np domain for me based on my name. I have
                    provided my personal details, and also attached a scanned
                    copy of my citizenship with this letter.I would be very glad
                    if you approve my domain registration request.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Thank you very much for consideration. I look forward to
                    hearing from you soon.
                  </p>
                </div>
              </div>
              <div className="absolute top-[23.563rem] left-[15.25rem] flex flex-row items-center justify-center p-[0.625rem]">
                <div className="relative font-medium">
                  Subject: NP Domain Registration
                </div>
              </div>
            </div>
            <div className="absolute top-[5.563rem] left-[0rem] flex flex-col items-start justify-start gap-[0.937rem]">
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">Purpose</div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">Domain Name</div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">
                    Primary Name Server
                  </div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">
                    Secondary Name Server
                  </div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">Name</div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
              <div className="flex flex-col items-start justify-start relative">
                <div className="flex flex-row items-center justify-center p-[0.625rem] z-[0]">
                  <div className="relative font-medium">Address</div>
                </div>
                <div className="w-[23.75rem] relative rounded-9xs box-border h-[2.375rem] z-[1] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="w-[3.875rem] absolute !m-[0] top-[3.063rem] left-[0.625rem] font-light inline-block z-[2]">
                  Personal
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[168.563rem] left-[5.813rem] flex flex-col items-center justify-start gap-[3.187rem]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">Official .NP domains Extensions</b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.25rem]">
              <div className="w-[47.375rem] relative font-light inline-block shrink-0">
                A country code top-level domain (ccTLD) is an Internet top-level
                domain designated for a country, a sovereign state, or a
                dependent territory.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-[1rem]">
            <div className="w-[78.438rem] rounded-t-lg rounded-b-none [background:linear-gradient(89.24deg,_#1354b5,_#120086)] overflow-hidden flex flex-col items-start justify-start py-[2.75rem] px-[4.25rem] box-border text-center text-[1.375rem] text-color">
              <div className="flex flex-row items-center justify-start gap-[3.875rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="relative">
                      Get 20% Extra Discount for .np Hosting
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1.25rem]">
                    <div className="w-[50.75rem] relative font-light inline-block shrink-0">
                      You can choose the fastest cloud hosting plan for your
                      business, blog, or website, no matter what type of
                      business you run.
                    </div>
                  </div>
                </div>
                <div className="w-[10.813rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-left text-[0.875rem] text-primary">
                  <div className="relative font-medium">Order Hosting</div>
                </div>
              </div>
            </div>
            <div className="w-[78.438rem] relative h-[3.5rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-foundation-primary-blue-b50 box-border w-[78.438rem] h-[3.5rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
              <div className="absolute top-[0.375rem] left-[2.813rem] w-[57.625rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">CCTlD</div>
                </div>
                <div className="absolute top-[0rem] left-[8.688rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">COST/RENEWAL</div>
                </div>
                <div className="absolute top-[0rem] left-[21.688rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">PURPOSE</div>
                </div>
                <div className="absolute top-[0rem] left-[53.125rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium">NOTES</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[78.438rem] relative h-[9.063rem]">
                <div className="absolute top-[0rem] left-[0rem] box-border w-[78.438rem] h-[9.063rem] border-r-[1px] border-solid border-foundation-primary-blue-b50 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[2.625rem] left-[2.438rem] w-[74.688rem] h-[3.75rem]">
                  <div className="absolute top-[0.625rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">.com.np</div>
                  </div>
                  <div className="absolute top-[0.625rem] left-[21.563rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Commercial</div>
                  </div>
                  <div className="absolute top-[1.313rem] left-[10.625rem] rounded-18xl bg-primary flex flex-row items-center justify-center py-[0.125rem] px-[2.25rem] text-[0.625rem] text-color">
                    <div className="relative">Free</div>
                  </div>
                  <div className="absolute top-[0rem] left-[36.813rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[36.625rem] relative font-light inline-block shrink-0">
                      The ccTLD is open to anyone who wants to register.It is
                      now the leading ccTLD for domain names, and nonprofits,
                      schools, and private individuals use it.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[78.438rem] relative h-[9.063rem]">
                <div className="absolute top-[0rem] left-[0rem] box-border w-[78.438rem] h-[9.063rem] border-r-[1px] border-solid border-foundation-primary-blue-b50 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[3.25rem] left-[2.438rem] w-[74.688rem] h-[2.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">.gov.np</div>
                  </div>
                  <div className="absolute top-[0rem] left-[21.563rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Governmental</div>
                  </div>
                  <div className="absolute top-[0.688rem] left-[10.625rem] rounded-18xl bg-primary flex flex-row items-center justify-center py-[0.125rem] px-[2.25rem] text-[0.625rem] text-color">
                    <div className="relative">Free</div>
                  </div>
                  <div className="absolute top-[0rem] left-[36.813rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[36.625rem] relative font-light inline-block shrink-0">
                      Nepal's .gov.np ccTLD is limited to government entities
                      and agencies.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[78.438rem] relative h-[9.063rem]">
                <div className="absolute top-[0rem] left-[0rem] box-border w-[78.438rem] h-[9.063rem] border-r-[1px] border-solid border-foundation-primary-blue-b50 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[3.25rem] left-[2.438rem] w-[74.688rem] h-[2.5rem]">
                  <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">.coop.np</div>
                  </div>
                  <div className="absolute top-[0rem] left-[21.563rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Cooperatives</div>
                  </div>
                  <div className="absolute top-[0.688rem] left-[10.625rem] rounded-18xl bg-primary flex flex-row items-center justify-center py-[0.125rem] px-[2.25rem] text-[0.625rem] text-color">
                    <div className="relative">Free</div>
                  </div>
                  <div className="absolute top-[0rem] left-[36.813rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[36.625rem] relative font-light inline-block shrink-0">
                      .coop.np is a ccTLD only available to cooperatives.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[78.438rem] relative h-[9.063rem]">
                <div className="absolute top-[0rem] left-[0rem] box-border w-[78.438rem] h-[9.063rem] border-r-[1px] border-solid border-foundation-primary-blue-b50 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[2.625rem] left-[2.438rem] w-[74.688rem] h-[3.75rem]">
                  <div className="absolute top-[0.625rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">.org.np</div>
                  </div>
                  <div className="absolute top-[0.625rem] left-[21.563rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Organisation</div>
                  </div>
                  <div className="absolute top-[1.313rem] left-[10.625rem] rounded-18xl bg-primary flex flex-row items-center justify-center py-[0.125rem] px-[2.25rem] text-[0.625rem] text-color">
                    <div className="relative">Free</div>
                  </div>
                  <div className="absolute top-[0rem] left-[36.813rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[36.625rem] relative font-light inline-block shrink-0">
                      Organizations that benefit non-profits, and which are
                      still primarily used by like-minded organizations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[78.438rem] relative h-[9.063rem]">
                <div className="absolute top-[0rem] left-[0rem] box-border w-[78.438rem] h-[9.063rem] border-r-[1px] border-solid border-foundation-primary-blue-b50 border-b-[1px] border-l-[1px]" />
                <div className="absolute top-[2.625rem] left-[2.438rem] w-[74.688rem] h-[3.75rem]">
                  <div className="absolute top-[0.625rem] left-[0rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">.edu.np</div>
                  </div>
                  <div className="absolute top-[0.625rem] left-[21.563rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">Educational</div>
                  </div>
                  <div className="absolute top-[1.313rem] left-[10.625rem] rounded-18xl bg-primary flex flex-row items-center justify-center py-[0.125rem] px-[2.25rem] text-[0.625rem] text-color">
                    <div className="relative">Free</div>
                  </div>
                  <div className="absolute top-[0rem] left-[36.813rem] flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="w-[36.625rem] relative font-light inline-block shrink-0">
                      A .edu.np ccTLD is available to educational institutions
                      like primary schools, middle schools, high schools,
                      colleges, and universities.
                    </div>
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

export default NpDomain;
