import React from "react";
import { CheckIcon } from "../../assets";

const PricingPlan = ({planType, planDescription,price, features }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-6 lg:items-start"
    >
      {/* HEADER OF A PRICE COLUMN */}
      <div className="lg:text-left md:grid md:grid-rows-priceHeaderRows lg:grid-rows-priceHeaderDeskRows">
        <h3 className="lg:pb-4 md:pb-3 text-2xl font-medium font-dmDisplay text-primaryDarkPink lg:text-[32px]">
          {planType}
        </h3>
        <p className="pt-4 pb-2 md:p-0 text-secondaryLightSanJuanBlue font-normal text-[15px]">
          {planDescription}
        </p>
        <p className="leading-none text-[56px] md:text-5xl lg:text-[56px] text-secondarySanJuanBlue font-medium font-dmDisplay">
          {price}
        </p>
      </div>
      <div className="w-full border-y border-y-secondarySanJuanBlue/25 grid place-items-center lg:justify-start">
        <ul className="py-6 text-left flex flex-col gap-2">
          {features.map((features) => {
            const { id, isIncluded, name } = features;
            return (
              <li
                key={id}
                className="grid grid-cols-featuresColumns items-center justify-items-center gap-x-6"
              >
                <span>{isIncluded && <CheckIcon className="stroke-primaryDarkPink"/>}</span>
                <p
                  className={`justify-self-start font-normal ${
                    isIncluded
                      ? "text-secondarySanJuanBlue"
                      : "text-secondarySanJuanBlue/50"
                  }`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="secondary-query-btn w-[168px]">
          Request Access
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
