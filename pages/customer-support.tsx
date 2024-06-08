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

const CustomerSupport: NextPage = () => {
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
      <div className="w-full relative bg-color h-[252rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
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
        <div className="absolute top-[214.625rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem] text-primary">
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
        <div className="absolute top-[168.813rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>{`Frequently Asked Questions - `}</span>
                <span className="text-primary">FAQs</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Find answers to frequently asked questions about our Whois
                lookup
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem]">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">What is a Whois domain lookup?</div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">What is a Whois IP lookup?</div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">How do I conduct a Whois search?</div>
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
                  How do I keep my Whois information updated?
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
                  What steps can I take to ensure my domain privacy is
                  protected?
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
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[37.875rem] text-primary">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[37.875rem]" />
          <div className="absolute top-[2.813rem] left-[5.75rem] flex flex-row items-center justify-start gap-[19.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-col items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block">
                              <span>Heroic Local Support</span>
                              <span className="text-black">
                                {" "}
                                of Protozoa Host in Nepali
                              </span>
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-3">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                              Your go-to resource for understanding and tackling
                              Protozoa-related issues. Our team is here to
                              provide expert support, advice, and resources to
                              ensure you have the information and assistance you
                              need, whenever you need it.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem] text-[1rem]">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              24/7 Live Chat
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
                              Comprehensive Blogs
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
                              Expert Advice and Consultations
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
                              Latest Research and Developments
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
                              Premium Support Available
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[1.812rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Contact Support</div>
                  </div>
                  <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-primary border-[1px] border-solid border-primary">
                    <div className="relative font-medium">Premium Support</div>
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
        <div className="absolute top-[43.25rem] left-[-122.125rem] w-[90rem] h-[40.5rem]" />
        <div className="absolute top-[52.125rem] left-[0rem] w-[90rem] h-[21.063rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-foundation-primary-blue-b50 w-[90rem] h-[21.063rem]" />
          <div className="absolute top-[4.813rem] left-[19.875rem] bg-foundation-primary-blue-b50 flex flex-col items-center justify-start gap-[2.062rem]">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">
                  <span>{`Find Out `}</span>
                  <span className="text-primary">More</span>
                </b>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
                <div className="relative font-light">
                  More useful links to answer your questions
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[1.812rem] text-[0.875rem] text-primary">
              <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] border-[1px] border-solid border-primary">
                <div className="relative font-medium">Knowledge Base</div>
              </div>
              <div className="w-[11.063rem] rounded-lg box-border flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] border-[1px] border-solid border-primary">
                <div className="relative font-medium">Tutorials</div>
              </div>
              <div className="w-[11.063rem] rounded-lg box-border flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] border-[1px] border-solid border-primary">
                <div className="relative font-medium">Blog</div>
              </div>
              <div className="w-[11.063rem] rounded-lg box-border flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] border-[1px] border-solid border-primary">
                <div className="relative font-medium">Youtube</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[79.438rem] left-[calc(50%_-_628px)] flex flex-row items-start justify-start p-[0.625rem] gap-[2.25rem] text-[1.25rem]">
          <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[1.875rem] px-[2.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-semibold">Ticket Support</div>
                </div>
                <div className="w-[12.688rem] flex flex-row items-center justify-start p-[0.625rem] box-border text-[1.125rem] text-grey-2">
                  <div className="w-[9.625rem] relative font-light inline-block shrink-0">
                    Submit a ticket for detailed support.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] text-[1.125rem] text-grey-2">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/f7ticketfill.svg"
                />
                <div className="relative">Open a ticket</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-color">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                  <img
                    className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                    alt=""
                    src="/livechat-11.svg"
                  />
                  <div className="relative font-medium">Raise a Ticket</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[17.688rem] rounded-9xs bg-color flex flex-col items-start justify-start py-[1.875rem] px-[2.5rem] box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-semibold">Email Support</div>
                </div>
                <div className="w-[12.688rem] flex flex-row items-start justify-start p-[0.625rem] box-border text-[1.125rem] text-grey-2">
                  <div className="w-[9.625rem] relative font-light inline-block shrink-0">
                    Email for fast, efficient support.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] text-[1.125rem] text-grey-2">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icroundemail.svg"
                />
                <div className="relative">Send Issues in mail</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-color">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                  <img
                    className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                    alt=""
                    src="/livechat-11.svg"
                  />
                  <div className="relative font-medium">Open a Ticket</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[1.875rem] px-[2.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-semibold">On Call Support</div>
                </div>
                <div className="w-[12.688rem] flex flex-row items-start justify-start p-[0.625rem] box-border text-[1.125rem] text-grey-2">
                  <div className="w-[12.438rem] relative font-light inline-block shrink-0">
                    Quick support — just a call away.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] text-[1.125rem] text-grey-2">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/materialsymbolscallsharp.svg"
                />
                <div className="relative">Ring Us</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-color">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                  <img
                    className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                    alt=""
                    src="/materialsymbolscallsharp1.svg"
                  />
                  <div className="relative font-medium">Call Us</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-9xs bg-color flex flex-col items-start justify-start py-[1.875rem] px-[2.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-semibold">Live Chat</div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
                  <div className="w-[9.625rem] relative font-light inline-block shrink-0">
                    Chat now for instant help.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] text-[1.125rem] text-grey-2">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/riwhatsappfill.svg"
                />
                <div className="relative">Chat in Whatsapp</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-color">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                  <img
                    className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icbaselinewhatsapp.svg"
                  />
                  <div className="relative font-medium">Chat Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[138rem] left-[calc(50%_-_627px)] w-[78.438rem] flex flex-row items-center justify-center gap-[7.75rem]">
          <div className="flex flex-col items-start justify-start gap-[1.562rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[31.25rem] relative flex items-center shrink-0">
                    <span className="w-full">
                      <span>{`Local Support in `}</span>
                      <span className="text-primary">Nepali Language</span>
                    </span>
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Accelerate Your Success: Discover ProtozoaHost’s Shared
                    Hosting Services. Embrace the Stability and Efficiency of
                    Our Shared Hosting to Scale Your High-Performance Website.
                    Navigate traffic surges with ease and enjoy dependable
                    uptime, all supported by advanced technology. ProtozoaHost’s
                    shared hosting strikes an optimal balance between
                    flexibility and cost-effectiveness, presenting a
                    forward-thinking solution for businesses poised to excel in
                    the digital era.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-color">
              <div className="w-[14.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                <div className="relative font-medium">Contact Us</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="w-[33.875rem] relative h-[24.563rem] object-cover"
            alt=""
            src="/image-49@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_190px)] top-[105.25rem] right-[5.906rem] left-[5.969rem] flex flex-row items-center justify-start gap-[4.437rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">Less Phone</p>
                      <p className="m-0 text-primary">More Support</p>
                    </span>
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    We don’t want to keep you hanging, waiting for someone to
                    answer the phone. That’s why we believe that live chat and
                    other means of internet communication can solve problems
                    more efficiently.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[37.5rem] relative rounded-9xs h-[26.5rem] object-cover"
            alt=""
            src="/rectangle-53@2x.png"
          />
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

export default CustomerSupport;
