import type { NextPage } from "next";
import { useState, useCallback } from "react";
import GetAQuotePopup from "../components/get-a-quote-popup";
import PortalPopup from "../components/portal-popup";
import DomainDropdown from "../components/domain-dropdown";
import HostingDropdown from "../components/hosting-dropdown";
import Reseller from "../components/reseller";
import ServersAndVPS from "../components/servers-and-v-p-s";
import CloudSolutions from "../components/cloud-solutions";
import Support from "../components/support";
import MyAccount from "../components/my-account";
import { useRouter } from "next/router";

const Vps: NextPage = () => {
  const [isGetAQuotePopupOpen, setGetAQuotePopupOpen] = useState(false);
  const [isDomainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const [isResellerOpen, setResellerOpen] = useState(false);
  const [isServersAndVPSOpen, setServersAndVPSOpen] = useState(false);
  const [isCloudSolutionsOpen, setCloudSolutionsOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = useState(false);
  const router = useRouter();

  const openGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(true);
  }, []);

  const closeGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(false);
  }, []);

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

  return (
    <>
      <div className="w-full relative bg-color h-[532.875rem] overflow-hidden text-left text-[2rem] text-black font-outfit-light-body-text-6">
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[36.875rem] font-inter">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[36.875rem]" />
          <div className="absolute top-[3.125rem] left-[5.75rem] flex flex-row items-center justify-center">
            <div className="flex flex-col items-start justify-start gap-[0.5rem] font-outfit-light-body-text-6">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block shrink-0">
                              <p className="m-0">VPS Hosting for More</p>
                              <p className="m-0">Power and Control</p>
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-3">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">
                              At Protozoa Host, we offer comprehensive web
                              hosting solutions for any need in Nepal, from
                              personal blogs to large business operations. Our
                              diverse options ensure you find the perfect fit.
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
                              Free real-time snapshot
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
                              Free automatic weekly backups
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
                              AI Assistant
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[0.625rem] text-[1.125rem] text-grey-3">
                    <div className="relative">
                      <span>
                        <span>{`Start Hosting at just `}</span>
                        <span className="font-medium font-outfit-light-body-text-6">{`Rs `}</span>
                      </span>
                      <span className="text-[2rem] font-semibold">99.00</span>
                      <span className="font-medium">/mo</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium">Choose your plan</div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[1rem] text-grey-2"
                onClick={openGetAQuotePopup}
              >
                <div className="relative font-medium">
                  <span>{`Looking For Customized Solution? `}</span>
                  <span className="text-primary">Request Quote</span>
                </div>
              </div>
            </div>
            <div className="w-[48.938rem] relative h-[29.838rem] ml-[-2rem] text-[0.55rem]">
              <div className="absolute top-[0.413rem] left-[3.45rem] box-border w-[0.056rem] h-[23.95rem] border-r-[0.9px] border-solid border-color" />
              <div className="absolute top-[2.9rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <img
                className="absolute top-[1.213rem] left-[0.663rem] w-[39.231rem] h-[21.85rem] object-contain"
                alt=""
              />
              <div className="absolute top-[4.913rem] left-[4.081rem] rounded-[3.53px] bg-color box-border w-[32.281rem] h-[15.725rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[4.913rem] left-[4.081rem] rounded-t-[3.53px] rounded-b-none bg-color box-border w-[32.281rem] h-[1.544rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[6.444rem] left-[4.069rem] box-border w-[32.306rem] h-[0.025rem] border-t-[0.4px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[7.281rem] left-[6.513rem] text-[0.881rem] font-semibold">{`cPanel Dashboard `}</div>
              <div className="absolute top-[3.019rem] left-[8.881rem] w-[11.181rem] h-[2.531rem] text-[0.844rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-8xs-5 bg-color box-border w-[11.181rem] h-[2.531rem] border-[1.1px] border-solid border-foundation-primary-blue-b50" />
                <div className="absolute top-[0.769rem] left-[0.775rem] font-semibold">
                  SSL Certificate
                </div>
                <div className="absolute top-[0.631rem] left-[7.175rem] rounded-[2.25px] bg-mediumseagreen-100 w-[3.513rem] h-[1.263rem]" />
                <div className="absolute top-[0.844rem] left-[7.875rem] text-[0.7rem] text-color">
                  Active
                </div>
              </div>
              <div className="absolute top-[16rem] left-[6.569rem] w-[8.775rem] h-[1.988rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.663rem] left-[2.313rem] font-semibold">
                  File Manager
                </div>
                <img
                  className="absolute top-[0.388rem] left-[0.663rem] w-[1.156rem] h-[1.156rem] overflow-hidden"
                  alt=""
                  src="/folder-1.svg"
                />
              </div>
              <div className="absolute top-[8.938rem] left-[6.513rem] rounded-[1.77px] bg-color box-border w-[27.644rem] h-[6.125rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[16rem] left-[15.894rem] w-[8.775rem] h-[1.988rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.719rem] left-[2.038rem] font-semibold">
                  Databases
                </div>
                <img
                  className="absolute top-[0.556rem] left-[0.606rem] w-[0.938rem] h-[0.938rem] overflow-hidden"
                  alt=""
                  src="/database-2-1.svg"
                />
              </div>
              <div className="absolute top-[16rem] left-[25.219rem] w-[8.775rem] h-[1.988rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.663rem] left-[1.819rem] font-semibold">
                  Wordpress Overview
                </div>
                <img
                  className="absolute top-[0.5rem] left-[0.494rem] w-[0.938rem] h-[0.938rem] overflow-hidden"
                  alt=""
                  src="/wordpress-3-1.svg"
                />
              </div>
              <div className="absolute top-[10.431rem] left-[7.669rem] w-[4.5rem] h-[3.05rem] text-[0.719rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Business
                </div>
                <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
                  Active
                </div>
                <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  See Details
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
                  alt=""
                  src="/fi-2891526.svg"
                />
              </div>
              <div className="absolute top-[10.431rem] left-[13.65rem] w-[3.813rem] h-[3.05rem] text-[0.719rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Domain
                </div>
                <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
                  Active
                </div>
                <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
                  alt=""
                  src="/fi-28915261.svg"
                />
              </div>
              <div className="absolute top-[10.431rem] left-[18.913rem] w-[6.313rem] h-[3.05rem] text-[0.719rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Business Email
                </div>
                <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
                  Active
                </div>
                <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
                  alt=""
                  src="/fi-28915262.svg"
                />
              </div>
              <div className="absolute top-[10.431rem] left-[26.719rem] w-[6rem] h-[3.05rem] text-[0.719rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Daily backups
                </div>
                <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
                  Active
                </div>
                <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
                  alt=""
                  src="/fi-28915263.svg"
                />
              </div>
              <img
                className="absolute top-[2.875rem] left-[22.9rem] w-[9.725rem] h-[3.025rem] object-cover"
                alt=""
                src="/nepal-1@2x.png"
              />
              <img
                className="absolute top-[7.063rem] left-[2.481rem] w-[2.481rem] h-[8rem] object-contain"
                alt=""
                src="/performance-1@2x.png"
              />
              <img
                className="absolute top-[0rem] left-[15.119rem] w-[7.506rem] h-[2.425rem] object-cover"
                alt=""
                src="/big-brand-1@2x.png"
              />
              <div className="absolute top-[8.306rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[13.438rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[17.963rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[21.438rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[0.413rem] left-[37rem] box-border w-[0.056rem] h-[23.95rem] border-r-[0.9px] border-solid border-color" />
              <img
                className="absolute top-[1.875rem] left-[25.825rem] w-[23.113rem] h-[26.875rem] object-cover"
                alt=""
                src="/wepikexport20240401055453mwlb-1@2x.png"
              />
              <div className="absolute top-[19.481rem] left-[2.756rem] w-[8.938rem] h-[4.194rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.938rem] h-[4.194rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.55rem] left-[1.6rem] w-[5.75rem] h-[2.894rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[5.75rem] h-[2.894rem]">
                    <div className="absolute top-[0rem] left-[1.106rem] text-[0.719rem] font-semibold">
                      Safe
                    </div>
                    <div className="absolute top-[1.269rem] left-[0rem] text-grey-2">
                      No malware found
                    </div>
                    <div className="absolute top-[2.206rem] left-[0rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      See malware scanner
                    </div>
                  </div>
                  <img
                    className="absolute h-[20.52%] w-[13.15%] top-[3.67%] right-[85.76%] bottom-[75.81%] left-[1.09%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-82.svg"
                  />
                </div>
              </div>
              <img
                className="absolute top-[19.756rem] left-[16.331rem] w-[8.938rem] h-[2.813rem] object-cover"
                alt=""
                src="/group-2-10@2x.png"
              />
              <div className="absolute top-[24.294rem] left-[29.375rem] w-[16.625rem] h-[5.544rem] text-[0.375rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.99px] bg-color box-border w-[16.625rem] h-[5.544rem] border-[1px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.938rem] left-[1.619rem] w-[13.45rem] h-[3.675rem]">
                  <div className="absolute top-[0.119rem] left-[0rem] text-[0.625rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[6.788rem] h-[1.494rem]">
                    <p className="m-0">Performance score for</p>
                    <p className="m-0">protozoahost.com</p>
                  </div>
                  <div className="absolute top-[2.613rem] left-[0rem] w-[1.556rem] h-[0.438rem]">
                    <div className="absolute top-[0rem] left-[0.625rem] inline-block w-[0.931rem] h-[0.438rem]">
                      0-49
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red w-[0.438rem] h-[0.438rem]" />
                  </div>
                  <div className="absolute top-[2.613rem] left-[2.494rem] w-[1.744rem] h-[0.438rem]">
                    <div className="absolute top-[0rem] left-[0.619rem] inline-block w-[1.119rem] h-[0.438rem]">
                      50-89
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-orange w-[0.438rem] h-[0.438rem]" />
                  </div>
                  <div className="absolute top-[2.613rem] left-[4.981rem] w-[1.931rem] h-[0.438rem]">
                    <div className="absolute top-[0rem] left-[0.625rem] inline-block w-[1.306rem] h-[0.438rem]">
                      90-100
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumseagreen-100 w-[0.438rem] h-[0.438rem]" />
                  </div>
                  <div className="absolute top-[0rem] left-[9.775rem] rounded-[50%] bg-mediumseagreen-100 w-[3.675rem] h-[3.675rem]" />
                  <div className="absolute top-[1.244rem] left-[10.963rem] text-[0.994rem] font-semibold text-mediumseagreen-100 inline-block w-[1.306rem] h-[1.181rem]">
                    99
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[49.188rem] relative h-[32.112rem] hidden text-[0.544rem]">
              <div className="absolute top-[1.819rem] left-[3.394rem] box-border w-[0.056rem] h-[23.581rem] border-r-[0.9px] border-solid border-color" />
              <div className="absolute top-[4.263rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <img
                className="absolute top-[24.125rem] left-[39.281rem] w-[38.631rem] h-[21.519rem] object-contain"
                alt=""
              />
              <div className="absolute top-[6.25rem] left-[4.019rem] rounded-[3.48px] bg-color box-border w-[31.788rem] h-[15.488rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[6.25rem] left-[4.019rem] rounded-t-[3.48px] rounded-b-none bg-color box-border w-[31.788rem] h-[1.519rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[7.756rem] left-[4.006rem] box-border w-[31.813rem] h-[0.025rem] border-t-[0.4px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[8.588rem] left-[6.413rem] text-[0.869rem] font-semibold">{`cPanel Dashboard `}</div>
              <div className="absolute top-[4.838rem] left-[8.75rem] w-[8.638rem] h-[1.956rem] text-[0.65rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[8.638rem] h-[1.956rem] border-[0.9px] border-solid border-foundation-primary-blue-b50" />
                <div className="absolute top-[0.6rem] left-[0.594rem] font-semibold">
                  SSL Certificate
                </div>
                <div className="absolute top-[0.488rem] left-[5.538rem] rounded-[1.74px] bg-mediumseagreen-100 w-[2.719rem] h-[0.975rem]" />
                <div className="absolute top-[0.65rem] left-[6.081rem] text-[0.544rem] text-color">
                  Active
                </div>
              </div>
              <div className="absolute top-[17.169rem] left-[6.469rem] w-[8.638rem] h-[1.956rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[8.638rem] h-[1.956rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.656rem] left-[2.281rem] font-semibold">
                  File Manager
                </div>
                <img
                  className="absolute top-[0.381rem] left-[0.65rem] w-[1.144rem] h-[1.144rem] overflow-hidden"
                  alt=""
                  src="/folder-11.svg"
                />
              </div>
              <div className="absolute top-[10.213rem] left-[6.413rem] rounded-[1.74px] bg-color box-border w-[27.219rem] h-[6.031rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
              <div className="absolute top-[17.169rem] left-[15.65rem] w-[8.638rem] h-[1.956rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[8.638rem] h-[1.956rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.706rem] left-[2.006rem] font-semibold">
                  Databases
                </div>
                <img
                  className="absolute top-[0.544rem] left-[0.594rem] w-[0.925rem] h-[0.925rem] overflow-hidden"
                  alt=""
                  src="/database-2-11.svg"
                />
              </div>
              <div className="absolute top-[17.169rem] left-[24.831rem] w-[8.638rem] h-[1.956rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[8.638rem] h-[1.956rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.656rem] left-[1.794rem] font-semibold">
                  Wordpress Overview
                </div>
                <img
                  className="absolute top-[0.494rem] left-[0.488rem] w-[0.925rem] h-[0.925rem] overflow-hidden"
                  alt=""
                  src="/wordpress-3-11.svg"
                />
              </div>
              <div className="absolute top-[1.956rem] left-[19.775rem] w-[14.506rem] h-[4.838rem] text-[0.325rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[14.506rem] h-[4.838rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.819rem] left-[1.413rem] w-[11.738rem] h-[3.206rem]">
                  <div className="absolute top-[0.106rem] left-[0rem] text-[0.544rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    <p className="m-0">Performance score for</p>
                    <p className="m-0">protozoahost.com</p>
                  </div>
                  <div className="absolute top-[2.281rem] left-[0rem] w-[1.356rem] h-[0.381rem]">
                    <div className="absolute top-[0rem] left-[0.544rem]">
                      0-49
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red w-[0.381rem] h-[0.381rem]" />
                  </div>
                  <div className="absolute top-[2.281rem] left-[2.175rem] w-[1.544rem] h-[0.381rem]">
                    <div className="absolute top-[0rem] left-[0.544rem]">
                      50-89
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-orange w-[0.381rem] h-[0.381rem]" />
                  </div>
                  <div className="absolute top-[2.281rem] left-[4.35rem] w-[1.669rem] h-[0.381rem]">
                    <div className="absolute top-[0rem] left-[0.544rem]">
                      90-100
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumseagreen-100 w-[0.381rem] h-[0.381rem]" />
                  </div>
                  <div className="absolute top-[0rem] left-[8.531rem] rounded-[50%] bg-mediumseagreen-100 w-[3.206rem] h-[3.206rem]" />
                  <div className="absolute top-[1.081rem] left-[9.563rem] text-[0.869rem] font-semibold text-mediumseagreen-100">
                    99
                  </div>
                </div>
              </div>
              <div className="absolute top-[11.681rem] left-[7.55rem] w-[4.419rem] h-[3.019rem] text-[0.706rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.113rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Business
                </div>
                <div className="absolute top-[1.263rem] left-[1.113rem] text-[0.506rem]">
                  Active
                </div>
                <div className="absolute top-[2.269rem] left-[1.113rem] text-[0.606rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  See Details
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.756rem] h-[0.756rem] overflow-hidden"
                  alt=""
                  src="/fi-28915264.svg"
                />
              </div>
              <div className="absolute top-[11.681rem] left-[13.444rem] w-[3.731rem] h-[3.019rem] text-[0.706rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.106rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Domain
                </div>
                <div className="absolute top-[1.263rem] left-[1.106rem] text-[0.506rem]">
                  Active
                </div>
                <div className="absolute top-[2.269rem] left-[1.106rem] text-[0.606rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.756rem] h-[0.756rem] overflow-hidden"
                  alt=""
                  src="/fi-28915265.svg"
                />
              </div>
              <div className="absolute top-[11.681rem] left-[18.625rem] w-[6.231rem] h-[3.019rem] text-[0.706rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.106rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Business Email
                </div>
                <div className="absolute top-[1.263rem] left-[1.106rem] text-[0.506rem]">
                  Active
                </div>
                <div className="absolute top-[2.269rem] left-[1.106rem] text-[0.606rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.756rem] h-[0.756rem] overflow-hidden"
                  alt=""
                  src="/fi-28915266.svg"
                />
              </div>
              <div className="absolute top-[11.681rem] left-[26.306rem] w-[5.919rem] h-[3.019rem] text-[0.706rem] text-grey-2">
                <div className="absolute top-[0rem] left-[1.106rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Daily backups
                </div>
                <div className="absolute top-[1.263rem] left-[1.106rem] text-[0.506rem]">
                  Active
                </div>
                <div className="absolute top-[2.269rem] left-[1.106rem] text-[0.606rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Manage
                </div>
                <img
                  className="absolute top-[0.05rem] left-[0rem] w-[0.756rem] h-[0.756rem] overflow-hidden"
                  alt=""
                  src="/fi-28915267.svg"
                />
              </div>
              <img
                className="absolute top-[0rem] left-[9.888rem] w-[8.206rem] h-[2.556rem] object-cover"
                alt=""
                src="/nepal-1@2x.png"
              />
              <img
                className="absolute top-[16.244rem] left-[2.444rem] w-[2.444rem] h-[7.881rem] object-contain"
                alt=""
                src="/performance-1@2x.png"
              />
              <img
                className="absolute top-[24.613rem] left-[10.706rem] w-[7.388rem] h-[2.394rem] object-cover"
                alt=""
                src="/big-brand-1@2x.png"
              />
              <div className="absolute top-[9.588rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[14.644rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[19.1rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[22.519rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[1.819rem] left-[36.431rem] box-border w-[0.056rem] h-[23.581rem] border-r-[0.9px] border-solid border-color" />
              <img
                className="absolute top-[3.238rem] left-[24.375rem] w-[24.813rem] h-[28.875rem] object-cover"
                alt=""
                src="/wepikexport20240401055453mwlb-1@2x.png"
              />
              <div className="absolute top-[20.594rem] left-[2.719rem] w-[8.8rem] h-[4.131rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[3.48px] bg-color box-border w-[8.8rem] h-[4.131rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[0.544rem] left-[1.575rem] w-[5.625rem] h-[2.863rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[5.625rem] h-[2.863rem]">
                    <div className="absolute top-[0rem] left-[1.088rem] text-[0.706rem] font-semibold">
                      Safe
                    </div>
                    <div className="absolute top-[1.25rem] left-[0rem] text-grey-2">
                      No malware found
                    </div>
                    <div className="absolute top-[2.175rem] left-[0rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      See malware scanner
                    </div>
                  </div>
                  <img
                    className="absolute h-[20.52%] w-[13.22%] top-[3.71%] right-[85.78%] bottom-[75.76%] left-[1%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-821.svg"
                  />
                </div>
              </div>
              <img
                className="absolute top-[20.863rem] left-[16.081rem] w-[8.8rem] h-[2.769rem] object-cover"
                alt=""
                src="/group-2-10@2x.png"
              />
            </div>
          </div>
        </div>
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
        <div className="absolute top-[51.125rem] left-[calc(50%_-_381px)] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">Customize your VPS Plan</b>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
            <div className="relative font-light">
              Whether you’re just starting your business or ready to level up,
              there is a plan for you.
            </div>
          </div>
        </div>
        <div className="absolute top-[60.813rem] left-[calc(50%_-_568px)] flex flex-row items-start justify-start gap-[1.687rem] text-[1.25rem]">
          <div className="flex flex-col items-center justify-start gap-[1.062rem]">
            <div className="relative">Everest VPS</div>
            <div className="rounded-9xs bg-foundation-primary-blue-b50 h-[3rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border gap-[0.312rem] text-[0.875rem] text-color">
              <div className="rounded-9xs bg-primary flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Elite</div>
              </div>
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem] text-primary">
                <div className="relative font-medium">Access</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[1.062rem]">
            <div className="relative">Annapurna VPS</div>
            <div className="rounded-9xs bg-foundation-primary-blue-b50 h-[3rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border gap-[0.312rem] text-[0.875rem] text-primary">
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Core</div>
              </div>
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Turbo</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[1.062rem]">
            <div className="relative">Kathmandu VPS</div>
            <div className="rounded-9xs bg-foundation-primary-blue-b50 h-[3rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border gap-[0.312rem] text-[0.875rem] text-primary">
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Superior</div>
              </div>
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Ultimate</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[1.062rem]">
            <div className="relative">Mustang VPS</div>
            <div className="rounded-9xs bg-foundation-primary-blue-b50 h-[3rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border gap-[0.312rem] text-[0.875rem] text-primary">
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Magic</div>
              </div>
              <div className="rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem]">
                <div className="relative font-medium">Kickstart</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[1.062rem]">
            <div className="relative">Supreme VPS</div>
            <div className="rounded-9xs bg-foundation-primary-blue-b50 h-[3rem] flex flex-row flex-wrap items-center justify-center p-[0.625rem] box-border text-[0.875rem] text-primary">
              <div className="w-[9.313rem] rounded-9xs flex flex-col items-center justify-center py-[0.625rem] px-[1.625rem] box-border">
                <div className="relative font-medium">Custom Configuration</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[69.125rem] left-[calc(50%_-_612px)] flex flex-row items-end justify-start gap-[5.812rem] text-[1.25rem]">
          <div className="w-[47.75rem] relative h-[31.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-[47.75rem] h-[31.5rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
            <div className="absolute top-[14.563rem] left-[1.188rem] flex flex-col items-start justify-start gap-[0.937rem]">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <div className="relative">
                  All Nepal Based VPS Plan Includes:
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[13.5rem] text-[1rem] text-primary">
                <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem] gap-[0.937rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">Nepal Based</span>
                      <span className="font-light"> Data Centers</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">SSD</span>
                      <span className="font-light"> Storage</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">Full</span>
                      <span className="font-light"> Root Access</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">DDoS</span>
                      <span className="font-light"> Protection</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">24/7</span>
                      <span className="font-light"> Customer Support</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-[0rem] px-[0.625rem] gap-[0.937rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">High-Speed</span>
                      <span className="font-light"> Connectivity</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">IPv4</span>
                      <span className="font-light">{` and `}</span>
                      <span className="font-medium">{`IPv6 `}</span>
                      <span className="font-light">Support</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <img
                      className="w-[1.125rem] relative h-[1.125rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdicheckbold4.svg"
                    />
                    <div className="relative">
                      <span className="font-medium">99.5%</span>
                      <span className="font-light"> Uptime Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[2.375rem] left-[4.313rem] flex flex-row items-start justify-start gap-[3.062rem]">
              <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">CPU</div>
                <b className="relative text-[2rem]">1</b>
                <div className="relative text-[1rem] font-light">Core</div>
              </div>
              <div className="w-[0.063rem] relative box-border h-[7.875rem] border-r-[1px] border-solid border-grey-2" />
              <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">RAM</div>
                <b className="relative text-[2rem]">2</b>
                <div className="relative text-[1rem] font-light">GB</div>
              </div>
              <div className="w-[0.063rem] relative box-border h-[7.875rem] border-r-[1px] border-solid border-grey-2" />
              <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">Bandwidth</div>
                <b className="relative text-[2rem]">20</b>
                <div className="relative text-[1rem] font-light">TB</div>
              </div>
              <div className="w-[0.063rem] relative box-border h-[7.875rem] border-r-[1px] border-solid border-grey-2" />
              <div className="flex flex-col items-center justify-center p-[0.625rem] gap-[0.625rem]">
                <div className="relative font-medium">Storage</div>
                <b className="relative text-[2rem]">20</b>
                <div className="relative text-[1rem] font-light">GB</div>
              </div>
            </div>
            <div className="absolute top-[12.3rem] left-[-0.012rem] box-border w-[47.781rem] h-[0.031rem] border-t-[0.5px] border-solid border-grey-2" />
          </div>
          <div className="w-[22.938rem] relative h-[31.688rem] text-[0.875rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-foundation-primary-blue-b50 w-[22.938rem] h-[31.688rem]" />
            <div className="absolute top-[1.188rem] left-[1.438rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
              <div className="relative">Your Customized VPS</div>
              <div className="w-[18.813rem] relative text-[0.875rem] font-light flex items-center">
                Your VPS (Virtual Private Server) will be set up with these
                settings.
              </div>
            </div>
            <div className="absolute top-[6.875rem] left-[1.438rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
              <div className="relative font-light">vCore</div>
              <div className="relative font-light">RAM</div>
              <div className="relative font-light">SSD</div>
              <div className="relative font-light">IPV4 Address</div>
              <div className="relative font-light">Bandwidth</div>
              <div className="relative font-light">Root Access</div>
            </div>
            <div className="absolute top-[18.313rem] left-[1.438rem] flex flex-col items-start justify-start p-[0.625rem]">
              <div className="relative font-light">Payment</div>
            </div>
            <div className="absolute top-[18.313rem] left-[13.875rem] rounded-9xs box-border w-[7.625rem] flex flex-row items-start justify-start py-[0.625rem] pr-[0rem] pl-[1.062rem] gap-[2.187rem] border-[1px] border-solid border-primary">
              <div className="relative font-light">Monthly</div>
              <img
                className="w-[1.063rem] relative h-[1.125rem] overflow-hidden shrink-0"
                alt=""
                src="/mingcutedownline.svg"
              />
            </div>
            <div className="absolute top-[6.875rem] left-[18.938rem] flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
              <div className="relative font-medium">1</div>
              <div className="relative font-medium">2</div>
              <div className="relative font-medium">20</div>
              <div className="relative font-medium">1</div>
              <div className="relative font-medium">{`20 `}</div>
              <div className="relative font-medium">Yes</div>
            </div>
            <div className="absolute top-[27.5rem] left-[2.688rem] rounded-11xl bg-primary w-[17.563rem] flex flex-col items-center justify-center py-[0.562rem] px-[5.75rem] box-border text-color">
              <div className="relative font-medium">Add to cart</div>
            </div>
            <b className="absolute top-[22.563rem] left-[4.25rem] text-[2rem]">
              Rs 3400.00/mo
            </b>
          </div>
        </div>
        <div className="absolute w-full top-[495.5rem] right-[0rem] left-[0rem] h-[37.375rem] text-[1.125rem] text-primary">
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
        <div className="absolute w-[calc(100%_-_247px)] top-[431.313rem] right-[7.75rem] left-[7.688rem] overflow-hidden flex flex-col items-center justify-start gap-[3.125rem] text-center text-primary">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                Your Web Hosting Questions Answered - FAQ
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-grey-2">
              <div className="relative font-light">
                Get the Clarity You Need with Our Comprehensive FAQs
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.125rem] text-black">
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">
                  Why should you choose ProtozoaHost for your web hosting?
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
                  How does ProtozoaHost ensure uptime for web hosting plans in
                  Nepal?
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
                  Can I upgrade my hosting plan as my website grows?
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
                  What makes ProtozoaHost a preferred choice for hosting in
                  Nepal with Nepal based web hosting plans?
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
                  How easy is it to migrate my website to ProtozoaHost?
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
                  How does ProtozoaHost ensure quality email hosting in Nepal?
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
                <div className="relative">How To Register a Domain?</div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
            <div className="w-[74.563rem] rounded-lg bg-color box-border h-[5.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-foundation-primary-blue-b50">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between p-[1.875rem]">
                <div className="relative">What is Shared cPanel Hosting?</div>
                <img
                  className="w-[1.5rem] relative h-[0.85rem] object-contain"
                  alt=""
                  src="/down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[107.063rem] left-[calc(50%_-_613px)] flex flex-col items-center justify-start gap-[3.125rem] text-center">
          <div className="flex flex-row items-center justify-center p-[0.625rem]">
            <b className="relative">
              <p className="m-0">{`Quick Look On Our `}</p>
              <p className="m-0">VPS Features</p>
            </b>
          </div>
          <div className="w-[76.625rem] flex flex-row flex-wrap items-start justify-start gap-[3.125rem] text-[1.25rem] text-primary">
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">{`RAM & Storage`}</div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">{`SSDs, Email & SSL `}</div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Daily Backups
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Money-Back Guarantee
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Safe and Secured
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <div className="w-[22.625rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] rounded-lg box-border h-[18.125rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-foundation-primary-blue-b50">
                <div className="w-[22.625rem] flex flex-col items-center justify-start">
                  <img
                    className="w-[5.438rem] relative h-[5.438rem] object-cover"
                    alt=""
                    src="/asset057-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-semibold">
                        Dedicated Support
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[0.875rem] text-grey-2">
                      <div className="relative font-light">
                        <p className="m-0">
                          Collaboratively formulate principle
                        </p>
                        <p className="m-0">
                          capital. Progressively evolve user
                        </p>
                        <p className="m-0">revolutionary hosting services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[206.125rem] left-[calc(50%_-_623px)] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
          <img
            className="w-[33.875rem] relative h-[24.55rem] object-cover"
            alt=""
            src="/image-122@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    NVMe SSD Storage and AMD EPYC Processors
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Have an exciting project idea? We have the technology to
                    make it happen. Experience rock-solid performance with NVMe
                    SSD storage and AMD EPYC processors running on
                    industry-leading HPE and DELL servers, spread across four
                    continents. Industry-standard KVM virtualization platform
                    ensures your full ownership of hardware resources.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[236.938rem] left-[calc(50%_-_623px)] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    300 Mb/s Network
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Our fiber-connected infrastructure offers a 300 Mb/s network
                    speed for VPS hosting clients, ensuring higher uptime and
                    faster loading speed. This makes our VPS plans suitable for
                    gaming, streaming, and anything in between.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[33.875rem] relative h-[24.55rem] object-cover"
            alt=""
            src="/image-122@2x.png"
          />
        </div>
        <div className="absolute top-[267.75rem] left-[calc(50%_-_623px)] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
          <img
            className="w-[33.875rem] relative h-[24.55rem] object-cover"
            alt=""
            src="/image-122@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    Backups and Snapshots
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Your data is safe with our automated weekly backups. Need to
                    perform major changes? Create a manual snapshot with ease.
                    In case an error occurs, you can revert to the previous
                    version within minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[373.063rem] left-[calc(50%_-_622px)] flex flex-row items-center justify-center gap-[7.75rem] text-primary">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[35rem] relative flex items-center shrink-0">
                    Scalable VPS Hosting
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Start small and scale when you outgrow your plan. Whenever
                    you need more server resources for your projects, upgrading
                    to a higher-tier VPS hosting plan takes just a few clicks.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[33.875rem] relative h-[24.55rem] object-cover"
            alt=""
            src="/image-122@2x.png"
          />
        </div>
        <div className="absolute top-[342.25rem] left-[calc(50%_-_627px)] w-[78.438rem] flex flex-row items-center justify-center gap-[7.75rem]">
          <img
            className="w-[33.875rem] relative h-[24.563rem] object-cover"
            alt=""
            src="/image-49@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[1.562rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="w-[31.25rem] relative flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">Firewall and DDoS</p>
                      <p className="m-0">Protection</p>
                    </span>
                  </b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    Secure your virtual server every step of the way. With our
                    Wanguard DDoS filtering and easy-to-configure firewall, you
                    can keep any harmful traffic at bay.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem] text-color">
              <div className="flex flex-col items-start justify-start p-[0.625rem]">
                <div className="w-[14.875rem] rounded-lg bg-primary flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                  <div className="relative font-medium">Get Started</div>
                  <img
                    className="w-[1rem] relative h-[1rem]"
                    alt=""
                    src="/-icon-diagonal-arrow-right-up-outline.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[298.563rem] left-[9.563rem] flex flex-col items-center justify-start gap-[3.125rem]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">
                Install Software With 1-Click for Your Virtual Server
              </b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.25rem]">
              <div className="relative">
                <span className="font-light">
                  You can find all available VPS templates in our 
                </span>
                <span className="font-medium text-primary">
                  knowledge base.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[2.125rem] text-[1.125rem] text-grey-2">
            <div className="flex flex-col items-start justify-start gap-[2.062rem]">
              <div className="w-[23.25rem] relative h-[12.688rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-color box-border w-[23.25rem] h-[12.688rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none bg-foundation-primary-blue-b50 box-border w-[23.25rem] h-[4.75rem] border-b-[1px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[1.25rem] left-[1.125rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Operating Systems
                  </div>
                </div>
                <div className="absolute top-[5.875rem] left-[1.125rem] flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
                  <div className="w-[19.75rem] relative font-light flex items-center shrink-0">
                    Choose from the most popular Linux-based operating systems
                    for your virtual servers, and we will install it
                    automatically for you.
                  </div>
                </div>
              </div>
              <div className="w-[23.25rem] relative h-[13rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-color box-border w-[23.25rem] h-[13rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
                <div className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none bg-foundation-primary-blue-b50 box-border w-[23.25rem] h-[4.75rem] border-b-[1px] border-solid border-foundation-primary-blue-b75" />
                <div className="absolute top-[1.25rem] left-[1.125rem] flex flex-row items-center justify-center p-[0.625rem]">
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Control Panels and Apps
                  </div>
                </div>
                <div className="absolute top-[5.875rem] left-[1.125rem] flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
                  <div className="w-[19.75rem] relative font-light flex items-center shrink-0">
                    Manage your server with a reliable control panel and install
                    web applications of your choice. With our VPS templates,
                    setting up your applications only takes minutes.
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[46.375rem] relative h-[23.875rem] object-cover"
              alt=""
              src="/image-123@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[403.875rem] left-[calc(50%_-_720px)] w-[90rem] h-[21.188rem] text-color">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] [background:radial-gradient(50%_50%_at_50%_50%,_#1469cd,_#1354b5_37.88%,_#102880)] w-[90rem] h-[21.188rem]" />
          <div className="absolute top-[0rem] left-[calc(50%_-_604px)] flex flex-row items-center justify-start">
            <img
              className="w-[23.5rem] relative h-[21.188rem] object-cover"
              alt=""
              src="/image-124@2x.png"
            />
            <div className="flex flex-row items-center justify-start gap-[5.062rem]">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">
                  <p className="m-0">{`30 days money back `}</p>
                  <p className="m-0">gurarentee</p>
                </b>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.625rem] text-[0.875rem]">
                <div className="flex flex-row items-start justify-start p-[0.625rem] text-[1.25rem]">
                  <div className="w-[25.438rem] relative inline-block shrink-0">
                    If you not satisfy, we will refund your payment. No hassle,
                    no risk. You can cancel plan at any time.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start p-[0.625rem] text-primary">
                  <div className="w-[10.875rem] rounded-lg bg-color flex flex-row items-center justify-center py-[0.875rem] px-[2.312rem] box-border gap-[0.625rem]">
                    <div className="relative font-medium">Get Started</div>
                    <img
                      className="w-[1rem] relative h-[1rem]"
                      alt=""
                      src="/-icon-diagonal-arrow-right-up-outline1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start p-[0.625rem]">
                  <div className="relative font-light">
                    *Cancellation must be within a maximum of 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[162.063rem] left-[calc(50%_-_584px)] flex flex-row items-center justify-center gap-[7.75rem] text-center text-[0.75rem] text-grey-2 font-inter">
          <div className="w-[33.875rem] relative h-[24.563rem]">
            <div className="absolute top-[0rem] left-[5.113rem] rounded-lg box-border w-[26.381rem] h-[19.381rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
            <div className="absolute top-[0.763rem] left-[6.006rem] rounded-[50%] box-border w-[0.475rem] h-[0.488rem] border-[0.5px] border-solid border-foundation-primary-blue-b50" />
            <div className="absolute top-[0.763rem] left-[6.744rem] rounded-[50%] box-border w-[0.475rem] h-[0.488rem] border-[0.5px] border-solid border-foundation-primary-blue-b50" />
            <div className="absolute top-[0.763rem] left-[7.481rem] rounded-[50%] box-border w-[0.475rem] h-[0.488rem] border-[0.5px] border-solid border-foundation-primary-blue-b50" />
            <img
              className="absolute h-[2.21%] w-[1.55%] top-[2.88%] right-[9.37%] bottom-[94.91%] left-[89.08%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[2.369rem] left-[11.144rem] rounded-lg bg-foundation-primary-blue-b50 w-[21.756rem] h-[3.106rem]" />
            <div className="absolute top-[3.55rem] left-[12.194rem]">
              https://
            </div>
            <div className="absolute top-[3.55rem] left-[29.631rem]">.com</div>
            <div className="absolute top-[3.356rem] left-[15.188rem] rounded-xl bg-color w-[14.069rem] h-[1.138rem]" />
            <img
              className="absolute top-[1.231rem] left-[0rem] w-[20.006rem] h-[23.331rem] object-cover"
              alt=""
              src="/freepikexport20240606161727swsp-1@2x.png"
            />
            <img
              className="absolute top-[8.731rem] left-[14.6rem] w-[18.131rem] h-[11.244rem]"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="absolute h-[18.07%] w-[18.78%] top-[29.11%] right-[34.37%] bottom-[52.82%] left-[46.85%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/vector2.svg"
            />
            <div className="absolute top-[18.844rem] left-[22.775rem] rounded-[50%] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[0.875rem] h-[0.888rem]" />
            <img
              className="absolute top-[10.213rem] left-[29.056rem] rounded-9xs w-[4.819rem] h-[4.881rem] overflow-hidden"
              alt=""
              src="/security-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start text-left text-[2rem] text-primary font-outfit-light-body-text-6">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                  <b className="relative">Choosing the right server plan</b>
                </div>
                <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                  <div className="w-[30.125rem] relative font-light flex items-center shrink-0">
                    <span className="w-full">
                      <p className="m-0">
                        Transitioning to ProtozoaHost from your existing service
                        provider? Allow us to manage the entire migration
                        process on your behalf.
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        When you transfer any number of your websites to your
                        ProtozoaHost subscription, you won't incur any expenses.
                        Whether you possess 1, 10, or even 100 websites, there
                        will be no charges applicable.
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        Every website hosted through ProtozoaHost is equipped
                        with a complimentary default AutoSSL. As soon as your
                        website is up and running, our automated SSL checker
                        will seamlessly deploy a free SSL certificate for you.
                        This process occurs hourly to ensure a secure browsing
                        experience.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isGetAQuotePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGetAQuotePopup}
        >
          <GetAQuotePopup onClose={closeGetAQuotePopup} />
        </PortalPopup>
      )}
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

export default Vps;
