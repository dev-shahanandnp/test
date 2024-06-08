import type { NextPage } from "next";
import { useState, useCallback } from "react";
import PaymentTermPopup from "./payment-term-popup";
import PortalPopup from "./portal-popup";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  const [isPaymentTermPopupOpen, setPaymentTermPopupOpen] = useState(false);

  const openPaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(true);
  }, []);

  const closePaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`absolute w-[calc(100%_-_186px)] top-[78.563rem] right-[5.813rem] left-[5.813rem] flex flex-col items-center justify-start gap-[3.125rem] text-center text-[1.25rem] text-grey-2 font-outfit-light-body-text-6 ${className}`}
      >
        <div className="w-[52.625rem] relative h-[6.163rem]">
          <div className="absolute top-[3.038rem] left-[0rem] font-light">
            <p className="m-0">
              Protozoa Host offers a variety of hosting plans to suit your
              needs. Whether you're starting a blog
            </p>
            <p className="m-0">
              or running a large business, we have the perfect plan.
            </p>
          </div>
          <b className="absolute top-[0rem] left-[calc(50%_-_281px)] text-[2rem] inline-block w-[35.25rem] h-[2.438rem] text-black">
            <p className="m-0">
              <span>{`Find the Perfect `}</span>
              <span className="text-primary">Hosting Plan</span>
              <span className="text-black"> for You</span>
            </p>
          </b>
        </div>
        <div className="flex flex-col items-center justify-start gap-[1.687rem] text-left text-[0.875rem] text-primary">
          <div className="w-[31.625rem] rounded-31xl bg-primary h-[3rem] flex flex-row items-center justify-center p-[0.625rem] box-border gap-[0.312rem] text-color">
            <div className="rounded-31xl bg-primary flex flex-col items-center justify-center py-[0.625rem] px-[3.125rem]">
              <div className="relative font-medium">Monthly</div>
            </div>
            <div className="rounded-31xl bg-color flex flex-col items-center justify-center py-[0.625rem] px-[3.125rem] text-primary">
              <div className="relative font-medium">Annually</div>
            </div>
            <div className="rounded-31xl bg-primary flex flex-col items-center justify-center py-[0.625rem] px-[3.125rem]">
              <div className="relative font-medium">Tri-Annually</div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[1.875rem] text-[1.625rem]">
            <div className="w-[24.875rem] relative h-[69.625rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-9xs box-border w-[24.875rem] h-[69.625rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
              <div className="absolute top-[1.5rem] left-[1.25rem] flex flex-col items-center justify-start gap-[3.75rem]">
                <div className="flex flex-col items-center justify-start gap-[0.312rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.312rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-[1.125rem]">
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-center justify-center p-[0.625rem]">
                                <div className="relative font-medium">
                                  Combo Hosting
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[1rem] text-grey-2">
                                <div className="relative font-light">
                                  Everything you need to create your website
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-darkgreen">
                              <div className="rounded-21xl bg-mediumseagreen-200 flex flex-row items-center justify-center py-[0.375rem] px-[0.875rem]">
                                <div className="relative font-medium">
                                  with a 1-yr term (30% Savings)
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
                            <div className="relative">
                              <span>{`Rs `}</span>
                              <span className="text-[2rem] font-medium">
                                1999
                              </span>
                              <span>/year</span>
                            </div>
                            <div className="relative text-[1.125rem] font-medium">
                              +3 months FREE
                            </div>
                          </div>
                        </div>
                        <div className="w-[21.125rem] rounded-lg bg-foundation-primary-blue-b50 flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem]">
                          <div className="relative font-medium">
                            Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                        <div className="relative font-light">
                          $7.99/mo when you renew
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem]">
                      <div className="w-[21.125rem] relative h-[0rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.937rem] text-[1.125rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Free .com</span>
                        <span> </span>
                        <span className="font-light">Domain</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Single</span>
                        <span> </span>
                        <span className="font-light">Domain</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Five</span>
                        <span> </span>
                        <span className="font-light">Sub Domain</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">2 GB</span>
                        <span> </span>
                        <span className="font-light">Storage</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">2 GB</span>
                        <span> </span>
                        <span className="font-light">RAM</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">3 MySQL</span>
                        <span> </span>
                        <span className="font-light">Database</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Unmetered</span>
                        <span> </span>
                        <span className="font-light">Bandwidth</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Control Panel</span>
                        <span> </span>
                        <span className="font-light">cPanel</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative font-medium inline-block shrink-0">{`WordPress & Softaculous`}</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">5 Email</span>
                        <span> </span>
                        <span className="font-light">Accounts</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Basic</span>
                        <span> </span>
                        <span className="font-light">Performance</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">24 x 7</span>
                        <span> </span>
                        <span className="font-light">Support</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Free SSL</span>
                        <span> </span>
                        <span className="font-light">Certificate</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">No Backup</span>
                        <span> </span>
                        <span className="font-light">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[1.125rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[24.875rem] relative h-[72.563rem]">
              <div className="absolute w-full top-[2.938rem] right-[0rem] left-[0rem] h-[69.625rem]">
                <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] rounded-t-none rounded-b-9xs box-border h-[69.625rem] border-[2px] border-solid border-primary" />
                <div className="absolute top-[1.5rem] left-[1.25rem] flex flex-col items-center justify-start gap-[3.75rem]">
                  <div className="w-[22.375rem] overflow-hidden flex flex-col items-center justify-start gap-[0.312rem]">
                    <div className="flex flex-col items-center justify-start gap-[0.312rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                          <div className="flex flex-col items-start justify-start">
                            <div className="flex flex-col items-start justify-start gap-[1.125rem]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="flex flex-row items-center justify-center p-[0.625rem]">
                                  <div className="relative font-medium">
                                    WordPress Hosting
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[1rem] text-grey-2">
                                  <div className="relative font-light">
                                    Ideal for Beginners
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-darkgreen">
                                <div className="rounded-21xl bg-mediumseagreen-200 flex flex-row items-center justify-center py-[0.375rem] px-[0.875rem]">
                                  <div className="relative font-medium">
                                    with a 1-yr term (30% Savings)
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
                              <div className="relative">
                                <span>{`Rs `}</span>
                                <span className="text-[2rem] font-medium">
                                  1999
                                </span>
                                <span>/year</span>
                              </div>
                              <div className="relative text-[1.125rem] font-medium">
                                +3 months FREE
                              </div>
                            </div>
                          </div>
                          <div className="w-[21.125rem] rounded-lg bg-primary flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem] text-color">
                            <div className="relative font-medium">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                          <div className="relative font-light">
                            $7.99/mo when you renew
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start p-[0.625rem]">
                        <div className="w-[21.125rem] relative h-[0rem]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.937rem] text-[1.125rem]">
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">Single</span>
                          <span> </span>
                          <span className="font-light">Domain</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">Unlimited</span>
                          <span> </span>
                          <span className="font-light">Sub Domain</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">10 GB</span>
                          <span> </span>
                          <span className="font-light">NVME Storage</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">Unlimited</span>
                          <span> </span>
                          <span className="font-light">MySQL Database</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">Unmetered</span>
                          <span> </span>
                          <span className="font-light">Bandwidth</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">50x</span>
                          <span> </span>
                          <span className="font-light">Performance</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">2 GB</span>
                          <span> </span>
                          <span className="font-light">RAM</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">10MB/s</span>
                          <span> </span>
                          <span className="font-light">IO</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">1024</span>
                          <span> </span>
                          <span className="font-light">IOPS</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">20</span>
                          <span> </span>
                          <span className="font-light">EP</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">100</span>
                          <span> </span>
                          <span className="font-light">NPROC</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">Fully</span>
                          <span> </span>
                          <span className="font-light">Managed WordPress</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">WordPress</span>
                          <span> </span>
                          <span className="font-light">Optimised</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/mdicheckbold.svg"
                        />
                        <div className="w-[18.25rem] relative inline-block shrink-0">
                          <span className="font-medium">WordPress</span>
                          <span> </span>
                          <span className="font-light">Acceleration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center text-[1.125rem]">
                    <div className="flex flex-row items-center justify-center p-[0.625rem]">
                      <div className="relative font-medium">
                        See all features
                      </div>
                    </div>
                    <img
                      className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                      alt=""
                      src="/mdiarrowdowndrop.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] rounded-t-9xs rounded-b-none bg-primary w-[24.875rem] flex flex-row items-center justify-center py-[0.875rem] px-[6.687rem] box-border text-[1rem] text-color">
                <div className="relative font-semibold">MOST POPULAR</div>
              </div>
            </div>
            <div className="w-[24.875rem] relative h-[69.625rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-9xs box-border w-[24.875rem] h-[69.625rem] border-[1px] border-solid border-foundation-primary-blue-b50" />
              <div className="absolute top-[1.5rem] left-[1.25rem] flex flex-col items-center justify-start gap-[3.75rem]">
                <div className="flex flex-col items-center justify-start gap-[0.312rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.312rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-[1.125rem]">
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-start justify-start p-[0.625rem]">
                                <div className="relative font-medium">{`Python & Node Js Hosting`}</div>
                              </div>
                              <div className="flex flex-row items-center justify-center pt-[0rem] px-[0.625rem] pb-[0.625rem] text-[1rem] text-grey-2">
                                <div className="relative font-light">{`Code Smart, Spend Smarter `}</div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1rem] text-darkgreen">
                              <div className="rounded-21xl bg-mediumseagreen-200 flex flex-row items-center justify-center py-[0.375rem] px-[0.875rem]">
                                <div className="relative font-medium">
                                  with a 1-yr term (30% Savings)
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem] text-[1.25rem]">
                            <div className="relative">
                              <span>{`Rs `}</span>
                              <span className="text-[2rem] font-medium">
                                1999
                              </span>
                              <span>/year</span>
                            </div>
                            <div className="relative text-[1.125rem] font-medium">
                              +3 months FREE
                            </div>
                          </div>
                        </div>
                        <div className="w-[21.125rem] rounded-lg bg-foundation-primary-blue-b50 flex flex-col items-center justify-center py-[0.875rem] px-[2.312rem] box-border text-[0.875rem]">
                          <div className="relative font-medium">
                            Add to Cart
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[0.625rem] text-[1.125rem] text-black">
                        <div className="relative font-light">
                          $7.99/mo when you renew
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-[0.625rem]">
                      <div className="w-[21.125rem] relative h-[0rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-[0.625rem] gap-[0.937rem] text-[1.125rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Single</span>
                        <span> </span>
                        <span className="font-light">Domain</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Unlimited</span>
                        <span> </span>
                        <span className="font-light">Sub Domain</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">10 GB</span>
                        <span> </span>
                        <span className="font-light">NVME Storage</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Unlimited</span>
                        <span> </span>
                        <span className="font-light">MySQL Database</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Support</span>
                        <span> </span>
                        <span className="font-light">PostgreSQL</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Unmetered</span>
                        <span> </span>
                        <span className="font-light">Bandwidth</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">2 GB</span>
                        <span> </span>
                        <span className="font-light">RAM</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">WordPress</span>
                        <span> </span>
                        <span className="font-light">Optimised</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">{`Softaculous App `}</span>
                        <span className="font-light">Installer</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Control Panel</span>
                        <span> </span>
                        <span className="font-light">cPanel</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Terminal</span>
                        <span> </span>
                        <span className="font-light">Included</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">{`Python & Node JS`}</span>
                        <span> </span>
                        <span className="font-light">Support</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Malware</span>
                        <span> </span>
                        <span className="font-light">Scanner</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                      <img
                        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/mdicheckbold.svg"
                      />
                      <div className="w-[18.25rem] relative inline-block shrink-0">
                        <span className="font-medium">Cloudlinux</span>
                        <span> </span>
                        <span className="font-light">OS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-[1.125rem]">
                  <div className="flex flex-row items-center justify-center p-[0.625rem]">
                    <div className="relative font-medium">See all features</div>
                  </div>
                  <img
                    className="w-[1.438rem] relative h-[1.438rem] overflow-hidden shrink-0"
                    alt=""
                    src="/mdiarrowdowndrop.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-[0.625rem] cursor-pointer text-[1rem]"
            onClick={openPaymentTermPopup}
          >
            <div className="relative font-semibold">Payment terms</div>
          </div>
        </div>
      </div>
      {isPaymentTermPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent7;
