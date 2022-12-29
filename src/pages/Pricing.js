import React from "react";
import { CheckIcon } from "../assets";

const Pricing = () => {
  return (
    <section className="pt-12 col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-12">
      <div>
        <h2 className="text-[32px] text-secondarySanJuanBlue font-medium font-dmDisplay">
          Pricing
        </h2>
      </div>
      {/* PRICING PLANS */}
      <div>
        {/* PRICING PLAN */}
        <div className="flex flex-col justify-center items-center gap-6">
          <div>
            <h3 className="text-2xl font-medium font-dmDisplay text-primaryDarkPink">
              Free Plan
            </h3>
            <p className="pt-4 pb-2 text-secondaryLightSanJuanBlue font-normal text-[15px]">
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <p className="text-[56px] text-secondarySanJuanBlue font-medium font-dmDisplay">
              $0.00
            </p>
          </div>
          <div className="w-full border-y border-y-secondarySanJuanBlue/25 grid place-items-center">
            <ul className="py-12 text-left flex flex-col gap-2">
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Transactions</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Auth</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Identity</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Investments</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Assets</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Liabilities</p>
              </li>
              <li className="flex justify-start items-center gap-6">
                <span>
                  <CheckIcon />
                </span>
                <p>Income</p>
              </li>
            </ul>
          </div>
          <div>
            <button className="secondary-query-btn w-[168px]">
              Request Access
            </button>
          </div>
        </div>
        {/**/}
      </div>
    </section>
  );
};

export default Pricing;
