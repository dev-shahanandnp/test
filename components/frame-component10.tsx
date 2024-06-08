import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DomainDropdown from "./domain-dropdown";
import PortalPopup from "./portal-popup";
import HostingDropdown from "./hosting-dropdown";
import Reseller from "./reseller";
import ServersAndVPS from "./servers-and-v-p-s";
import CloudSolutions from "./cloud-solutions";
import Support from "./support";
import MyAccount from "./my-account";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
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
      <div className={[styles.logoParent, className].join(" ")}>
        <div className={styles.logo}>
          <img
            className={styles.protozoahostlogo11E169560957Icon}
            alt=""
            src="/protozoahostlogo11e1695609575419-1@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.domainsParent} onClick={openDomainDropdown}>
            <div className={styles.domains}>Domains</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openHostingDropdown}>
            <div className={styles.domains}>Hostings</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openReseller}>
            <div className={styles.domains}>Reseller</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openServersAndVPS}>
            <div className={styles.domains}>{`Server & VPS`}</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openCloudSolutions}>
            <div className={styles.domains}>Cloud Solutions</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openSupport}>
            <div className={styles.domains}>Support</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.domainsParent} onClick={openMyAccount}>
            <div className={styles.domains}>My Account</div>
            <div className={styles.iconArrowDownWrapper}>
              <div className={styles.iconArrowDown}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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

export default FrameComponent10;
