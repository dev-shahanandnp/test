import type { NextPage } from "next";
import Web from "./web";
import Cloud from "./cloud";
import Property1Default8 from "./property1-default8";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: NextPage<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[175.538rem] left-[calc(50%_-_616px)] flex flex-col items-center justify-start gap-[3.125rem] text-left text-[2rem] text-black font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[1rem]">
        <div className="flex flex-row items-center justify-center">
          <b className="relative">
            <span>{`Discover Our Wide Range of `}</span>
            <span className="text-primary">Product Offerings</span>
          </b>
        </div>
        <div className="flex flex-row items-center justify-center text-center text-[1.25rem] text-grey-2">
          <div className="w-[50rem] relative font-light flex items-center justify-center shrink-0">
            Explore our extensive range of web hosting services in Nepal with
            affordable hosting charges, customized to meet your website’s unique
            needs.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[1.25rem] text-center text-[1.25rem]">
        <div className="w-[76.938rem] relative h-[50.875rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[76.938rem] h-[24.875rem]">
            <Web
              image102="/image-102@2x.png"
              webHosting="Web Hosting"
              getWebHosting="Get Web Hosting"
            />
            <Cloud
              image101="/image-101@2x.png"
              cloudHosting="Cloud Hosting"
              getCloud="Get Cloud"
            />
            <Cloud
              image101="/image-96@2x.png"
              cloudHosting="Windows/ASP .NET Hosting"
              getCloud="Get Windows Plesk"
              propLeft="52.125rem"
              propTextAlign="left"
              propTextAlign1="left"
            />
          </div>
          <div className="absolute top-[26.125rem] left-[0rem] w-[76.938rem] h-[24.75rem]">
            <Web
              image102="/image-100@2x.png"
              webHosting="Tomcat cPanel Hosting"
              getWebHosting="Get Tomcat cPanel"
              propLeft="0rem"
              propBorderRadius="unset"
              propWidth="3.75rem"
              propBackgroundColor="#102880"
              propBackgroundColor1="unset"
            />
            <Web
              image102="/image-103@2x.png"
              webHosting="cPanel Reseller Hosting"
              getWebHosting="Get cPanel Reseller"
              propLeft="52.125rem"
              propBorderRadius="unset"
              propWidth="3.75rem"
              propBackgroundColor="#102880"
              propBackgroundColor1="unset"
            />
            <Cloud
              image101="/image-98@2x.png"
              cloudHosting="Linux Cloud VPS Servers"
              getCloud="Get Linux Cloud"
              propLeft="26.063rem"
              propTextAlign="center"
              propTextAlign1="left"
            />
          </div>
        </div>
        <div className="w-[76.938rem] relative h-[24.75rem]">
          <Web
            image102="/image-1031@2x.png"
            webHosting="Windows RDP Hosting"
            getWebHosting="Get Windows RDP"
            propLeft="0rem"
            propBorderRadius="35px"
            propWidth="3.75rem"
            propBackgroundColor="#102880"
            propBackgroundColor1="unset"
          />
          <Web
            image102="/image-106@2x.png"
            webHosting="WPSquared WordPress Hosting"
            getWebHosting="Get WPSquared"
            propLeft="26.063rem"
            propBorderRadius="unset"
            propWidth="6.65rem"
            propBackgroundColor="#102880"
            propBackgroundColor1="unset"
          />
          <Property1Default8
            image107="/image-107@2x.png"
            property1DefaultPosition="absolute"
            property1DefaultTop="0.063rem"
            property1DefaultLeft="52.125rem"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
