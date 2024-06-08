import type { NextPage } from "next";
import { useState, useCallback } from "react";
import PaymentTermPopup from "./payment-term-popup";
import PortalPopup from "./portal-popup";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  const [isPaymentTermPopupOpen, setPaymentTermPopupOpen] = useState(false);

  const openPaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(true);
  }, []);

  const closePaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.headParent, className].join(" ")}>
        <div className={styles.head}>
          <div className={styles.subtitle}>
            <p className={styles.protozoaHostOffers}>
              Protozoa Host offers a variety of hosting plans to suit your
              needs. Whether you're starting a blog
            </p>
            <p className={styles.protozoaHostOffers}>
              or running a large business, we have the perfect plan.
            </p>
          </div>
          <b className={styles.title}>
            <p className={styles.protozoaHostOffers}>
              <span>{`Find the Perfect `}</span>
              <span className={styles.hostingPlan}>Hosting Plan</span>
              <span className={styles.forYou}> for You</span>
            </p>
          </b>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.monthlyWrapper}>
              <div className={styles.monthly}>Monthly</div>
            </div>
            <div className={styles.annuallyWrapper}>
              <div className={styles.monthly}>Annually</div>
            </div>
            <div className={styles.monthlyWrapper}>
              <div className={styles.monthly}>Tri-Annually</div>
            </div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent4}>
                          <div className={styles.frameParent5}>
                            <div className={styles.frameParent4}>
                              <div className={styles.comboHostingWrapper}>
                                <div className={styles.monthly}>
                                  Combo Hosting
                                </div>
                              </div>
                              <div
                                className={
                                  styles.everythingYouNeedToCreateWrapper
                                }
                              >
                                <div className={styles.everythingYouNeed}>
                                  Everything you need to create your website
                                </div>
                              </div>
                            </div>
                            <div className={styles.frameWrapper}>
                              <div
                                className={styles.withA1YrTerm30SavingsWrapper}
                              >
                                <div className={styles.monthly}>
                                  with a 1-yr term (30% Savings)
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rs1999yearParent}>
                            <div className={styles.rs1999year}>
                              <span>{`Rs `}</span>
                              <span className={styles.span}>1999</span>
                              <span>/year</span>
                            </div>
                            <div className={styles.monthsFree}>
                              +3 months FREE
                            </div>
                          </div>
                        </div>
                        <div className={styles.addToCartWrapper}>
                          <div className={styles.monthly}>Add to Cart</div>
                        </div>
                      </div>
                      <div className={styles.moWhenYouRenewWrapper}>
                        <div className={styles.everythingYouNeed}>
                          $7.99/mo when you renew
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineWrapper}>
                      <div className={styles.frameChild} />
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Free .com</span>
                        <span> </span>
                        <span className={styles.domain}>Domain</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Single</span>
                        <span> </span>
                        <span className={styles.domain}>Domain</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Five</span>
                        <span> </span>
                        <span className={styles.domain}>Sub Domain</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>2 GB</span>
                        <span> </span>
                        <span className={styles.domain}>Storage</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>2 GB</span>
                        <span> </span>
                        <span className={styles.domain}>RAM</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>3 MySQL</span>
                        <span> </span>
                        <span className={styles.domain}>Database</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Unmetered</span>
                        <span> </span>
                        <span className={styles.domain}>Bandwidth</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Control Panel</span>
                        <span> </span>
                        <span className={styles.domain}>cPanel</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div
                        className={styles.wordpressSoftaculous}
                      >{`WordPress & Softaculous`}</div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>5 Email</span>
                        <span> </span>
                        <span className={styles.domain}>Accounts</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Basic</span>
                        <span> </span>
                        <span className={styles.domain}>Performance</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>24 x 7</span>
                        <span> </span>
                        <span className={styles.domain}>Support</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Free SSL</span>
                        <span> </span>
                        <span className={styles.domain}>Certificate</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>No Backup</span>
                        <span> </span>
                        <span className={styles.domain}>Included</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.comboHostingWrapper}>
                    <div className={styles.monthly}>See all features</div>
                  </div>
                  <img
                    className={styles.mdiarrowDownDropIcon}
                    alt=""
                    src="/mdiarrowdowndrop.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.frameContainer}>
                  <div className={styles.frameParent10}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent2}>
                          <div className={styles.frameParent4}>
                            <div className={styles.frameParent5}>
                              <div className={styles.frameParent4}>
                                <div className={styles.comboHostingWrapper}>
                                  <div className={styles.monthly}>
                                    WordPress Hosting
                                  </div>
                                </div>
                                <div
                                  className={
                                    styles.everythingYouNeedToCreateWrapper
                                  }
                                >
                                  <div className={styles.everythingYouNeed}>
                                    Ideal for Beginners
                                  </div>
                                </div>
                              </div>
                              <div className={styles.frameWrapper}>
                                <div
                                  className={
                                    styles.withA1YrTerm30SavingsWrapper
                                  }
                                >
                                  <div className={styles.monthly}>
                                    with a 1-yr term (30% Savings)
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.rs1999yearParent}>
                              <div className={styles.rs1999year}>
                                <span>{`Rs `}</span>
                                <span className={styles.span}>1999</span>
                                <span>/year</span>
                              </div>
                              <div className={styles.monthsFree}>
                                +3 months FREE
                              </div>
                            </div>
                          </div>
                          <div className={styles.addToCartContainer}>
                            <div className={styles.monthly}>Add to Cart</div>
                          </div>
                        </div>
                        <div className={styles.moWhenYouRenewWrapper}>
                          <div className={styles.everythingYouNeed}>
                            $7.99/mo when you renew
                          </div>
                        </div>
                      </div>
                      <div className={styles.lineWrapper}>
                        <div className={styles.frameChild} />
                      </div>
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>Single</span>
                          <span> </span>
                          <span className={styles.domain}>Domain</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>Unlimited</span>
                          <span> </span>
                          <span className={styles.domain}>Sub Domain</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>10 GB</span>
                          <span> </span>
                          <span className={styles.domain}>NVME Storage</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>Unlimited</span>
                          <span> </span>
                          <span className={styles.domain}>MySQL Database</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>Unmetered</span>
                          <span> </span>
                          <span className={styles.domain}>Bandwidth</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>50x</span>
                          <span> </span>
                          <span className={styles.domain}>Performance</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>2 GB</span>
                          <span> </span>
                          <span className={styles.domain}>RAM</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>10MB/s</span>
                          <span> </span>
                          <span className={styles.domain}>IO</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>1024</span>
                          <span> </span>
                          <span className={styles.domain}>IOPS</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>20</span>
                          <span> </span>
                          <span className={styles.domain}>EP</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>100</span>
                          <span> </span>
                          <span className={styles.domain}>NPROC</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>Fully</span>
                          <span> </span>
                          <span className={styles.domain}>
                            Managed WordPress
                          </span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>WordPress</span>
                          <span> </span>
                          <span className={styles.domain}>Optimised</span>
                        </div>
                      </div>
                      <div className={styles.mdicheckBoldParent}>
                        <img
                          className={styles.mdicheckBoldIcon}
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className={styles.freeComDomain}>
                          <span className={styles.freeCom}>WordPress</span>
                          <span> </span>
                          <span className={styles.domain}>Acceleration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8}>
                    <div className={styles.comboHostingWrapper}>
                      <div className={styles.monthly}>See all features</div>
                    </div>
                    <img
                      className={styles.mdiarrowDownDropIcon}
                      alt=""
                      src="/mdiarrowdowndrop.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.mostPopularWrapper}>
                <div className={styles.mostPopular}>MOST POPULAR</div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent4}>
                          <div className={styles.frameParent5}>
                            <div className={styles.frameParent4}>
                              <div
                                className={styles.pythonNodeJsHostingWrapper}
                              >
                                <div
                                  className={styles.monthly}
                                >{`Python & Node Js Hosting`}</div>
                              </div>
                              <div
                                className={
                                  styles.everythingYouNeedToCreateWrapper
                                }
                              >
                                <div
                                  className={styles.everythingYouNeed}
                                >{`Code Smart, Spend Smarter `}</div>
                              </div>
                            </div>
                            <div className={styles.frameWrapper}>
                              <div
                                className={styles.withA1YrTerm30SavingsWrapper}
                              >
                                <div className={styles.monthly}>
                                  with a 1-yr term (30% Savings)
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rs1999yearParent}>
                            <div className={styles.rs1999year}>
                              <span>{`Rs `}</span>
                              <span className={styles.span}>1999</span>
                              <span>/year</span>
                            </div>
                            <div className={styles.monthsFree}>
                              +3 months FREE
                            </div>
                          </div>
                        </div>
                        <div className={styles.addToCartWrapper}>
                          <div className={styles.monthly}>Add to Cart</div>
                        </div>
                      </div>
                      <div className={styles.moWhenYouRenewWrapper}>
                        <div className={styles.everythingYouNeed}>
                          $7.99/mo when you renew
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineWrapper}>
                      <div className={styles.frameChild} />
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Single</span>
                        <span> </span>
                        <span className={styles.domain}>Domain</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Unlimited</span>
                        <span> </span>
                        <span className={styles.domain}>Sub Domain</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>10 GB</span>
                        <span> </span>
                        <span className={styles.domain}>NVME Storage</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Unlimited</span>
                        <span> </span>
                        <span className={styles.domain}>MySQL Database</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Support</span>
                        <span> </span>
                        <span className={styles.domain}>PostgreSQL</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Unmetered</span>
                        <span> </span>
                        <span className={styles.domain}>Bandwidth</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>2 GB</span>
                        <span> </span>
                        <span className={styles.domain}>RAM</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>WordPress</span>
                        <span> </span>
                        <span className={styles.domain}>Optimised</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span
                          className={styles.freeCom}
                        >{`Softaculous App `}</span>
                        <span className={styles.domain}>Installer</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Control Panel</span>
                        <span> </span>
                        <span className={styles.domain}>cPanel</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Terminal</span>
                        <span> </span>
                        <span className={styles.domain}>Included</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span
                          className={styles.freeCom}
                        >{`Python & Node JS`}</span>
                        <span> </span>
                        <span className={styles.domain}>Support</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Malware</span>
                        <span> </span>
                        <span className={styles.domain}>Scanner</span>
                      </div>
                    </div>
                    <div className={styles.mdicheckBoldParent}>
                      <img
                        className={styles.mdicheckBoldIcon}
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className={styles.freeComDomain}>
                        <span className={styles.freeCom}>Cloudlinux</span>
                        <span> </span>
                        <span className={styles.domain}>OS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.comboHostingWrapper}>
                    <div className={styles.monthly}>See all features</div>
                  </div>
                  <img
                    className={styles.mdiarrowDownDropIcon}
                    alt=""
                    src="/mdiarrowdowndrop.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.paymentTermsWrapper}
            onClick={openPaymentTermPopup}
          >
            <div className={styles.mostPopular}>Payment terms</div>
          </div>
        </div>
      </div>
      {isPaymentTermPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent7;
