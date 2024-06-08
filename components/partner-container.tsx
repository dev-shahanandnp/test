import type { NextPage } from "next";

export type PartnerContainerType = {
  className?: string;
};

const PartnerContainer: NextPage<PartnerContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[374.275rem] left-[calc(50%_-_614.5px)] flex flex-row items-center justify-start gap-[6.375rem] text-center text-[2rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <b className="relative">Our Partners</b>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-left text-[1.25rem] text-black">
          <div className="relative font-light">
            <p className="m-0">{`We work with the best in the industry to bring you top-notch `}</p>
            <p className="m-0 whitespace-pre-wrap">{`web hosting in Nepal.  Together, we push the boundaries of success. `}</p>
            <p className="m-0">Meet our trusted technology partners.</p>
          </div>
        </div>
      </div>
      <div className="w-[31.938rem] flex flex-row flex-wrap items-start justify-start gap-[2.187rem]">
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-98@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-92@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-93@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-94@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-96@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-91@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-90@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-99@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-100@2x.png"
        />
        <img
          className="w-[9.188rem] relative rounded-lg h-[4.375rem] object-cover"
          alt=""
          src="/rectangle-901@2x.png"
        />
      </div>
    </div>
  );
};

export default PartnerContainer;
