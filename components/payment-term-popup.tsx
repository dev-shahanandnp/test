import type { NextPage } from "next";

export type PaymentTermPopupType = {
  className?: string;
};

const PaymentTermPopup: NextPage<PaymentTermPopupType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[66.188rem] relative rounded-9xs bg-color h-[15.125rem] overflow-hidden max-w-full max-h-full text-left text-[1.25rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[calc(50%_-_61.5px)] left-[calc(50%_-_415.5px)] flex flex-col items-center justify-start gap-[0.75rem]">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="relative font-semibold">PAYMENT TERMS</div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-center text-[1.125rem] text-grey-2">
          <div className="w-[50.688rem] relative font-light flex items-center justify-center shrink-0">
            The plans shall be pre-paid, not divided in installments. The amount
            presented represents the product's total price split by the number
            of months your plan will be live. Prices are listed without VAT
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0.938rem] left-[63.125rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="/jamclose.svg"
      />
    </div>
  );
};

export default PaymentTermPopup;
