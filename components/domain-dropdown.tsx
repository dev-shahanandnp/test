import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./domain-dropdown.module.css";

export type DomainDropdownType = {
  className?: string;
};

const DomainDropdown: NextPage<DomainDropdownType> = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Domain Registration" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Transfer Your Domain" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync ".np domain" to the project
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Domain Registration" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "Domain Registration" to the project
  }, []);

  const onFrameContainer22Click = useCallback(() => {
    // Please sync "SSL Checker" to the project
  }, []);

  return (
    <div className={[styles.domainDropdown, className].join(" ")}>
      <div className={styles.domainDropdownInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.domainRegistrationWrapper}>
              <div className={styles.domainRegistration}>
                Domain Registration
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv} onClick={onFrameContainerClick}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>
                      Search Your Domain
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} onClick={onFrameContainer1Click}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>
                      Transfer Your Domain
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} onClick={onFrameContainer2Click}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>
                      .np Free Domain
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameChild} />
            <div className={styles.frameParent7}>
              <div className={styles.frameDiv} onClick={onFrameContainer3Click}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>
                      SSL Certificates
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.frameDiv}
                onClick={onFrameContainer12Click}
              >
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>SSL Checker</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.frameDiv}
                onClick={onFrameContainer22Click}
              >
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.domainRegistrationWrapper}>
                    <div className={styles.searchYourDomain}>WHOis lookup</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent14}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.image28Wrapper}>
                      <img
                        className={styles.image28Icon}
                        alt=""
                        src="/image-28@2x.png"
                      />
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.domainRegistrationWrapper}>
                        <div className={styles.searchYourDomain}>
                          AI Logo Maker
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buildALogoWithAiInstantlyParent}>
                  <div className={styles.buildALogo}>
                    Build a Logo with AI Instantly
                  </div>
                  <div className={styles.yourOneStopSolution}>
                    Your one-stop solution for professional logo design. Try it
                    for free-no sign up needed!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper5}>
          <div className={styles.buildALogoNowParent}>
            <div className={styles.domainRegistration}>Build a logo now</div>
            <img
              className={styles.iconDiagonalArrowRightUp}
              alt=""
              src="/-icon-diagonal-arrow-right-up-outline2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.domainDropdownChild}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.image28Wrapper}>
                      <img
                        className={styles.image28Icon}
                        alt=""
                        src="/image-28@2x.png"
                      />
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.domainRegistrationWrapper}>
                        <div className={styles.searchYourDomain}>Featured</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buildALogoWithAiInstantlyParent}>
                  <div className={styles.chooseABest}>
                    Choose a Best Name for your Business.
                  </div>
                  <div
                    className={styles.yourOneStopSolution}
                  >{`Register your Domain at Nepal’s No.1 Domain Registrar & Get your Business online Today with our Web Hosting Plans.`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainDropdown;
