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

const ContactUs: NextPage = () => {
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
      <div className="w-full relative bg-color h-[302.813rem] overflow-hidden text-left text-[2rem] text-primary font-outfit-light-body-text-6">
        <div className="absolute top-[0rem] left-[calc(50%_-_720px)] flex flex-col items-center justify-start gap-[0.437rem] text-[0.75rem]">
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
        <div className="absolute top-[265.438rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem]">
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
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[36.313rem] text-black">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[36.313rem]" />
          <div className="absolute top-[2.813rem] left-[5.75rem] flex flex-row items-center justify-start gap-[18.312rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block shrink-0">
                              Reach Out to Protozoa Host Contact: We're Here to
                              Help
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                              Empowering You with Responsive and Personalized
                              Contact Solutions
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
                              Immediate Assistance
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
                              Email Support
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
                              Phone Consultation
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
                              Feedback and Suggestions
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
                              Billing Queries
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[1.812rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">{`Signup to Earn Money `}</div>
                  </div>
                  <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-primary border-[1px] border-solid border-primary">
                    <div className="relative font-medium">Web Hosting</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[18.875rem] relative h-[28.25rem] object-cover"
              alt=""
              src="/image-57@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[147.375rem] left-[calc(50%_-_720px)] w-[90rem] h-[32.563rem] text-center text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[90rem] h-[32.563rem]" />
          <div className="absolute top-[5.75rem] left-[calc(50%_-_559px)] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] flex flex-col items-center justify-start gap-[2.187rem]">
            <div className="flex flex-col items-center justify-start gap-[2.187rem]">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="w-[52rem] relative inline-block shrink-0">
                  Our Heroic Support Team Knows No Boundaries - Best Web Hosting
                  Company in Nepal
                </b>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                <div className="w-[68.625rem] relative font-light inline-block shrink-0">
                  As the #1 web hosting in Nepal, customer satisfaction is our
                  primary focus. Our growth is driven by positive word-of-mouth
                  from delighted customers, not aggressive marketing. We offer
                  full-featured, high-quality hosting packages at an affordable
                  price, always putting our customers first. Enjoy "INSTANT
                  ACTIVE SUPPORT WITH DAILY PROACTIVE SUPPORT" with
                  ProtozoaHost.
                </div>
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] gap-[0.625rem] text-left text-[0.875rem] border-[1px] border-solid border-color">
              <div className="relative font-medium">Contact Us</div>
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="/-icon-diagonal-arrow-right-up-outline.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[186.188rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center text-black">
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
        <div className="absolute top-[50.563rem] left-[calc(50%_-_720px)] w-[90rem] h-[57.188rem] text-[1.25rem]">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-foundation-primary-blue-b50 w-[90rem] h-[57.188rem]" />
          <div className="absolute top-[3.438rem] left-[calc(50%_-_598px)] flex flex-col items-center justify-start gap-[3.375rem]">
            <div className="flex flex-col items-center justify-start text-[2rem] text-black">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">
                    <span>{`Connect With The `}</span>
                    <span className="text-primary">Right Team</span>
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem] text-grey-2">
                  <div className="relative font-light">
                    Find the Perfect Match for Your Queries with Our Specialized
                    Support Emails
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[3.125rem]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Affiliates</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">
                            Partner with us — submit a ticket for
                          </p>
                          <p className="m-0">affiliate queries.</p>
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Marketing</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">
                            Reach out for marketing insights at
                          </p>
                          <p className="m-0">contact@protozoahost.com.</p>
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Legal</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">Need legal info?</p>
                          <p className="m-0">
                            Call us for immediate assistance.
                          </p>
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Sales</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">
                            Talk sales with us — instant cha
                          </p>
                          <p className="m-0"> support available.</p>
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[3.125rem]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">
                          Support Ticket
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          Submit a ticket for detailed support.
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Email Us</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          Email for fast, efficient support.
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Call Us</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          Quick support — just a call away.
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-start justify-start p-[0.625rem]">
                      <img
                        className="w-[6.25rem] relative h-[6.25rem] object-cover"
                        alt=""
                        src="/image-48@2x.png"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-row items-center justify-center p-[0.625rem]">
                        <div className="relative font-semibold">Live Chat</div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.937rem] text-center text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          Chat now for instant help.
                        </div>
                        <div className="flex flex-row items-start justify-start text-left text-[0.875rem] text-color">
                          <div className="w-[10.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                            <img
                              className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                              alt=""
                              src="/livechat-11.svg"
                            />
                            <div className="relative font-medium">
                              Raise a Ticket
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
        <div className="absolute top-[114rem] left-[5.813rem] flex flex-row items-center justify-start gap-[3.937rem] text-black">
          <div className="flex flex-col items-start justify-start gap-[2.875rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>{`Your Web Hosting in Nepal Is `}</span>
                <span className="text-primary">Our Commitment.</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem] text-grey-2">
              <div className="w-[37.563rem] relative font-light inline-block shrink-0">
                At ProtozoaHost, we handle your web hosting needs so you can
                focus on innovation, creation, and expansion. Our dedicated
                support team in Nepal provides swift solutions for WordPress
                hosting, reseller hosting, and domain registration. Dive into
                superior hosting in Nepal with ProtozoaHost – your unwavering
                digital ally
              </div>
            </div>
          </div>
          <img
            className="w-[30rem] relative h-[27.125rem] object-cover"
            alt=""
            src="/image-56@2x.png"
          />
        </div>
        <div className="absolute top-[244.25rem] left-[calc(50%_-_720px)] w-[90rem] h-[14.938rem] text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[14.938rem]" />
          <div className="absolute top-[4.375rem] left-[calc(50%_-_477px)] flex flex-row items-center justify-center gap-[0.625rem]">
            <div className="flex flex-row items-start justify-start p-[0.625rem]">
              <div className="relative">
                <p className="m-0 font-semibold">
                  Take your website online with
                </p>
                <p className="m-0">
                  <b>ProtozoaHost!</b>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem]">
              <div className="w-[17.375rem] relative inline-block shrink-0">
                <p className="m-0">
                  <span>
                    <span className="font-light">
                      Special Introductory pricing
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span>{`Rs `}</span>
                  </span>
                  <b className="text-[1.25rem] font-outfit-light-body-text-6">
                    99.00/month*
                  </b>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-[0.875rem] text-primary">
              <div className="w-[10.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                <div className="relative font-medium">Get Started</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline1.svg"
                />
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

export default ContactUs;
