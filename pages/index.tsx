import type { NextPage } from "next";
import { useState, useCallback } from "react";
import GetAQuotePopup from "../components/get-a-quote-popup";
import PortalPopup from "../components/portal-popup";
import ContainerForm from "../components/container-form";
import FrameComponent17 from "../components/frame-component17";
import FrameComponent16 from "../components/frame-component16";
import FrameComponent14 from "../components/frame-component14";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent11 from "../components/frame-component11";
import GroupComponent4 from "../components/group-component4";
import { useRouter } from "next/router";
import FrameComponent10 from "../components/frame-component10";
import UseFrispes from "../components/use-frispes";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import GroupComponent3 from "../components/group-component3";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import GroupComponent2 from "../components/group-component2";
import GroupComponent1 from "../components/group-component1";
import RatingContainer from "../components/rating-container";
import FrameComponent5 from "../components/frame-component5";
import GroupComponent from "../components/group-component";
import PartnerContainer from "../components/partner-container";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const HomePage: NextPage = () => {
  const [isGetAQuotePopupOpen, setGetAQuotePopupOpen] = useState(false);
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

  return (
    <>
      <div className="w-full relative bg-color h-[1070.75rem] overflow-hidden text-left text-[2rem] text-primary font-outfit-light-body-text-6">
        <img
          className="absolute top-[13.25rem] left-[1.75rem] rounded-lg w-[86.438rem] h-[33.125rem] overflow-hidden object-cover opacity-[0.26] mix-blend-soft-light"
          alt=""
          src="/div@2x.png"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[2.25rem]" />
        <b className="absolute top-[33.775rem] left-[47.563rem] text-[4.25rem] inline-block text-midnightblue w-[35.206rem] h-[5.244rem] [transform:_rotate(-30.5deg)] [transform-origin:0_0]">
          Sample Images
        </b>
        <div className="absolute top-[8rem] left-[calc(50%_-_720px)] w-[90rem] h-[46.688rem] text-black">
          <div className="absolute top-[0rem] left-[calc(50%_-_720px)] bg-color w-[90rem] h-[46.688rem]" />
          <div className="absolute top-[3.125rem] left-[5.75rem] flex flex-row items-center justify-center">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[34.188rem] flex flex-col items-start justify-start">
                          <div className="flex flex-row items-center justify-center p-[0.625rem]">
                            <b className="w-[32.938rem] relative inline-block shrink-0">
                              <p className="m-0">
                                <span className="text-black">{`Discover `}</span>
                                <span className="text-primary">
                                  your best choice
                                </span>
                                <span> for web</span>
                              </p>
                              <p className="m-0">hosting in Nepal</p>
                            </b>
                          </div>
                          <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-grey-2">
                            <div className="w-[32.938rem] relative font-light inline-block shrink-0">{`Since 2018, Protozoa Host has led the way in providing the fastest cloud hosting in Nepal. Every day, we put our passion, dedication, and expertise into maintaining and optimising our customers' websites. `}</div>
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
                              Free Domain
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
                            <div className="relative font-medium">{`Free Backups, Migrations & SSL`}</div>
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
                              24/7 Customer Support
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
                              DDoS Protection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[0.375rem] text-[0.875rem] text-grey-3">
                      <div className="w-[22.625rem] rounded-9xs box-border flex flex-col items-start justify-center p-[0.875rem] border-[1px] border-solid border-primary">
                        <div className="relative font-light">
                          Yourdomainname.com
                        </div>
                      </div>
                      <div className="rounded-9xs bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-color">
                        <div className="relative font-medium">Search</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.125rem] text-grey-3">
                    <div className="relative">
                      <span>
                        <span>{`Start Hosting at just `}</span>
                        <span className="font-medium font-outfit-light-body-text-6">{`Rs `}</span>
                      </span>
                      <span className="text-[2rem] font-semibold">99.00</span>
                      <span className="font-medium">/mo</span>
                    </div>
                    <div className="relative font-medium text-primary">
                      +2 Months Free
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[1.812rem] text-[0.875rem] text-color">
                  <div className="rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem]">
                    <div className="relative font-medium whitespace-pre-wrap">
                      Purchase Hosting
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] text-primary border-[1px] border-solid border-primary">
                    <div className="relative font-medium">Cloud Solutions</div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[1rem] text-grey-2"
                onClick={openGetAQuotePopup}
              >
                <div className="relative font-medium">
                  <span>{`Looking For a Customized Solution? `}</span>
                  <span className="text-primary">Request a Quote</span>
                </div>
              </div>
            </div>
            <ContainerForm />
            <div className="w-[49.188rem] relative h-[32.112rem] hidden text-[0.544rem] font-inter">
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
                src="/nepal-11@2x.png"
              />
              <img
                className="absolute top-[16.244rem] left-[2.444rem] w-[2.444rem] h-[7.881rem] object-contain"
                alt=""
                src="/performance-11@2x.png"
              />
              <img
                className="absolute top-[24.613rem] left-[10.706rem] w-[7.388rem] h-[2.394rem] object-cover"
                alt=""
                src="/big-brand-11@2x.png"
              />
              <div className="absolute top-[9.588rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[14.644rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[19.1rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[22.519rem] left-[-0.025rem] box-border w-[39.444rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
              <div className="absolute top-[1.819rem] left-[36.431rem] box-border w-[0.056rem] h-[23.581rem] border-r-[0.9px] border-solid border-color" />
              <img
                className="absolute top-[3.238rem] left-[24.375rem] w-[24.813rem] h-[28.875rem] object-cover"
                alt=""
                src="/wepikexport20240401055453mwlb-11@2x.png"
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
                src="/group-2-101@2x.png"
              />
            </div>
          </div>
        </div>
        <FrameComponent17 />
        <FrameComponent16 />
        <div className="absolute top-[290.25rem] left-[0rem] w-[90rem] h-[67.563rem] text-center text-color">
          <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[90rem] h-[67.563rem]" />
          <div className="absolute top-[5.875rem] left-[5.375rem] flex flex-col items-start justify-start">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <b className="relative">
                  <p className="m-0">Built by ProtozoaHost.</p>
                  <p className="m-0">
                    For, well, everyone. Protozoa Host powers effectively.
                  </p>
                </b>
              </div>
              <div className="w-[79.188rem] flex flex-row items-center justify-start gap-[7.562rem] text-left text-[1.75rem]">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-[35.313rem] flex flex-col items-start justify-start gap-[0.75rem]">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-medium whitespace-pre-wrap">
                        Our Hosting scales
                      </div>
                    </div>
                    <div className="w-[35.313rem] flex flex-col items-start justify-center p-[0.625rem] box-border gap-[1.687rem] text-[1rem]">
                      <div className="w-[34.125rem] relative font-light flex items-center">
                        From new bloggers to seasoned developers, many of our
                        customers trust us for reliable, scalable web hosting in
                        Nepal. We know what it takes to keep your site running
                        at its best. With a legacy since 2018 and over 4000+
                        sites hosted, we know what it takes to keep your site
                        performing at its peak.
                      </div>
                      <div className="w-[33.563rem] relative font-light whitespace-pre-wrap flex items-center">
                        Trusted by web professionals, we’ve been excelling since
                        2018, hosting more than 4000+ sites with unparalleled
                        expertise.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[1.062rem] text-[1.875rem]">
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.5rem]">
                      <div className="relative font-semibold">99%</div>
                      <div className="relative text-[0.875rem] font-light">
                        of customers are web pros.
                      </div>
                    </div>
                    <div className="w-[0.031rem] relative box-border h-[5.281rem] border-r-[0.5px] border-solid border-color" />
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.5rem]">
                      <div className="relative font-semibold">4000+</div>
                      <div className="relative text-[0.875rem] font-light">
                        websites currently hosted.
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[35.75rem] relative h-[30.563rem]"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
            <FrameComponent14 />
          </div>
        </div>
        <FrameComponent13 />
        <div className="absolute top-[329.75rem] left-[8.125rem] rounded-[3.43px] w-[31.875rem] h-[7.625rem]" />
        <img
          className="absolute top-[70.625rem] left-[68.688rem] max-w-full overflow-hidden h-[1.75rem]"
          alt=""
          src="/vector-2.svg"
        />
        <FrameComponent11 />
        <GroupComponent4 />
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
          <FrameComponent10 />
        </div>
        <UseFrispes />
        <FrameComponent9 />
        <FrameComponent8 />
        <div className="absolute top-[148.063rem] left-[32.563rem] rounded-9xs w-[24.875rem] h-[75rem] hidden" />
        <div className="absolute top-[148.063rem] left-[59.313rem] rounded-9xs w-[24.875rem] h-[75rem] hidden" />
        <div className="absolute top-[653.963rem] left-[calc(50%_-_572px)] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[6.437rem]">
            <GroupComponent3 />
            <div className="w-[33.75rem] flex flex-col items-start justify-start gap-[1.875rem]">
              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                <div className="w-[24.938rem] relative font-semibold inline-block shrink-0">
                  Maximize Website Speed
                </div>
              </div>
              <div className="w-[33.75rem] flex flex-col items-start justify-start p-[0.625rem] box-border gap-[1.625rem] text-[1.125rem]">
                <div className="w-[33.125rem] flex flex-row items-start justify-start gap-[0.687rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                    Maximize website loading speed with LiteSpeed Web Server
                    technology.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className="w-[29.813rem] relative font-light inline-block shrink-0">
                    Enjoy optimized performance with advanced cache solutions.
                  </div>
                </div>
                <div className="w-[33.125rem] flex flex-row items-start justify-start gap-[0.687rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className="w-[31.625rem] relative font-light inline-block shrink-0">
                    Reduce website response times up to 3 times with Object
                    Cache for WordPress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent7 />
        <div className="absolute w-full top-[1021.775rem] right-[0rem] left-[0rem] h-[37.375rem] text-[1.125rem]">
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
                        src="/image-51@2x.png"
                      />
                    </div>
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-52@2x.png"
                      />
                    </div>
                    <div className="rounded-lg bg-color flex flex-col items-start justify-start py-[0rem] px-[0.625rem]">
                      <img
                        className="w-[3.438rem] relative h-[1.813rem] object-cover"
                        alt=""
                        src="/image-53@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent6 />
        <div className="absolute top-[829.188rem] left-[59.438rem] w-[22.938rem] h-[10.938rem]" />
        <div className="absolute top-[849.813rem] left-[61.25rem] w-[21.75rem] h-[11.125rem]" />
        <GroupComponent2 />
        <GroupComponent1 />
        <div className="absolute top-[364.088rem] left-[calc(50%_-_532px)] flex flex-row items-start justify-start gap-[2.625rem] text-[0.875rem] text-black">
          <RatingContainer />
          <img className="w-[0rem] relative h-[3.938rem]" alt="" />
          <RatingContainer />
          <div className="flex flex-row items-center justify-start py-[0.75rem] px-[0rem] gap-[1.125rem]">
            <div className="flex flex-col items-center justify-start">
              <img
                className="w-[5.938rem] relative h-[2.063rem] object-cover"
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <div className="relative">
                <span>4.5</span>
                <span className="font-light text-grey-2">/5</span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.375rem] text-[0.625rem] text-grey-2">
              <div className="flex flex-row items-start justify-start gap-[0.137rem]">
                <img
                  className="w-[1.113rem] relative h-[1.113rem]"
                  alt=""
                  src="/vector5.svg"
                />
                <img
                  className="w-[1.113rem] relative h-[1.113rem]"
                  alt=""
                  src="/vector6.svg"
                />
                <img
                  className="w-[1.113rem] relative h-[1.113rem]"
                  alt=""
                  src="/vector7.svg"
                />
                <img
                  className="w-[1.113rem] relative h-[1.113rem]"
                  alt=""
                  src="/vector8.svg"
                />
                <img
                  className="w-[1.113rem] relative h-[1.113rem]"
                  alt=""
                  src="/vector9.svg"
                />
              </div>
              <div className="w-[6.625rem] relative font-light inline-block h-[0.813rem] shrink-0">
                <span>{`Based on `}</span>
                <span className="text-royalblue">448 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[588.463rem] left-[11.25rem] flex flex-col items-center justify-start gap-[2.437rem]">
          <div className="flex flex-col items-center justify-start">
            <FrameComponent5
              migrate="Explore Our Global Network of "
              yourWebsiteInJustAFewStep="Data Centers."
              switchingHostingProviders=" Build Locally, Launch Worldwide. Protozoa Host offers the largest worldwide network, enabling you to spin up and easily scale a low latency infrastructure solution no matter where you or your customers may be"
              propColor="#000"
              propColor1="#102880"
              propWidth="65.563rem"
            />
          </div>
          <img
            className="w-[67.5rem] relative h-[34.938rem] object-cover"
            alt=""
            src="/map-png-1@2x.png"
          />
        </div>
        <GroupComponent />
        <PartnerContainer />
        <div className="absolute top-[725.275rem] left-[0rem] w-[90rem] h-[49.688rem]">
          <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(213.6deg,_#102880,_#1469cd)] w-[90rem] h-[49.688rem]" />
          <div className="absolute top-[2.963rem] left-[7.438rem] flex flex-col items-center justify-start gap-[1.562rem]">
            <FrameComponent3 />
            <FrameComponent1 />
          </div>
        </div>
        <FrameComponent />
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
    </>
  );
};

export default HomePage;
