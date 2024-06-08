import type { NextPage } from "next";
import Web from "./web";
import Cloud from "./cloud";
import Property1Default8 from "./property1-default8";
import styles from "./frame-component13.module.css";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: NextPage<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.discoverOurWideRangeOfProWrapper}>
          <b className={styles.discoverOurWideContainer}>
            <span>{`Discover Our Wide Range of `}</span>
            <span className={styles.productOfferings}>Product Offerings</span>
          </b>
        </div>
        <div className={styles.exploreOurExtensiveRangeOfWrapper}>
          <div className={styles.exploreOurExtensive}>
            Explore our extensive range of web hosting services in Nepal with
            affordable hosting charges, customized to meet your website’s unique
            needs.
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.webParent}>
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
              propLeft="834px"
              propTextAlign="left"
              propTextAlign1="left"
            />
          </div>
          <div className={styles.tomParent}>
            <Web
              image102="/image-100@2x.png"
              webHosting="Tomcat cPanel Hosting"
              getWebHosting="Get Tomcat cPanel"
              propLeft="0px"
              propBorderRadius="unset"
              propWidth="60px"
              propBackgroundColor="#102880"
              propBackgroundColor1="unset"
            />
            <Web
              image102="/image-103@2x.png"
              webHosting="cPanel Reseller Hosting"
              getWebHosting="Get cPanel Reseller"
              propLeft="834px"
              propBorderRadius="unset"
              propWidth="60px"
              propBackgroundColor="#102880"
              propBackgroundColor1="unset"
            />
            <Cloud
              image101="/image-98@2x.png"
              cloudHosting="Linux Cloud VPS Servers"
              getCloud="Get Linux Cloud"
              propLeft="417px"
              propTextAlign="center"
              propTextAlign1="left"
            />
          </div>
        </div>
        <div className={styles.windowsRdpParent}>
          <Web
            image102="/image-103@2x.png"
            webHosting="Windows RDP Hosting"
            getWebHosting="Get Windows RDP"
            propLeft="0px"
            propBorderRadius="35px"
            propWidth="60px"
            propBackgroundColor="#102880"
            propBackgroundColor1="unset"
          />
          <Web
            image102="/image-106@2x.png"
            webHosting="WPSquared WordPress Hosting"
            getWebHosting="Get WPSquared"
            propLeft="417px"
            propBorderRadius="unset"
            propWidth="106.4px"
            propBackgroundColor="#102880"
            propBackgroundColor1="unset"
          />
          <Property1Default8
            image107="/image-107@2x.png"
            property1DefaultPosition="absolute"
            property1DefaultTop="1px"
            property1DefaultLeft="834px"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
