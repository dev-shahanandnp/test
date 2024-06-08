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
      <div
        className={`w-[77.5rem] flex flex-row items-center justify-start gap-[17rem] text-left text-[1rem] text-primary font-outfit-light-body-text-6 ${className}`}
      >
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
