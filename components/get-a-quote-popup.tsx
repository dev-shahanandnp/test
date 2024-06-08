import type { NextPage } from "next";
import FrameComponent19 from "./frame-component19";

export type GetAQuotePopupType = {
  className?: string;
};

const GetAQuotePopup: NextPage<GetAQuotePopupType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[70.625rem] relative rounded-9xs bg-color h-[45.5rem] overflow-hidden max-w-full max-h-full text-left text-[1rem] text-color font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[70.625rem] h-[45.506rem]" />
      <img
        className="absolute top-[0rem] left-[0rem] w-[70.625rem] h-[45.5rem] overflow-hidden object-contain opacity-[0.2]"
        alt=""
        src="/frame@2x.png"
      />
      <div className="absolute top-[8.313rem] left-[5.188rem] flex flex-col items-start justify-start text-[1.169rem]">
        <div className="flex flex-row items-center justify-center p-[0.531rem]">
          <div className="relative font-semibold">
            The Story Behind Name Protozoa Host
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.531rem] text-[0.85rem]">
          <div className="w-[20.819rem] relative font-light inline-block shrink-0">
            Protozoa Host embodies the spirit of the protozoan thriving in harsh
            environments. Our name signifies our dedication to resilience and
            longevity in the competitive world of hosting.
          </div>
        </div>
      </div>
      <div className="absolute top-[17.313rem] left-[5.188rem] flex flex-row items-center justify-center gap-[1.806rem]">
        <img
          className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
          alt=""
          src="/goal-1.svg"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center p-[0.531rem]">
            <div className="relative font-semibold">Milestones Achieved</div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.531rem] text-[0.875rem]">
            <div className="w-[20.819rem] relative font-light inline-block shrink-0">
              <p className="m-0">Established: 2018</p>
              <p className="m-0">Client's Trust: Over 2000+</p>
              <p className="m-0">Sites Hosted: 5000+</p>
              <p className="m-0">Private Corporate Partnerships: 100+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[25.813rem] left-[5.188rem] flex flex-row items-center justify-center gap-[1.806rem]">
        <img
          className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
          alt=""
          src="/excellence-1.svg"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center p-[0.531rem]">
            <div className="relative font-semibold">
              Commitment to Excellence
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.531rem] text-[0.875rem]">
            <div className="w-[20.819rem] relative font-light inline-block shrink-0">
              Our commitment is to navigate challenges and continue our journey
              with unwavering determination, ensuring that while others may fade
              away, we are here to stay.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[34.313rem] left-[5.188rem] flex flex-row items-center justify-center gap-[1.806rem]">
        <img
          className="w-[3.125rem] relative h-[3.125rem] overflow-hidden shrink-0"
          alt=""
          src="/24hours-1.svg"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center p-[0.531rem]">
            <div className="relative font-semibold">
              Service and 24x7 Support
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-[0.531rem] text-[0.875rem]">
            <div className="w-[20.819rem] relative font-light inline-block shrink-0">
              Protozoa Host offers round-the-clock customer support and
              dedicated service to ensure your hosting needs are met with
              reliability and professionalism any time of day.
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[60.431rem] left-[15.131rem] rounded-[42.91px] w-[5.363rem] h-[5.363rem] object-cover"
        alt=""
        src="/rectangle-80@2x.png"
      />
      <div className="absolute top-[3.063rem] left-[5.188rem] flex flex-row items-center justify-center p-[0.625rem] text-[2rem]">
        <b className="relative">Get a Quotation !</b>
      </div>
      <img
        className="absolute top-[0.5rem] left-[68.625rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/jamclose1.svg"
      />
      <div className="absolute top-[5.438rem] left-[34.938rem] shadow-[4px_4px_17.6px_-10px_rgba(0,_0,_0,_0.2)] w-[30.313rem] h-[34.625rem] text-[0.875rem]">
        <div className="absolute top-[0rem] left-[0rem] shadow-[3px_3px_13.07px_-7.42px_rgba(0,_0,_0,_0.2)] rounded-9xs bg-color box-border w-[30.313rem] h-[34.625rem] border-[0.7px] border-solid border-foundation-primary-blue-b50" />
        <div className="absolute top-[3.25rem] left-[3.125rem] flex flex-col items-start justify-start gap-[3.125rem]">
          <FrameComponent19 />
          <div className="w-[24.125rem] rounded-9xs bg-primary h-[2.5rem] flex flex-row items-center justify-center py-[0.625rem] px-[6.75rem] box-border">
            <div className="relative font-medium">Request a Quote</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuotePopup;
