import React from "react";
import { CheckIcon } from "../assets";
import pricingPlan from "../pricing-plan-data/pricingPlan";

const Pricing = () => {
  return (
    <section className="pt-12 col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-12">
      <div>
        <h2 className="text-[32px] text-secondarySanJuanBlue font-medium font-dmDisplay">
          Pricing
        </h2>
      </div>
      {/* PRICING PLANS */}
      <div className="flex flex-col justify-center items-center gap-12">
        {/* PRICING PLAN */}
        {pricingPlan.map((plan) => (
          <div key={plan.id} className="flex flex-col justify-center items-center gap-6">
            <div>
              <h3 className="text-2xl font-medium font-dmDisplay text-primaryDarkPink">
                {plan.planType}
              </h3>
              <p className="pt-4 pb-2 text-secondaryLightSanJuanBlue font-normal text-[15px]">
                {plan.planDescription}
              </p>
              <p className="text-[56px] text-secondarySanJuanBlue font-medium font-dmDisplay">
                {plan.price}
              </p>
            </div>
            <div className="w-full border-y border-y-secondarySanJuanBlue/25 grid place-items-center">
              <ul className="py-12 text-left flex flex-col gap-2">
                {plan.features.map(features => {
                  const {id, isIncluded, name} = features
                  return (
                    <li
                      key={id}
                      className="flex justify-start items-center gap-6"
                    >
                      <span>{isIncluded && <CheckIcon />}</span>
                      <p>{name}</p>
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
        ))}
        {/**/}
      </div>
    </section>
  );
};

export default Pricing;
