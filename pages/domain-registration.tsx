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

const DomainRegistration: NextPage = () => {
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

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navBarContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navBarContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="w-full relative bg-color h-[459.375rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
        <div className="absolute top-[421.688rem] left-[calc(50%_-_719px)] w-[90rem] h-[37.688rem] text-[1.125rem] text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color" />
          <div className="absolute h-[90.88%] w-full top-[4.56%] right-[0%] bottom-[4.56%] left-[0%] flex flex-col items-center justify-start gap-[2.5rem]">
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
        <div className="absolute top-[12rem] left-[calc(50%_-_627px)] flex flex-row items-center justify-start gap-[4.062rem]">
          <div className="flex flex-col items-start justify-start gap-[1.312rem]">
            <div className="flex flex-col items-start justify-start gap-[2.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[27.5rem] relative flex items-center shrink-0">
                    <span className="w-full">
                      <span>{`Domain Registration in `}</span>
                      <span className="text-primary">Nepal</span>
                      <span>{` with `}</span>
                      <span className="text-primary">ProtozoaHost</span>
                    </span>
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[37.25rem] relative font-light inline-block shrink-0">
                    Enhance your online presence with Protozoa Host’s efficient
                    domain registration in Nepal. Securing your distinctive
                    domain is the initial step in creating a recognizable brand
                    and gaining credibility in the digital realm.
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[0.375rem] text-[0.875rem] text-grey-2">
                <div className="w-[22.625rem] rounded-9xs box-border flex flex-col items-start justify-center p-[0.875rem] border-[1px] border-solid border-primary">
                  <div className="relative tracking-[0.08em] font-light">
                    Enter your Domain name here
                  </div>
                </div>
                <div className="rounded-9xs bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-color">
                  <div className="relative font-medium">Search</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
              <div className="relative">
                <span className="font-light">{`Free `}</span>
                <span className="text-primary">
                  <span className="font-semibold font-outfit-light-body-text-6">
                    .com
                  </span>
                  <span className="font-light font-outfit-light-body-text-6">{` `}</span>
                  <span className="font-semibold">.org .net</span>
                </span>
                <span className="font-light"> domain with Combo Hosting</span>
              </div>
            </div>
          </div>
          <img
            className="w-[35.875rem] relative h-[28.75rem] object-cover"
            alt=""
            src="/image-39@2x.png"
          />
        </div>
        <div className="absolute top-[193.5rem] left-[calc(50%_-_720px)] w-[90rem] h-[21.313rem] text-center text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[21.313rem]" />
          <div className="absolute top-[4.75rem] left-[calc(50%_-_399px)] flex flex-col items-center justify-center gap-[0.625rem]">
            <div className="flex flex-row items-start justify-start p-[0.625rem]">
              <b className="w-[48.625rem] relative inline-block shrink-0">
                How about getting your domain for free?
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
              <div className="relative font-light whitespace-pre-wrap">
                Grab a hosting plan, which you’ll need anyway, and your domain’s
                on us for 1 year.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-[0.625rem] text-left text-[0.875rem] text-primary">
              <div className="w-[14.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                <div className="relative font-medium">
                  Check out hosting plans
                </div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[47rem] left-[calc(50%_-_720px)] w-[90rem] h-[33.688rem] text-center">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-foundation-primary-blue-b50 w-[90rem] h-[33.688rem]" />
          <div className="absolute top-[2.875rem] left-[5.813rem] bg-foundation-primary-blue-b50 flex flex-col items-center justify-start gap-[3.125rem]">
            <div className="w-[33.75rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
              <b className="relative">
                <p className="m-0">Maximize Your Domain:</p>
                <p className="m-0">Explore More Benefits.</p>
              </b>
            </div>
            <div className="flex flex-col items-start justify-start text-left text-[1.375rem] text-primary">
              <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[4.187rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">Domain Locking</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">{`Prevent unauthorized transfers of your domain names, & retain control to unlock domains if you so please.`}</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">Auto-Renewal</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">
                      If you forget to renew your domain, you could lose it
                      (gasp!). That's why we set up auto renew, so you don't
                      gotta worry.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">
                      Easy management
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">
                      Our control panel is designed for ease of use. Manage your
                      online awesomeness from one single dashboard.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[4.187rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">
                      Privacy protection
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">
                      For a small fee, you can protect your personal information
                      from being publicly available on the WHOIS database.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">DNS management</div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">
                      Route your DNS to us, another host, dedicated IPs, the
                      moon — wherever you'd like (minus the moon part).
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-semibold">
                      Email forwarding
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[21.688rem] relative font-light flex items-center shrink-0">
                      If you'd like, automatically forward any of your domain's
                      email addresses to any other valid email address.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[313.438rem] left-[calc(50%_-_596px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>{`Domain Name Search `}</span>
                <span className="text-primary">FAQs</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Find answers to frequently asked questions about our domain
                checker tool.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem]">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  What is the process of domain registration in Nepal with
                  ProtozoaHost?
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
                  Can I transfer my existing domain to ProtozoaHost's domain
                  registration service in Nepal?
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
                  What TLDs (Top-Level Domains) are available for domain
                  registration in Nepal with ProtozoaHost?
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
                  Is domain registration in Nepal with ProtozoaHost affordable?
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
                  How long does it take to register a domain with ProtozoaHost
                  in Nepal?
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
                  Does ProtozoaHost offer domain renewal services in Nepal?
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
                  What support options are available for domain
                  registration-related queries in Nepal?
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
                  Is my domain registration with ProtozoaHost in Nepal secure?
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
        <div className="absolute top-[86.938rem] left-[4.813rem] flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="w-[30.813rem] relative inline-block shrink-0">
                <span>{`Treat yo self to the most popular `}</span>
                <span className="text-primary">top level domains.</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem] text-grey-2">
              <div className="relative font-light">
                Protozoa Host: Your Gateway to Online Success in Nepal
              </div>
            </div>
          </div>
          <div className="w-[80.625rem] h-[88.125rem] flex flex-row flex-wrap items-start justify-start p-[0.625rem] box-border gap-[0.625rem] text-left text-[1rem]">
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1750/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1750
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    <p className="m-0">
                      Establish credibility with a .net domain. Perfect for
                      networking, tech, and communication-focused websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1799/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1799
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-color overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.562rem] gap-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                <img
                  className="w-[5.875rem] relative h-[3rem] object-cover"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.625rem]">
                    <div className="relative">Starting From</div>
                    <div className="relative text-primary text-[2rem]">
                      <span className="font-semibold">Rs 1599/</span>
                      <span className="text-[1.375rem]">yr</span>
                    </div>
                  </div>
                  <div className="relative font-light text-foundation-primary-blue-b200">
                    **Renewal Price: Rs 1699
                  </div>
                  <div className="w-[16.25rem] relative text-[0.875rem] font-light text-grey-2 inline-block">
                    Secure your online presence with a .com domain. Ideal for
                    businesses and individuals looking for a versatile web
                    address.
                  </div>
                </div>
              </div>
              <div className="w-[16.25rem] rounded-lg bg-primary h-[2.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[2.937rem] box-border gap-[0.625rem] text-[0.875rem] text-color">
                <div className="relative font-medium">Buy Now</div>
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[0rem] left-[calc(50%_-_720px)] flex flex-col items-center justify-start gap-[0.437rem] text-[0.75rem] text-primary"
          data-scroll-to="navBarContainer"
        >
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
        <div className="absolute w-full top-[221.063rem] right-[0rem] left-[0rem] h-[55.313rem] text-primary">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[55.313rem]" />
          <div className="absolute w-[calc(100%_-_234px)] top-[4.188rem] right-[7.313rem] left-[7.313rem] flex flex-col items-center justify-start gap-[3.125rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>6</span>
                <span className="text-black">{` Things To Remember Before You Buy `}</span>
                <span>Domains</span>
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.625rem] text-[1.25rem]">
              <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[4.812rem]">
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
                        Keep It Short
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        While there is no minimum length for domain
                        registration, we recommend buying a domain name that’s
                        under three words long. Longer website names are harder
                        to read and won't stand out.
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
                      <div className="relative font-semibold">Less Is More</div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        Avoid hyphens, numbers, slang, and easily misspelled
                        words in your domains. Complex elements make website
                        names much harder to reach and remember.
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
                      <div className="relative font-semibold">
                        Include Your Brand Name
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        A great address for your website should include your
                        brand or the target keywords for your niche. A search
                        result with a keyword in your site URL will offer better
                        brand recognition and increase your website’s traffic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[4.812rem]">
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
                        Domain Availability Search
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        Start by doing a domain name search to check if a domain
                        name is available. Remember to also check it has not
                        been trademarked.
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
                      <div className="relative font-semibold">
                        Think Locally
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        While it’s ideal to purchase a website name with .com,
                        due to their popularity, a .com TLD can often be
                        unavailable. Consider registering a country-specific
                        extension like .co.uk, .us, or .pk if you target a
                        particular country.
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
                      <div className="relative font-semibold">Act Fast</div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        The best website names are quickly taken. Don’t miss out
                        on the perfect one – do a domain search and buy domain
                        names to start your online projects today.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_194px)] top-[282.625rem] right-[6.063rem] left-[6.063rem] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
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
                    Free Privacy Protection
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        When you register a domain, your personal information is
                        usually available on public databases such as WHOIS.
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        As a reputable registrar, Hostinger will protect your
                        domain registration data
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        Our domain privacy protection service will keep your
                        domain name registration information hidden from third
                        parties for maximum security.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[1rem]"
              onClick={onFrameContainer1Click}
            >
              <div className="relative font-semibold">Domain Name Search</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[377.625rem] left-[calc(50%_-_720px)] w-[90rem] h-[37.813rem] text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[90rem] h-[37.813rem]" />
          <div className="absolute top-[6.625rem] left-[4.938rem] w-[78.438rem] flex flex-row items-center justify-center gap-[7.75rem]">
            <div className="flex flex-col items-start justify-start gap-[1.562rem]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[31.25rem] relative flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">Already Have A Domain?</p>
                        <p className="m-0">
                          Transfer It to Protozoa Host Today
                        </p>
                      </span>
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
                    <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">
                          Transfers are free, our tools are awesome, and our
                          renewal prices
                        </p>
                        <p className="m-0">are the lowest around.</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[0.875rem] text-primary"
                onClick={onFrameContainer12Click}
              >
                <div className="flex flex-col items-start justify-start p-[0.625rem]">
                  <div className="w-[14.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                    <div className="relative font-medium">Transfer Now</div>
                    <img
                      className="w-[1rem] relative h-[1rem]"
                      alt=""
                      src="/-icon-diagonal-arrow-right-up-outline2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[33.875rem] relative h-[24.563rem] object-cover"
              alt=""
              src="/image-49@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[176.688rem] left-[-125.25rem] text-[0.75rem] font-inter">
          with a 3-yr term (70% Savings)
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

export default DomainRegistration;
