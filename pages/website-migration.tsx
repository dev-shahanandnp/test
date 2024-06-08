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

const WebsiteMigration: NextPage = () => {
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
      <div className="w-full relative bg-color h-[355.438rem] overflow-hidden text-left text-[2rem] text-primary font-outfit-light-body-text-6">
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
        <div className="absolute top-[318.063rem] left-[0rem] w-[90rem] h-[37.375rem] text-[1.125rem]">
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
        <div className="absolute top-[253.875rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center text-black">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span className="whitespace-pre-wrap">{`Website Migration  `}</span>
                <span className="text-primary">FAQs</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Find answers to frequently asked questions about how to migrate
                website to Protozoa Host
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem]">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What Do I Need For a Successful Website Migration?
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
                  Is It Possible to Migrate Emails and Domains to ProtozoaHost?
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
                  When Do I Point My Domain Name to ProtozoaHost?
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
                <div className="relative">How Many Websites Can I Move?</div>
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
                  How Long Does It Take to Move a Website to ProtozoaHost?
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
                  Do I Need to Inform My Current Hosting Provider About the
                  Migration?
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
                  Will My Website Be Reachable During the Migration Process?
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
                  What Types of Websites Cannot Be Migrated to ProtozoaHost?
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
        <div className="absolute top-[8.5rem] left-[calc(50%_-_720px)] w-[90rem] h-[32.563rem]">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[32.563rem]" />
          <div className="absolute top-[2.438rem] left-[calc(50%_-_597px)] w-[74.688rem] flex flex-row items-center justify-start gap-[10.375rem]">
            <div className="w-[31.688rem] flex flex-col items-start justify-start py-[0rem] pr-[1.875rem] pl-[0rem] box-border gap-[0.5rem]">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-col items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block">
                              <p className="m-0">
                                <span className="text-black">Free Website</span>
                                <span> Migration</span>
                              </p>
                              <p className="m-0">Services</p>
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem] text-[1rem]">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mdicheckbold2.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Migrate an unlimited number of websites
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.375rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mdicheckbold2.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              Quick, simple process
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[-0.375rem]">
                          <img
                            className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/mdicheckbold2.svg"
                          />
                          <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                            <div className="relative font-medium">
                              24/7 dedicated Customer Success team
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Migrate now</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                  30-Day Money-Back Guarantee
                </div>
              </div>
            </div>
            <img
              className="w-[34.563rem] relative h-[27.625rem] object-cover"
              alt=""
              src="/image-52@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[47.313rem] left-[calc(50%_-_583px)] flex flex-col items-center justify-start gap-[3.125rem] text-black">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">
              <span>{`Migrate Your `}</span>
              <span className="text-primary">Website</span>
              <span> in 3 Simple Steps</span>
            </b>
          </div>
          <div className="flex flex-row items-center justify-center gap-[6.25rem] text-center text-primary">
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[3.938rem] rounded-84xl bg-foundation-primary-blue-b50 h-[3.75rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
                    <b className="relative">01</b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                    <div className="w-[14.938rem] relative font-semibold flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">Choose Your</p>
                        <p className="m-0">Hosting Plan</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[15.75rem] relative font-light flex items-center justify-center shrink-0">
                    We have a range of options. Simply choose a package with the
                    features you'll benefit from and the right amount of
                    resources for your site.
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
                    <div className="w-[14.938rem] relative font-semibold flex items-center justify-center shrink-0">
                      Fill in our Migration Request Form
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[15.75rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        Enter your website's details including, the URL, logins
                        and any backup files - and we'll do the rest.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-9xs flex flex-col items-center justify-start py-[2rem] px-[1.562rem]">
                <div className="flex flex-col items-center justify-start">
                  <div className="rounded-84xl bg-foundation-primary-blue-b50 flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="relative">03</b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                    <div className="w-[15.563rem] relative font-semibold flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">Submit Your</p>
                        <p className="m-0">Request</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[15.75rem] relative font-light flex items-center justify-center shrink-0">
                    Simply submit your request - and that's it. We'll migrate
                    your site quickly and securely, while it remains
                    up-and-running .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[123.188rem] right-[0rem] left-[0rem] h-[124.438rem] text-color">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] h-[124.438rem]" />
          <div className="absolute top-[6.375rem] left-[7.75rem] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] flex flex-col items-start justify-start gap-[6.25rem]">
            <div className="w-[74.563rem] h-[33.063rem] flex flex-row items-center justify-start gap-[13.187rem]">
              <img
                className="w-[36.313rem] relative h-[32.813rem] object-cover"
                alt=""
                src="/image-53@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[23.375rem] relative inline-block shrink-0">
                      Let Experts Take Care of Your Website Migration
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                    <div className="w-[23.375rem] relative font-light inline-block shrink-0">
                      Our dedicated Customer Success team has your back.
                      Handling 600 daily website migration requests, with
                      WordPress sites making up 83% of that total, we’re
                      experienced and ready to assist you anytime.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-primary">
                  <div className="rounded-lg bg-color flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Get Started</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[74.563rem] h-[33.063rem] flex flex-row items-center justify-start gap-[13.187rem]">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[23.375rem] relative inline-block shrink-0">
                      Speedy Transfers
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                    <div className="w-[23.375rem] relative font-light inline-block shrink-0">
                      Whether you have 1 website or 100s of websites, with
                      drag-and-drop file uploading and our expert team that’s
                      quicker than the industry-average, your site will be
                      transferred as quickly as possible and remain live
                      throughout.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-primary">
                  <div className="rounded-lg bg-color flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Get Started</div>
                  </div>
                </div>
              </div>
              <img
                className="w-[36.313rem] relative h-[32.813rem] object-cover"
                alt=""
                src="/image-53@2x.png"
              />
            </div>
            <div className="w-[74.563rem] h-[33.063rem] flex flex-row items-center justify-start gap-[13.187rem]">
              <img
                className="w-[36.313rem] relative h-[32.813rem] object-cover"
                alt=""
                src="/image-53@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[23.375rem] relative inline-block shrink-0">
                      Keep Your Websites, Emails, or Domains
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
                    <div className="w-[23.375rem] relative font-light inline-block shrink-0">
                      For the best experience, we recommend migrating not only
                      your websites but also emails and domains to Hostinger.
                      All services will stay up and running online during
                      migration, so you don’t lose any sales, visitors, or miss
                      important emails. We’ll also help you prepare for DNS
                      propagation to minimize downtime.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-primary">
                  <div className="rounded-lg bg-color flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Get Started</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[78.563rem] left-[0rem] flex flex-col items-center justify-start text-black">
          <div className="flex flex-col items-center justify-start gap-[2.562rem]">
            <div className="flex flex-col items-center justify-start gap-[1.875rem]">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="relative">
                      <span>{`Your `}</span>
                      <span className="text-primary">Website</span>
                      <span>{`, Moved with `}</span>
                      <span className="text-primary">Care!</span>
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem] text-grey-2">
                    <div className="w-[46.688rem] relative font-light inline-block shrink-0">
                      Expert solutions for Smooth and Hassle-Free Transfers
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.125rem] text-[1.125rem]">
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
                          <p className="m-0">{`Server `}</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                        Move your website to a new server without any downtime
                        or data loss. This includes all files, databases, and
                        configurations.
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
                          <p className="m-0">{`Database `}</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">{`Safely transfer your website’s database to a new system, ensuring data integrity, minimal disruption & Top-notch Security.`}</div>
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
                          <p className="m-0">{`cPanel `}</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                        Move your website to a new server without any downtime
                        or data loss. This includes all files, databases, and
                        configurations.
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
                          <p className="m-0">{`VPS `}</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                        Move your website to a new server without any downtime
                        or data loss. This includes all files, databases, and
                        configurations.
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
                          <p className="m-0">{`CMS `}</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                        Move your website to a new server without any downtime
                        or data loss. This includes all files, databases, and
                        configurations.
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
                          <p className="m-0">Domain</p>
                          <p className="m-0">Migration</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem]">
                      <div className="w-[17.125rem] relative font-light inline-block shrink-0">
                        Move your website to a new server without any downtime
                        or data loss. This includes all files, databases, and
                        configurations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start text-[0.875rem] text-primary">
              <div className="w-[39.531rem] relative box-border h-[0.031rem] border-t-[0.5px] border-solid border-foundation-primary-blue-b50" />
              <div className="w-[11.063rem] rounded-lg box-border flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] border-[1px] border-solid border-primary">
                <div className="relative font-medium">See More</div>
              </div>
              <div className="w-[39.531rem] relative box-border h-[0.031rem] border-t-[0.5px] border-solid border-foundation-primary-blue-b50" />
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

export default WebsiteMigration;
