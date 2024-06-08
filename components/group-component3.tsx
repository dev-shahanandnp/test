import type { NextPage } from "next";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[31.313rem] relative h-[22.25rem] text-center text-[0.75rem] text-primary font-inter ${className}`}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-[31.313rem] h-[22.25rem] border-[1px] border-solid border-primary" />
      <div className="absolute top-[0.875rem] left-[1.063rem] rounded-[50%] box-border w-[0.563rem] h-[0.563rem] border-[0.5px] border-solid border-primary" />
      <div className="absolute top-[0.875rem] left-[1.938rem] rounded-[50%] box-border w-[0.563rem] h-[0.563rem] border-[0.5px] border-solid border-primary" />
      <div className="absolute top-[0.875rem] left-[2.813rem] rounded-[50%] box-border w-[0.563rem] h-[0.563rem] border-[0.5px] border-solid border-primary" />
      <img
        className="absolute h-[2.81%] w-[2%] top-[3.65%] right-[2.99%] bottom-[93.54%] left-[95.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <div className="absolute top-[-0.062rem] left-[7.813rem] box-border w-[0.125rem] h-[22.375rem] border-r-[2px] border-solid border-primary" />
      <div className="absolute top-[16.938rem] left-[-0.062rem] box-border w-[31.438rem] h-[0.125rem] border-t-[2px] border-solid border-primary" />
      <div className="absolute top-[3.875rem] left-[2.125rem] w-[25.563rem] h-[2.25rem]">
        <div className="absolute top-[0.188rem] left-[0rem]">
          <p className="m-0">ProtozoaHost</p>
          <p className="m-0">Server</p>
        </div>
        <div className="absolute top-[0.688rem] left-[23.625rem]">4329</div>
        <div className="absolute top-[0rem] left-[5.813rem] [background:linear-gradient(89.24deg,_#1354b5,_#120086)] w-[16.938rem] h-[2.25rem]" />
      </div>
      <div className="absolute top-[7rem] left-[3rem] w-[16.938rem] h-[2.25rem]">
        <div className="absolute top-[0.188rem] left-[0rem]">
          <p className="m-0">Apache+</p>
          <p className="m-0">W3TC</p>
        </div>
        <div className="absolute top-[0.688rem] left-[15.313rem]">1241</div>
        <div className="absolute top-[0rem] left-[4.938rem] box-border w-[9.5rem] h-[2.25rem] border-[1px] border-solid border-primary" />
      </div>
      <div className="absolute top-[10.125rem] left-[3.313rem] w-[12.188rem] h-[2.25rem]">
        <div className="absolute top-[0.188rem] left-[0rem]">
          <p className="m-0">Nginx+</p>
          <p className="m-0">FCGI</p>
        </div>
        <div className="absolute top-[0.688rem] left-[10.75rem]">858</div>
        <div className="absolute top-[0rem] left-[4.625rem] box-border w-[5.313rem] h-[2.25rem] border-[1px] border-solid border-primary" />
      </div>
      <div className="absolute top-[17rem] left-[8.813rem]">0</div>
      <div className="absolute top-[17rem] left-[13.25rem]">1000</div>
      <div className="absolute top-[17rem] left-[18.875rem]">2000</div>
      <div className="absolute top-[17rem] left-[24.5rem]">3000</div>
      <div className="absolute top-[17rem] left-[29.375rem]">4000</div>
      <div className="absolute top-[13.25rem] left-[2.75rem] w-[10.25rem] h-[2.25rem]">
        <div className="absolute top-[0.188rem] left-[0rem]">
          <p className="m-0">Apache+</p>
          <p className="m-0">WPRocket</p>
        </div>
        <div className="absolute top-[0.688rem] left-[8.813rem]">683</div>
        <div className="absolute top-[0rem] left-[5.188rem] box-border w-[3.188rem] h-[2.25rem] border-[1px] border-solid border-primary" />
      </div>
      <img
        className="absolute top-[0.563rem] left-[15.313rem] w-[3.813rem] h-[2.375rem] object-cover"
        alt=""
        src="/image-118@2x.png"
      />
      <div className="absolute top-[19.5rem] left-[14.875rem]">
        Transactions/sec
      </div>
    </div>
  );
};

export default GroupComponent3;
