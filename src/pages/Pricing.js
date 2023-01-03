import React from "react";
import pricingPlanData from "../pricing-plan-data/pricingPlanData";
import { PricingPlan } from "./PriceSections";


const Pricing = () => {
  return (
    <section className="pt-12 col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-12">
      <div className="w-full lg:text-left">
        <h2 className="text-[32px] text-secondarySanJuanBlue font-medium font-dmDisplay md:text-5xl lg:text-[56px]">
          Pricing
        </h2>
      </div>
      {/* PRICING PLANS */}
      <div className="flex flex-col justify-center items-center gap-12 md:flex-row md:items-start">
        {/* PRICING PLAN */}
        {pricingPlanData.map((plan) => (
          <PricingPlan key={plan.id} {...plan}/>
        ))}
        {/**/}
      </div>
    </section>
  );
};

export default Pricing;
