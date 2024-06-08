import type { NextPage } from "next";
import styles from "./hosting-dropdown.module.css";

export type HostingDropdownType = {
  className?: string;
};

const HostingDropdown: NextPage<HostingDropdownType> = ({ className = "" }) => {
  return (
    <div className={[styles.hostingDropdown, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.sharedHostingWrapper}>
              <div className={styles.sharedHosting}>Shared Hosting</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.database1Icon}
                    alt=""
                    src="/database-1@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>Web Hosting</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>
                      Combo cPanel Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>
                      Cloud cPanel Hosting
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
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>
                      Business cPanel Hosting
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
          <div className={styles.frameParent9}>
            <div className={styles.frameChild} />
            <div className={styles.frameParent10}>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div
                      className={styles.webHosting}
                    >{`Python & Django Hosting`}</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>
                      {" "}
                      Node.JS cPanel Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.sharedHostingWrapper}>
                    <div className={styles.webHosting}>
                      Tomcat cPanel Hosting
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
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.sharedHostingWrapper}>
            <div className={styles.sharedHosting}>Windows Hosting</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.webHosting}>
                    Windows Plesk MSSQL 2019
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.webHosting}>
                    PowerMax Windows MSSQL 2022
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.webHosting}>
                    Nepali Windows Plesk Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Instantly Access Domain Ownership and Registration Details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.sharedHostingWrapper}>
            <div className={styles.sharedHosting}>WordPress Hosting</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.wordpressHosting1}>
                    WordPress Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/reseller-1@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.webHosting}>WPSquared Pro Hosting</div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image28Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sharedHostingWrapper}>
                  <div className={styles.webHosting}>
                    Nepali WordPress Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Instantly Access Domain Ownership and Registration Details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingDropdown;
