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
import PaymentTermPopup from "../components/payment-term-popup";
import { useRouter } from "next/router";

const SSL: NextPage = () => {
  const [isDomainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const [isResellerOpen, setResellerOpen] = useState(false);
  const [isServersAndVPSOpen, setServersAndVPSOpen] = useState(false);
  const [isCloudSolutionsOpen, setCloudSolutionsOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = useState(false);
  const [isPaymentTermPopupOpen, setPaymentTermPopupOpen] = useState(false);
  const [isPaymentTermPopup1Open, setPaymentTermPopup1Open] = useState(false);
  const [isPaymentTermPopup2Open, setPaymentTermPopup2Open] = useState(false);
  const [isPaymentTermPopup3Open, setPaymentTermPopup3Open] = useState(false);
  const router = useRouter();

  const onFrameContainer2Click = useCallback(() => {
    router.push("/affiliate");
  }, [router]);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/about-us");
  }, [router]);

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

  const openPaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(true);
  }, []);

  const closePaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(false);
  }, []);

  const openPaymentTermPopup1 = useCallback(() => {
    setPaymentTermPopup1Open(true);
  }, []);

  const closePaymentTermPopup1 = useCallback(() => {
    setPaymentTermPopup1Open(false);
  }, []);

  const openPaymentTermPopup2 = useCallback(() => {
    setPaymentTermPopup2Open(true);
  }, []);

  const closePaymentTermPopup2 = useCallback(() => {
    setPaymentTermPopup2Open(false);
  }, []);

  const openPaymentTermPopup3 = useCallback(() => {
    setPaymentTermPopup3Open(true);
  }, []);

  const closePaymentTermPopup3 = useCallback(() => {
    setPaymentTermPopup3Open(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-color h-[565.625rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
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
                <div
                  className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem] cursor-pointer"
                  onClick={onFrameContainer2Click}
                >
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
                <div
                  className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem] cursor-pointer"
                  onClick={onFrameContainer4Click}
                >
                  <img
                    className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0"
                    alt=""
                    src="/headset-1.svg"
                  />
                  <div className="relative font-light">Contact</div>
                </div>
                <div
                  className="rounded-mini flex flex-row items-center justify-center p-[0.625rem] gap-[0.25rem] cursor-pointer"
                  onClick={onFrameContainer5Click}
                >
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
        <div className="absolute top-[528.25rem] left-[calc(50%_-_720px)] w-[90rem] h-[37.375rem] text-[1.125rem] text-primary">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-color" />
          <div className="absolute h-[91.3%] w-full top-[4.35%] right-[0%] bottom-[4.35%] left-[0%] flex flex-col items-center justify-start gap-[2.5rem]">
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
                    <div className="w-[0.031rem] relative box-border h-[19.969rem] hidden border-r-[0.5px] border-solid border-grey-3" />
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
        <div className="absolute top-[14.25rem] right-[5.813rem] w-[78.438rem] flex flex-row items-center justify-start gap-[9.25rem] text-[1rem] text-primary">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start text-[2rem] text-black">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[27.5rem] relative flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0 whitespace-pre-wrap">{`Get a  Premium SSL Certificate & Secure`}</p>
                        <p className="m-0">Your Site Now</p>
                      </span>
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                    <div className="w-[37.25rem] relative font-light inline-block shrink-0">
                      <p className="m-0">
                        Protect your website, build brand trust, and improve
                        your
                      </p>
                      <p className="m-0">
                        search engine rankings with our free SSL Certificates.
                        Your own SSL certificate for your domain. https://
                        creates trust!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                    <div className="relative font-medium">
                      SSL lock symbol in the browser
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                    <div className="relative font-medium">
                      Better Google Listing
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                    <div className="relative font-medium">
                      Secure data transmission
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className="flex flex-row items-center justify-center p-[0.625rem] ml-[-0.125rem]">
                    <div className="relative font-medium">Increased trust</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                  <div className="relative font-medium">View Plans</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[25.313rem] relative h-[23.813rem] object-cover"
            alt=""
            src="/image-81@2x.png"
          />
        </div>
        <div className="absolute top-[46.125rem] left-[12.25rem] flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="w-[45.563rem] relative flex whitespace-pre-wrap items-center justify-center shrink-0">
              Our SSL Certificates Are From Some of the Most Trusted Brands in
              Online Security
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.081rem]">
            <div className="flex flex-col items-start justify-start p-[0.725rem]">
              <img
                className="w-[11.113rem] relative h-[4.938rem] object-cover"
                alt=""
                src="/image-76@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start p-[0.725rem]">
              <img
                className="w-[11.113rem] relative h-[4.938rem] object-cover"
                alt=""
                src="/image-77@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start p-[0.725rem]">
              <img
                className="w-[11.113rem] relative h-[4.938rem] object-cover"
                alt=""
                src="/image-78@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start p-[0.725rem]">
              <img
                className="w-[11.113rem] relative h-[4.938rem] object-cover"
                alt=""
                src="/image-79@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[202.375rem] right-[0rem] left-[0rem] h-[55.313rem] text-primary">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[55.313rem]" />
          <div className="absolute w-[calc(100%_-_234px)] top-[4.188rem] right-[7.313rem] left-[7.313rem] flex flex-col items-center justify-start gap-[3.125rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                What are the benefits of Having an SSL Certificate?
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
                        Secured Website
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        An SSL certificate encrypts all information exchanged
                        between a visitor and the web server. It ensures that
                        every packet transferred remains unexposed to any
                        attacker, ensuring website security.
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
                        Brand Reputation
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        Your customers may become conscious when transactions
                        are involved on your site. If an SSL is installed on
                        your site, they feel safe and don’t hesitate in making
                        transactions.
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
                        Improved SEO Ranking
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center shrink-0">
                        <span className="w-full">
                          <p className="m-0">
                            Google prioritizes sites having SSL certificates in
                            search engines. Installing an SSL on your website
                            will benefit your SEO ranking and drive conversions.
                          </p>
                        </span>
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
                        Boost Traffic and Sales
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        With increased rankings, you will see a great number of
                        audiences visiting your site. This ultimately increases
                        the chances of increased revenue.
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
                        Secured Badge
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        Browsers like Google Chrome mark your website as ‘Not
                        Secure’ if not incorporated with an SSL. This flag on
                        your website can set a negative impression on your
                        visitors.
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
                      <div className="relative font-semibold">Green Lock</div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1rem] text-grey-2">
                      <div className="w-[20.25rem] relative font-light flex items-center justify-center shrink-0">
                        A tiny green lock in your browser before the URL shows
                        visitors that your site is secure and their data is
                        safe. The ‘s’ in https shows your site is secure in all
                        languages.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[438.375rem] left-[calc(50%_-_720px)] w-[90rem] h-[37.813rem] text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[90rem] h-[37.813rem]" />
          <div className="absolute top-[6.625rem] left-[4.938rem] w-[78.438rem] flex flex-row items-center justify-center gap-[7.75rem]">
            <div className="flex flex-col items-start justify-start gap-[1.562rem]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <b className="w-[31.25rem] relative flex items-center shrink-0">
                      <span className="w-full">
                        <p className="m-0">Experience the Hostie</p>
                        <p className="m-0">Hosting Difference Today!</p>
                      </span>
                    </b>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
                    <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                      Above all else, we strive deliver outstanding customer
                      experiences when you buy a domain from.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem] text-primary">
                <div className="flex flex-col items-start justify-start p-[0.625rem]">
                  <div className="w-[14.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
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
            <img
              className="w-[33.875rem] relative h-[24.563rem] object-cover"
              alt=""
              src="/image-49@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[482.438rem] left-[calc(50%_-_583px)] w-[74.563rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center">
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
        <div className="absolute top-[139.688rem] left-[calc(50%_-_720px)] w-[90rem] h-[56.438rem] text-center text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[90rem] h-[56.438rem]" />
          <div className="absolute top-[5.063rem] left-[18.438rem] flex flex-col items-center justify-start gap-[3.125rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="w-[36.75rem] relative flex items-center justify-center shrink-0">
                Browsers Have Changed, Don't Get Left Behind
              </b>
            </div>
            <img
              className="w-[45.125rem] relative rounded-lg h-[28.125rem] object-cover"
              alt=""
              src="/image-80@2x.png"
            />
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.75rem]">
              <div className="w-[51.938rem] relative flex items-center justify-center shrink-0">
                Secure Your Site In Minutes With Our Fully Automated
                Provisioning And Deployment
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[263.938rem] left-[0rem] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[0.125rem]">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <span>{`What Is `}</span>
                <span className="text-primary">SSL?</span>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem]">
              <div className="w-[48.563rem] relative font-light inline-block shrink-0">
                SSL Certificates are fundamental to internet security. They are
                used to establish an encrypted connection and allow data to be
                transmitted securely between a browser or user's computer and a
                server or website.
              </div>
            </div>
          </div>
          <div className="w-[90rem] relative h-[40.5rem] text-[1.125rem] text-primary">
            <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[40.5rem]" />
            <div className="absolute top-[3.313rem] left-[6.688rem] flex flex-row items-center justify-start gap-[6.437rem]">
              <img
                className="w-[36.438rem] relative rounded-lg h-[25.875rem] object-cover"
                alt=""
                src="/rectangle-57@2x.png"
              />
              <div className="w-[33.75rem] flex flex-col items-start justify-start gap-[1.875rem]">
                <div className="w-[33.75rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[1.625rem]">
                  <div className="w-[33.125rem] flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold.svg"
                    />
                    <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                      Establishes a secure connection between a browser and a
                      server
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold.svg"
                    />
                    <div className="w-[29.813rem] relative font-light inline-block shrink-0">
                      Encrypts communication to protect sensitive information
                      your customers provide to you
                    </div>
                  </div>
                  <div className="w-[33.125rem] flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold.svg"
                    />
                    <div className="w-[30.938rem] relative font-light inline-block shrink-0">
                      Places a padlock next to your web address in the browser
                    </div>
                  </div>
                  <div className="w-[33.125rem] flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold.svg"
                    />
                    <div className="w-[30.938rem] relative font-light inline-block shrink-0">
                      Authenticates an organization's identity
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[32.125rem] relative font-light inline-block shrink-0">
                    <p className="m-0">
                      <span className="text-primary">
                        Standard SSL (Domain Validated)
                      </span>
                      <span className="text-grey-2">
                         Certificates are the easiest and most common type of
                        SSL certificate. 
                      </span>
                      <span className="text-primary">OV</span>
                      <span className="text-grey-2"> and </span>
                      <span className="text-primary">EV Certificates</span>
                      <span>
                         also authenticate the identity of the company or
                        organization that holds the certificate providing more
                        trust to end users.
                      </span>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      With our SSL certificate services*, you won't need to take
                      manual steps to configure and deploy new certificates
                      every year. We generate a renewal order automatically when
                      your certificate nears the end of its validity. After
                      payment, we will automatically configure, validate, and
                      provision your new certificate for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[34.375rem] left-[50.188rem] text-[0.875rem] font-light text-grey-3 inline-block w-[33.125rem]">
              * Your domain must be hosted through the same hosting provider who
              sold the SSL certificate, and the server must use cPanel, Plesk,
              or DirectAdmin.
            </div>
          </div>
        </div>
        <div className="absolute top-[320.125rem] left-[0rem] flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                <p className="m-0">{`Help Me Choose The Right Type Of `}</p>
                <p className="m-0">Certificate</p>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem]">
              <div className="w-[60.875rem] relative font-light inline-block h-[2.875rem] shrink-0">
                <p className="m-0">
                  While the need for online security is universal, not all SSL
                  Certificates are created equal. The guide below is designed to
                  help you decide which type of certificate is right for you.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.437rem] text-left text-primary">
            <div className="w-[90rem] relative h-[31.875rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[31.875rem]" />
              <div className="absolute top-[2.938rem] left-[calc(50%_-_607.5px)] flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[6.437rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.875rem]">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Domain Validation (DV)
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[1.625rem] text-[1.125rem]">
                      <div className="flex flex-row items-start justify-start">
                        <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                          <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                            <li>
                              Verifies ownership and control of the domain name
                              only
                            </li>
                            <li>Issued in minutes</li>
                            <li>Maintains browser compliance</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-black">
                        <div className="relative font-medium">
                          Ideal for non-critical web pages
                        </div>
                      </div>
                      <div className="w-[31.813rem] flex flex-row items-start justify-start text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">
                            Think of DV like getting a library card—no
                            confirmation of who you really
                          </p>
                          <p className="m-0">
                            are, very minimal requirements to obtain and issued
                            very quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                      <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                        <div className="relative font-medium">Learn More</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[36.438rem] relative rounded-lg h-[25.875rem] object-cover"
                    alt=""
                    src="/rectangle-57@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[90rem] relative h-[31.875rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[31.875rem]" />
              <div className="absolute top-[2.938rem] left-[calc(50%_-_607.5px)] flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[6.437rem]">
                  <img
                    className="w-[36.438rem] relative rounded-lg h-[25.875rem] object-cover"
                    alt=""
                    src="/rectangle-57@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[1.875rem]">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Organization Validation (OV)
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[1.625rem] text-[1.125rem]">
                      <div className="flex flex-row items-start justify-start">
                        <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                          <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                            <li>
                              Enhanced validation including authenticating the
                              identity of the applicant
                            </li>
                            <li>Issued within one day</li>
                            <li>Maintains browser compliance</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-black">
                        <div className="relative font-medium">
                          Ideal for more sensitive webpages such as login pages
                        </div>
                      </div>
                      <div className="w-[31.813rem] flex flex-row items-start justify-start text-[1rem] text-grey-2">
                        <div className="relative font-light">
                          <p className="m-0">
                            Think of OV like getting a driver’s license—more
                            hoops to jump through than
                          </p>
                          <p className="m-0">
                            a library card but more trusted as a form of
                            identification.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                      <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                        <div className="relative font-medium">Learn More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90rem] relative h-[31.875rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[31.875rem]" />
              <div className="absolute top-[2.938rem] left-[calc(50%_-_606px)] flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[6.437rem]">
                  <div className="flex flex-col items-start justify-start gap-[1.875rem]">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Extended Validation (EV)
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[1.625rem] text-[1.125rem]">
                      <div className="flex flex-row items-start justify-start">
                        <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                          <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                            <li>
                              Standards-based approach to authentication,
                              representing the highest level of authentication
                              for SSL Certificates
                            </li>
                            <li>Typically issued within 1-3 days</li>
                            <li>
                              Maintains browser and other industry compliance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-black">
                        <div className="relative font-medium">
                          <p className="m-0">
                            Ideal for sensitive webpages including ecommerce,
                          </p>
                          <p className="m-0">online banking, account signups</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start text-[1rem] text-grey-2">
                        <div className="w-[30.438rem] relative font-light inline-block shrink-0">
                          <p className="m-0">
                            Think of EV like getting a passport—much more
                            stringent processes,
                          </p>
                          <p className="m-0">
                            longer lead times and more verification of who you
                            are than with a
                          </p>
                          <p className="m-0">
                            library card or driver’s license. Recognized
                            internationally as the most
                          </p>
                          <p className="m-0">
                            trusted way to verify your identity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                      <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                        <div className="relative font-medium">Learn More</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[36.438rem] relative rounded-lg h-[25.875rem] object-cover"
                    alt=""
                    src="/rectangle-57@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[68.138rem] left-[calc(50%_-_673px)] flex flex-col items-center justify-start gap-[2.812rem] text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-start gap-[0.625rem]">
              <b className="relative">
                Choose the Right SSL Plan for Your Site
              </b>
              <div className="w-[44.313rem] relative text-[1.25rem] font-light text-grey-2 inline-block">
                SSL is industry-standard encryption! Protect important data, win
                visitors’ trust and boost your credibility! Pick a plan from the
                SSL certificates below.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.125rem] text-left text-[1.25rem] text-primary">
            <div className="w-[20.188rem] relative h-[55rem]">
              <div className="absolute top-[2.063rem] left-[0rem] rounded-xl box-border w-[20.188rem] h-[50rem] border-[1px] border-solid border-primary" />
              <div className="absolute top-[3.5rem] left-[2.313rem] flex flex-col items-center justify-center gap-[1.875rem]">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start p-[0.625rem]">
                        <div className="relative">
                          <span>{`Rs `}</span>
                          <span className="text-[2rem] font-medium">1999</span>
                          <span>/year</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[15.625rem] rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem] text-color">
                      <div className="relative font-medium">Add to Cart</div>
                    </div>
                  </div>
                  <div className="w-[15.625rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[0.937rem] text-[1rem]">
                    <div className="w-[7.938rem] flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Domain Validation
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Authority GGSSL</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        10 GB NVME Storage
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        4096-bit Encryption
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Green Bar</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Site Seal Static
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Issuance 5 minutes
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Warranty 10,000</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Both with/without WWW
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Paper Work</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Server Licensing Unlimited
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Mobile Support</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Browser Compatibility 99%+
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        SSL Type Single Domain
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Trust Level</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[0.875rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-primary w-[20.188rem] h-[3.188rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-[1rem] text-color">
                <div className="relative font-semibold">Domain SSL</div>
              </div>
              <div
                className="absolute top-[52.625rem] left-[6.375rem] flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[0.875rem]"
                onClick={openPaymentTermPopup}
              >
                <div className="relative font-semibold">Payment terms</div>
              </div>
            </div>
            <div className="w-[20.188rem] relative h-[55rem]">
              <div className="absolute top-[2.063rem] left-[0rem] rounded-xl box-border w-[20.188rem] h-[50rem] border-[1px] border-solid border-primary" />
              <div className="absolute top-[3.5rem] left-[2.313rem] flex flex-col items-center justify-center gap-[1.875rem]">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start p-[0.625rem]">
                        <div className="relative">
                          <span>{`Rs `}</span>
                          <span className="text-[2rem] font-medium">1999</span>
                          <span>/year</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[15.625rem] rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem] text-color">
                      <div className="relative font-medium">Add to Cart</div>
                    </div>
                  </div>
                  <div className="w-[15.625rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[0.937rem] text-[1rem]">
                    <div className="w-[7.938rem] flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Domain Validation
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Authority GGSSL</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        10 GB NVME Storage
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        4096-bit Encryption
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Green Bar</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Site Seal Static
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Issuance 5 minutes
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Warranty 10,000</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Both with/without WWW
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Paper Work</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Server Licensing Unlimited
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Mobile Support</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Browser Compatibility 99%+
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        SSL Type Single Domain
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Trust Level</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[0.875rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-primary w-[20.188rem] h-[3.188rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-[1rem] text-color">
                <div className="relative font-semibold">Domain SSL</div>
              </div>
              <div
                className="absolute top-[52.625rem] left-[6.375rem] flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[0.875rem]"
                onClick={openPaymentTermPopup1}
              >
                <div className="relative font-semibold">Payment terms</div>
              </div>
            </div>
            <div className="w-[20.188rem] relative h-[55rem]">
              <div className="absolute top-[2.063rem] left-[0rem] rounded-xl box-border w-[20.188rem] h-[50rem] border-[1px] border-solid border-primary" />
              <div className="absolute top-[3.5rem] left-[2.313rem] flex flex-col items-center justify-center gap-[1.875rem]">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start p-[0.625rem]">
                        <div className="relative">
                          <span>{`Rs `}</span>
                          <span className="text-[2rem] font-medium">1999</span>
                          <span>/year</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[15.625rem] rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem] text-color">
                      <div className="relative font-medium">Add to Cart</div>
                    </div>
                  </div>
                  <div className="w-[15.625rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[0.937rem] text-[1rem]">
                    <div className="w-[7.938rem] flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Domain Validation
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Authority GGSSL</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        10 GB NVME Storage
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        4096-bit Encryption
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Green Bar</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Site Seal Static
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Issuance 5 minutes
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Warranty 10,000</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Both with/without WWW
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Paper Work</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Server Licensing Unlimited
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Mobile Support</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Browser Compatibility 99%+
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        SSL Type Single Domain
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Trust Level</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[0.875rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-primary w-[20.188rem] h-[3.188rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-[1rem] text-color">
                <div className="relative font-semibold">Domain SSL</div>
              </div>
              <div
                className="absolute top-[52.625rem] left-[6.375rem] flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[0.875rem]"
                onClick={openPaymentTermPopup2}
              >
                <div className="relative font-semibold">Payment terms</div>
              </div>
            </div>
            <div className="w-[20.188rem] relative h-[55rem]">
              <div className="absolute top-[2.063rem] left-[0rem] rounded-xl box-border w-[20.188rem] h-[50rem] border-[1px] border-solid border-primary" />
              <div className="absolute top-[3.5rem] left-[2.313rem] flex flex-col items-center justify-center gap-[1.875rem]">
                <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start p-[0.625rem]">
                        <div className="relative">
                          <span>{`Rs `}</span>
                          <span className="text-[2rem] font-medium">1999</span>
                          <span>/year</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[15.625rem] rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem] text-color">
                      <div className="relative font-medium">Add to Cart</div>
                    </div>
                  </div>
                  <div className="w-[15.625rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[0.937rem] text-[1rem]">
                    <div className="w-[7.938rem] flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Domain Validation
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Authority GGSSL</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        10 GB NVME Storage
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        4096-bit Encryption
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Green Bar</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Site Seal Static
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Issuance 5 minutes
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Warranty 10,000</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Both with/without WWW
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">No Paper Work</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Server Licensing Unlimited
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Mobile Support</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        Browser Compatibility 99%+
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">
                        SSL Type Single Domain
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold3.svg"
                      />
                      <div className="relative font-light">Trust Level</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[0.875rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none bg-primary w-[20.188rem] h-[3.188rem] flex flex-row items-center justify-center p-[0.625rem] box-border text-[1rem] text-color">
                <div className="relative font-semibold">Domain SSL</div>
              </div>
              <div
                className="absolute top-[52.625rem] left-[6.375rem] flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[0.875rem]"
                onClick={openPaymentTermPopup3}
              >
                <div className="relative font-semibold">Payment terms</div>
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
      {isPaymentTermPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup} />
        </PortalPopup>
      )}
      {isPaymentTermPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup1}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup1} />
        </PortalPopup>
      )}
      {isPaymentTermPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup2}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup2} />
        </PortalPopup>
      )}
      {isPaymentTermPopup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup3}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default SSL;
