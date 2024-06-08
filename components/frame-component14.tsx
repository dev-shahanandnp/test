import type { NextPage } from "next";
import FrameComponent15 from "./frame-component15";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[0.562rem] text-left text-[1.75rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-row items-center justify-center p-[0.625rem]">
        <div className="relative font-medium">Our Hosting Solutions</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[1.875rem] text-[1.25rem]">
        <div className="flex flex-row items-start justify-start gap-[4.062rem]">
          <FrameComponent15
            cPanel="cPanel"
            easyToUseControlPanelForM="Easy-to-use control panel for managing domains, emails, and files."
          />
          <FrameComponent15
            cPanel="WP Squared"
            easyToUseControlPanelForM="Managed WordPress hosting with top security and performance."
          />
          <FrameComponent15
            cPanel="Plesk Panel"
            easyToUseControlPanelForM="Versatile management for hosting, email, and security."
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[4.062rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center p-[0.625rem]">
              <b className="relative">VPS</b>
            </div>
            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem]">
              <div className="w-[22.375rem] relative font-light flex items-center shrink-0">
                <span className="w-full">
                  <p className="m-0">
                    Virtual Private Server hosting offering dedicated
                  </p>
                  <p className="m-0">
                    resources and greater control for your web
                  </p>
                  <p className="m-0">environments.</p>
                </span>
              </div>
            </div>
          </div>
          <FrameComponent15
            cPanel="Google Workspace"
            easyToUseControlPanelForM=" Suite of  cloud based tools for email, documents, and collaboration."
          />
          <FrameComponent15
            cPanel="Zoho Worksplace"
            easyToUseControlPanelForM="Suite of cloud-based productivity tools including email, document creation, and collaboration."
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
