import type { NextPage } from "next";

export type MyAccountType = {
  className?: string;
};

const MyAccount: NextPage<MyAccountType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[19.438rem] relative bg-color h-[29.563rem] overflow-hidden max-w-full max-h-full text-left text-[1.25rem] text-primary font-outfit-light-body-text-6 ${className}`}
    >
      <div className="absolute top-[calc(50%_-_202.5px)] left-[1.813rem] flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="flex flex-col items-start justify-start gap-[1.125rem]">
          <div className="flex flex-col items-start justify-start gap-[0.625rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium">Registered Users</div>
            </div>
            <div className="flex flex-row items-start justify-start text-[0.875rem]">
              <div className="relative font-light">
                Have an Account? Sign In Now.
              </div>
            </div>
          </div>
          <div className="rounded-9xs bg-primary flex flex-row items-center justify-center py-[0.625rem] px-[1.125rem] text-[0.875rem] text-color">
            <div className="relative font-medium">Login To Dashboard</div>
          </div>
          <div className="w-[15.825rem] relative box-border h-[0.013rem] border-t-[0.2px] border-solid border-foundation-primary-blue-b50" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.125rem]">
          <div className="flex flex-col items-start justify-start gap-[0.625rem]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative font-medium">New to ProtozoaHost?</div>
            </div>
            <div className="flex flex-row items-start justify-start text-[0.875rem]">
              <div className="relative font-light">
                Create an account to get started today.
              </div>
            </div>
          </div>
          <div className="rounded-9xs bg-primary flex flex-row items-center justify-center py-[0.625rem] px-[1.125rem] text-[0.875rem] text-color">
            <div className="relative font-medium">Register Account</div>
          </div>
          <div className="w-[15.825rem] relative box-border h-[0.013rem] border-t-[0.2px] border-solid border-foundation-primary-blue-b50" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.875rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative font-medium">Useful Links</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.312rem] text-[0.875rem]">
            <div className="relative font-light">Blog Tutorials</div>
            <div className="relative font-light">Check Invoices</div>
            <div className="relative font-light">Manage Domain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
