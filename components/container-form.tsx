import type { NextPage } from "next";

export type ContainerFormType = {
  className?: string;
};

const ContainerForm: NextPage<ContainerFormType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[48.938rem] relative h-[29.838rem] ml-[-2rem] text-left text-[0.55rem] text-black font-inter ${className}`}
    >
      <div className="absolute top-[0.413rem] left-[3.45rem] box-border w-[0.056rem] h-[23.95rem] border-r-[0.9px] border-solid border-color" />
      <div className="absolute top-[2.9rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
      <img
        className="absolute top-[1.213rem] left-[0.663rem] w-[39.231rem] h-[21.85rem] object-contain"
        alt=""
      />
      <div className="absolute top-[4.913rem] left-[4.081rem] rounded-[3.53px] bg-color box-border w-[32.281rem] h-[15.725rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
      <div className="absolute top-[4.913rem] left-[4.081rem] rounded-t-[3.53px] rounded-b-none bg-color box-border w-[32.281rem] h-[1.544rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
      <div className="absolute top-[6.444rem] left-[4.069rem] box-border w-[32.306rem] h-[0.025rem] border-t-[0.4px] border-solid border-foundation-primary-blue-b75" />
      <div className="absolute top-[7.281rem] left-[6.513rem] text-[0.881rem] font-semibold">{`cPanel Dashboard `}</div>
      <div className="absolute top-[3.019rem] left-[8.881rem] w-[11.181rem] h-[2.531rem] text-[0.844rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-8xs-5 bg-color box-border w-[11.181rem] h-[2.531rem] border-[1.1px] border-solid border-foundation-primary-blue-b50" />
        <div className="absolute top-[0.769rem] left-[0.775rem] font-semibold">
          SSL Certificate
        </div>
        <div className="absolute top-[0.631rem] left-[7.175rem] rounded-[2.25px] bg-mediumseagreen-100 w-[3.513rem] h-[1.263rem]" />
        <div className="absolute top-[0.844rem] left-[7.875rem] text-[0.7rem] text-color">
          Active
        </div>
      </div>
      <div className="absolute top-[16rem] left-[6.569rem] w-[8.775rem] h-[1.988rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
        <div className="absolute top-[0.663rem] left-[2.313rem] font-semibold">
          File Manager
        </div>
        <img
          className="absolute top-[0.388rem] left-[0.663rem] w-[1.156rem] h-[1.156rem] overflow-hidden"
          alt=""
          src="/folder-1.svg"
        />
      </div>
      <div className="absolute top-[8.938rem] left-[6.513rem] rounded-[1.77px] bg-color box-border w-[27.644rem] h-[6.125rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
      <div className="absolute top-[16rem] left-[15.894rem] w-[8.775rem] h-[1.988rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
        <div className="absolute top-[0.719rem] left-[2.038rem] font-semibold">
          Databases
        </div>
        <img
          className="absolute top-[0.556rem] left-[0.606rem] w-[0.938rem] h-[0.938rem] overflow-hidden"
          alt=""
          src="/database-2-1.svg"
        />
      </div>
      <div className="absolute top-[16rem] left-[25.219rem] w-[8.775rem] h-[1.988rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.775rem] h-[1.988rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
        <div className="absolute top-[0.663rem] left-[1.819rem] font-semibold">
          Wordpress Overview
        </div>
        <img
          className="absolute top-[0.5rem] left-[0.494rem] w-[0.938rem] h-[0.938rem] overflow-hidden"
          alt=""
          src="/wordpress-3-1.svg"
        />
      </div>
      <div className="absolute top-[10.431rem] left-[7.669rem] w-[4.5rem] h-[3.05rem] text-[0.719rem] text-grey-2">
        <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Business
        </div>
        <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
          Active
        </div>
        <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          See Details
        </div>
        <img
          className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
          alt=""
          src="/fi-2891526.svg"
        />
      </div>
      <div className="absolute top-[10.431rem] left-[13.65rem] w-[3.813rem] h-[3.05rem] text-[0.719rem] text-grey-2">
        <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Domain
        </div>
        <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
          Active
        </div>
        <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Manage
        </div>
        <img
          className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
          alt=""
          src="/fi-28915261.svg"
        />
      </div>
      <div className="absolute top-[10.431rem] left-[18.913rem] w-[6.313rem] h-[3.05rem] text-[0.719rem] text-grey-2">
        <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Business Email
        </div>
        <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
          Active
        </div>
        <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Manage
        </div>
        <img
          className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
          alt=""
          src="/fi-28915262.svg"
        />
      </div>
      <div className="absolute top-[10.431rem] left-[26.719rem] w-[6rem] h-[3.05rem] text-[0.719rem] text-grey-2">
        <div className="absolute top-[0rem] left-[1.125rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Daily backups
        </div>
        <div className="absolute top-[1.275rem] left-[1.125rem] text-[0.513rem]">
          Active
        </div>
        <div className="absolute top-[2.3rem] left-[1.125rem] text-[0.613rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Manage
        </div>
        <img
          className="absolute top-[0.05rem] left-[0rem] w-[0.769rem] h-[0.769rem] overflow-hidden"
          alt=""
          src="/fi-28915263.svg"
        />
      </div>
      <img
        className="absolute top-[2.875rem] left-[22.9rem] w-[9.725rem] h-[3.025rem] object-cover"
        alt=""
        src="/nepal-1@2x.png"
      />
      <img
        className="absolute top-[7.063rem] left-[2.481rem] w-[2.481rem] h-[8rem] object-contain"
        alt=""
        src="/performance-1@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[15.119rem] w-[7.506rem] h-[2.425rem] object-cover"
        alt=""
        src="/big-brand-1@2x.png"
      />
      <div className="absolute top-[8.306rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
      <div className="absolute top-[13.438rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
      <div className="absolute top-[17.963rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
      <div className="absolute top-[21.438rem] left-[-0.025rem] box-border w-[40.063rem] h-[0.056rem] border-t-[0.9px] border-solid border-color" />
      <div className="absolute top-[0.413rem] left-[37rem] box-border w-[0.056rem] h-[23.95rem] border-r-[0.9px] border-solid border-color" />
      <img
        className="absolute top-[1.875rem] left-[25.825rem] w-[23.113rem] h-[26.875rem] object-cover"
        alt=""
        src="/wepikexport20240401055453mwlb-1@2x.png"
      />
      <div className="absolute top-[19.481rem] left-[2.756rem] w-[8.938rem] h-[4.194rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[3.53px] bg-color box-border w-[8.938rem] h-[4.194rem] border-[0.9px] border-solid border-foundation-primary-blue-b75" />
        <div className="absolute top-[0.55rem] left-[1.6rem] w-[5.75rem] h-[2.894rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[5.75rem] h-[2.894rem]">
            <div className="absolute top-[0rem] left-[1.106rem] text-[0.719rem] font-semibold">
              Safe
            </div>
            <div className="absolute top-[1.269rem] left-[0rem] text-grey-2">
              No malware found
            </div>
            <div className="absolute top-[2.206rem] left-[0rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              See malware scanner
            </div>
          </div>
          <img
            className="absolute h-[20.52%] w-[13.15%] top-[3.89%] right-[85.76%] bottom-[75.59%] left-[1.09%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-82.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[19.756rem] left-[16.331rem] w-[8.938rem] h-[2.813rem] object-cover"
        alt=""
        src="/group-2-10@2x.png"
      />
      <div className="absolute top-[24.294rem] left-[29.375rem] w-[16.625rem] h-[5.544rem] text-[0.375rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[3.99px] bg-color box-border w-[16.625rem] h-[5.544rem] border-[1px] border-solid border-foundation-primary-blue-b75" />
        <div className="absolute top-[0.938rem] left-[1.619rem] w-[13.45rem] h-[3.675rem]">
          <div className="absolute top-[0.125rem] left-[0rem] text-[0.625rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(213.6deg,_#102880,_#1469cd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[6.788rem] h-[1.494rem]">
            <p className="m-0">Performance score for</p>
            <p className="m-0">protozoahost.com</p>
          </div>
          <div className="absolute top-[2.613rem] left-[0rem] w-[1.556rem] h-[0.438rem]">
            <div className="absolute top-[0rem] left-[0.625rem] inline-block w-[0.931rem] h-[0.438rem]">
              0-49
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red w-[0.438rem] h-[0.438rem]" />
          </div>
          <div className="absolute top-[2.613rem] left-[2.494rem] w-[1.744rem] h-[0.438rem]">
            <div className="absolute top-[0rem] left-[0.619rem] inline-block w-[1.119rem] h-[0.438rem]">
              50-89
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-orange w-[0.438rem] h-[0.438rem]" />
          </div>
          <div className="absolute top-[2.613rem] left-[4.981rem] w-[1.931rem] h-[0.438rem]">
            <div className="absolute top-[0rem] left-[0.625rem] inline-block w-[1.306rem] h-[0.438rem]">
              90-100
            </div>
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumseagreen-100 w-[0.438rem] h-[0.438rem]" />
          </div>
          <div className="absolute top-[0rem] left-[9.775rem] rounded-[50%] bg-mediumseagreen-100 w-[3.675rem] h-[3.675rem]" />
          <div className="absolute top-[1.244rem] left-[10.963rem] text-[0.994rem] font-semibold text-mediumseagreen-100 inline-block w-[1.306rem] h-[1.181rem]">
            99
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
