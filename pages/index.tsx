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
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  const [isGetAQuotePopupOpen, setGetAQuotePopupOpen] = useState(false);

  const openGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(true);
  }, []);

  const closeGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(false);
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Affiliate" to the project
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  return (
    <>
      <div className={styles.homePage}>
        <img className={styles.divIcon} alt="" src="/div@2x.png" />
        <div className={styles.homePageChild} />
        <b className={styles.sampleImages}>Sample Images</b>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameParent3}>
                          <div
                            className={styles.discoverYourBestChoiceForWrapper}
                          >
                            <b className={styles.discoverYourBestContainer}>
                              <p className={styles.discoverYourBestChoiceFor}>
                                <span
                                  className={styles.discover}
                                >{`Discover `}</span>
                                <span className={styles.yourBestChoice}>
                                  your best choice
                                </span>
                                <span> for web</span>
                              </p>
                              <p className={styles.discoverYourBestChoiceFor}>
                                hosting in Nepal
                              </p>
                            </b>
                          </div>
                          <div
                            className={styles.since2018ProtozoaHostHasWrapper}
                          >
                            <div
                              className={styles.since2018Protozoa}
                            >{`Since 2018, Protozoa Host has led the way in providing the fastest cloud hosting in Nepal. Every day, we put our passion, dedication, and expertise into maintaining and optimising our customers' websites. `}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.mditickCircleOutlineParent}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>Free Domain</div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div
                              className={styles.freeDomain}
                            >{`Free Backups, Migrations & SSL`}</div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>
                              24/7 Customer Support
                            </div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>
                              DDoS Protection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.yourdomainnamecomWrapper}>
                        <div className={styles.yourdomainnamecom}>
                          Yourdomainname.com
                        </div>
                      </div>
                      <div className={styles.searchWrapper}>
                        <div className={styles.freeDomain}>Search</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.startHostingAtJustRs9900Parent}>
                    <div className={styles.startHostingAtContainer}>
                      <span>
                        <span>{`Start Hosting at just `}</span>
                        <span className={styles.rs}>{`Rs `}</span>
                      </span>
                      <span className={styles.span}>99.00</span>
                      <span className={styles.mo}>/mo</span>
                    </div>
                    <div className={styles.monthsFree}>+2 Months Free</div>
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.purchaseHostingWrapper}>
                    <div className={styles.purchaseHosting}>
                      Purchase Hosting
                    </div>
                  </div>
                  <div className={styles.cloudSolutionsWrapper}>
                    <div className={styles.freeDomain}>Cloud Solutions</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.lookingForACustomizedSolutWrapper}
                onClick={openGetAQuotePopup}
              >
                <div className={styles.freeDomain}>
                  <span>{`Looking For a Customized Solution? `}</span>
                  <span className={styles.yourBestChoice}>Request a Quote</span>
                </div>
              </div>
            </div>
            <ContainerForm />
            <div className={styles.lineParent}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <img className={styles.lineIcon} alt="" />
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild1} />
              <div className={styles.lineDiv} />
              <div
                className={styles.cpanelDashboard}
              >{`cPanel Dashboard `}</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.sslCertificate}>SSL Certificate</div>
                <div className={styles.groupChild3} />
                <div className={styles.active}>Active</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild4} />
                <div className={styles.fileManager}>File Manager</div>
                <img
                  className={styles.folder1Icon}
                  alt=""
                  src="/folder-11.svg"
                />
              </div>
              <div className={styles.groupChild5} />
              <div className={styles.groupDiv}>
                <div className={styles.groupChild4} />
                <div className={styles.databases}>Databases</div>
                <img
                  className={styles.database21}
                  alt=""
                  src="/database-2-11.svg"
                />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.groupChild4} />
                <div className={styles.wordpressOverview}>
                  Wordpress Overview
                </div>
                <img
                  className={styles.wordpress31}
                  alt=""
                  src="/wordpress-3-11.svg"
                />
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild8} />
                <div className={styles.performanceScoreForProtozoaParent}>
                  <div className={styles.performanceScoreForContainer}>
                    <p className={styles.discoverYourBestChoiceFor}>
                      Performance score for
                    </p>
                    <p className={styles.discoverYourBestChoiceFor}>
                      protozoahost.com
                    </p>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>0-49</div>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div}>50-89</div>
                    <div className={styles.groupChild9} />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.div}>90-100</div>
                    <div className={styles.groupChild10} />
                  </div>
                  <div className={styles.groupChild11} />
                  <div className={styles.div3}>99</div>
                </div>
              </div>
              <div className={styles.businessParent}>
                <div className={styles.business}>Business</div>
                <div className={styles.active1}>Active</div>
                <div className={styles.seeDetails}>See Details</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915264.svg"
                />
              </div>
              <div className={styles.domainParent}>
                <div className={styles.domain}>Domain</div>
                <div className={styles.active2}>Active</div>
                <div className={styles.manage}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915265.svg"
                />
              </div>
              <div className={styles.businessEmailParent}>
                <div className={styles.domain}>Business Email</div>
                <div className={styles.active2}>Active</div>
                <div className={styles.manage}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915266.svg"
                />
              </div>
              <div className={styles.dailyBackupsParent}>
                <div className={styles.domain}>Daily backups</div>
                <div className={styles.active2}>Active</div>
                <div className={styles.manage}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915267.svg"
                />
              </div>
              <img className={styles.nepal1Icon} alt="" src="/nepal-1@2x.png" />
              <img
                className={styles.performance1Icon}
                alt=""
                src="/performance-1@2x.png"
              />
              <img
                className={styles.bigBrand1}
                alt=""
                src="/big-brand-1@2x.png"
              />
              <div className={styles.groupChild12} />
              <div className={styles.groupChild13} />
              <div className={styles.groupChild14} />
              <div className={styles.groupChild15} />
              <div className={styles.groupChild16} />
              <img
                className={styles.wepikExport20240401055453mwlIcon}
                alt=""
                src="/wepikexport20240401055453mwlb-1@2x.png"
              />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild17} />
                <div className={styles.groupParent}>
                  <div className={styles.safeParent}>
                    <div className={styles.safe}>Safe</div>
                    <div className={styles.noMalwareFound}>
                      No malware found
                    </div>
                    <div className={styles.seeMalwareScanner}>
                      See malware scanner
                    </div>
                  </div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-821.svg"
                  />
                </div>
              </div>
              <img
                className={styles.group210}
                alt=""
                src="/group-2-10@2x.png"
              />
            </div>
          </div>
        </div>
        <FrameComponent17 />
        <FrameComponent16 />
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild18} />
          <div className={styles.frameParent7}>
            <div className={styles.image27Wrapper}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <b className={styles.startHostingAtContainer}>
                  <p className={styles.discoverYourBestChoiceFor}>
                    Built by ProtozoaHost.
                  </p>
                  <p className={styles.discoverYourBestChoiceFor}>
                    For, well, everyone. Protozoa Host powers effectively.
                  </p>
                </b>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent11}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.purchaseHosting}>
                        Our Hosting scales
                      </div>
                    </div>
                    <div className={styles.fromNewBloggersToSeasonedParent}>
                      <div className={styles.fromNewBloggers}>
                        From new bloggers to seasoned developers, many of our
                        customers trust us for reliable, scalable web hosting in
                        Nepal. We know what it takes to keep your site running
                        at its best. With a legacy since 2018 and over 4000+
                        sites hosted, we know what it takes to keep your site
                        performing at its peak.
                      </div>
                      <div className={styles.trustedByWeb}>
                        Trusted by web professionals, we’ve been excelling since
                        2018, hosting more than 4000+ sites with unparalleled
                        expertise.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent12}>
                    <div className={styles.parent1}>
                      <div className={styles.hostings}>99%</div>
                      <div className={styles.ofCustomersAre}>
                        of customers are web pros.
                      </div>
                    </div>
                    <div className={styles.frameChild} />
                    <div className={styles.parent1}>
                      <div className={styles.hostings}>4000+</div>
                      <div className={styles.ofCustomersAre}>
                        websites currently hosted.
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.frameItem} alt="" src="/group-3.svg" />
              </div>
            </div>
            <FrameComponent14 />
          </div>
        </div>
        <FrameComponent13 />
        <div className={styles.homePageItem} />
        <img className={styles.homePageInner} alt="" src="/vector-2.svg" />
        <FrameComponent11 />
        <GroupComponent4 />
        <div className={styles.navBar}>
          <div className={styles.navBarInner}>
            <div className={styles.frameParent13}>
              <div className={styles.frameParent14}>
                <div className={styles.calling2Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/calling-2.svg"
                  />
                  <div className={styles.yourdomainnamecom}>9851316413</div>
                </div>
                <div className={styles.envelope1Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/envelope-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>
                    support@protozoahost.com
                  </div>
                </div>
                <div
                  className={styles.money11Parent}
                  onClick={onFrameContainer2Click}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/money-1-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Affiliates</div>
                </div>
                <div className={styles.calling2Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/blog-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Blogs</div>
                </div>
                <div
                  className={styles.money11Parent}
                  onClick={onFrameContainer4Click}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/headset-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Contact</div>
                </div>
                <div
                  className={styles.infoButton1Parent}
                  onClick={onFrameContainer5Click}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/infobutton-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>About Us</div>
                </div>
              </div>
              <div className={styles.frameParent15}>
                <div className={styles.facebook11Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/facebook-1-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/instagramlogo-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/twitter-1-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/linkedin-1-1.svg"
                  />
                </div>
                <img className={styles.iconMenu} alt="" src="/-icon-menu.svg" />
              </div>
            </div>
          </div>
          <FrameComponent10 />
        </div>
        <UseFrispes />
        <FrameComponent9 />
        <FrameComponent8 />
        <div className={styles.homePageChild1} />
        <div className={styles.homePageChild2} />
        <div className={styles.homePageInner1}>
          <div className={styles.groupContainer}>
            <GroupComponent3 />
            <div className={styles.frameParent16}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <div className={styles.maximizeWebsiteSpeed}>
                  Maximize Website Speed
                </div>
              </div>
              <div className={styles.frameParent17}>
                <div className={styles.mdicheckBoldParent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.maximizeWebsiteLoading}>
                    Maximize website loading speed with LiteSpeed Web Server
                    technology.
                  </div>
                </div>
                <div className={styles.facebook11Parent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.enjoyOptimizedPerformance}>
                    Enjoy optimized performance with advanced cache solutions.
                  </div>
                </div>
                <div className={styles.mdicheckBoldParent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.maximizeWebsiteLoading}>
                    Reduce website response times up to 3 times with Object
                    Cache for WordPress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent7 />
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.frameParent18}>
            <div className={styles.frameParent19}>
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <div className={styles.vectorWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.hostingsWrapper}>
                        <div className={styles.hostings}>Hostings</div>
                      </div>
                      <div className={styles.domainRegistrationInNepalParent}>
                        <div className={styles.yourdomainnamecom}>
                          Domain Registration In Nepal
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Shared Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          WordPress Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          VPS Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Windows Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Reseller Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Nepal Based-Local Data Center Hosting
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Information</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>
                            Affiliate Program
                          </div>
                          <div
                            className={styles.yourdomainnamecom}
                          >{`Data Center & Servers`}</div>
                          <div className={styles.yourdomainnamecom}>
                            Payment Methods
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Server Status
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Free Website Migration
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Company</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>About</div>
                          <div className={styles.yourdomainnamecom}>
                            Affiliates
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Careers
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Partners
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Reviews
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper4}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Help</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>
                            Tutorials
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Knowledge Base
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Repost Abuse
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Contact Us
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.frameParent26}>
                      <div className={styles.frameDiv}>
                        <div className={styles.questionsWereHere}>
                          Questions? We’re here to help
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Available 9am–8pm CT, 7 days a week.
                        </div>
                      </div>
                      <div className={styles.frameParent27}>
                        <div className={styles.frameParent28}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/chat-223402-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Chat
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div className={styles.yourdomainnamecom}>
                                  Messenger and Instagram
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward}
                            alt=""
                            src="/-icon-arrow-ios-forward.svg"
                          />
                        </div>
                        <div className={styles.frameParent30}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/email-3-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Call
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div
                                  className={styles.yourdomainnamecom}
                                >{`+9779851316413 `}</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward1}
                            alt=""
                            src="/-icon-arrow-ios-forward1.svg"
                          />
                        </div>
                        <div className={styles.frameParent32}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/email-4-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Email
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div className={styles.yourdomainnamecom}>
                                  support@protozoahost.com
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward2}
                            alt=""
                            src="/-icon-arrow-ios-forward2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent34}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.yourdomainnamecom}>
                    Your IP is Being Monitored for Security Purposes.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent35}>
              <div className={styles.frameParent36}>
                <div className={styles.frameParent37}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>About Us</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div
                      className={styles.yourdomainnamecom}
                    >{`Cancellation & Refunds Policy`}</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>
                      Terms and Conditions
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>
                      Privacy Policy
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>Legal</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>Sitemap</div>
                  </div>
                </div>
                <div className={styles.frameParent38}>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/facebook-1-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/instagramlogo-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/twitter-1-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/linkedin-1-11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameChild6} />
              <div className={styles.frameParent39}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.yourdomainnamecom}>
                    Copyright © 2018 - 2023 Protozoa Host Pvt. Ltd. | All Rights
                    Reserved.
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameParent40}>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Container}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Container}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Container}>
                      <img
                        className={styles.image5Icon}
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
        <FrameComponent6 />
        <div className={styles.layer0Copy2} />
        <div className={styles.layer111} />
        <GroupComponent2 />
        <GroupComponent1 />
        <div className={styles.frameParent41}>
          <RatingContainer />
          <img className={styles.frameChild7} alt="" />
          <RatingContainer />
          <div className={styles.frameParent42}>
            <div className={styles.image27Wrapper}>
              <img
                className={styles.image27Icon}
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <div className={styles.startHostingAtContainer}>
                <span>4.5</span>
                <span className={styles.span1}>/5</span>
              </div>
            </div>
            <div className={styles.iconStarParent}>
              <div className={styles.iconStar}>
                <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
              </div>
              <div className={styles.basedOn448Container}>
                <span>{`Based on `}</span>
                <span className={styles.reviews1}>448 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent43}>
          <div className={styles.image27Wrapper}>
            <FrameComponent5
              migrate="Explore Our Global Network of "
              yourWebsiteInJustAFewStep="Data Centers."
              switchingHostingProviders=" Build Locally, Launch Worldwide. Protozoa Host offers the largest worldwide network, enabling you to spin up and easily scale a low latency infrastructure solution no matter where you or your customers may be"
              propColor="#000"
              propColor1="#102880"
              propWidth="1049px"
            />
          </div>
          <img className={styles.mapPng1} alt="" src="/map-png-1@2x.png" />
        </div>
        <GroupComponent />
        <PartnerContainer />
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild19} />
          <div className={styles.frameParent44}>
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
