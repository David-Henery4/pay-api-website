import React from "react";
import {
  bankingCoverageIcon,
  consumerPaymentsIcon,
  personalFinancesIcon,
} from "../../assets";

const Features = () => {
  return (
    <section className="max-w-maxContentWidth mx-auto w-full col-start-2 col-end-12 flex flex-col justify-center items-center text-center gap-12 md:flex-row md:items-start">
      <div className="flex flex-col justify-center items-center gap-8 md:w-4/12">
        <img src={personalFinancesIcon} alt="" aria-hidden={true} />
        <div>
          <h4 className="text-lg font-semibold text-secondarySanJuanBlue mb-4">
            Personal Finances
          </h4>
          <p className="text-[15px] leading-6">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 md:w-4/12">
        <img src={bankingCoverageIcon} alt="" aria-hidden={true} />
        <div>
          <h4 className="text-lg font-semibold text-secondarySanJuanBlue mb-4">
            Banking & Coverage
          </h4>
          <p>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 md:w-4/12">
        <img src={consumerPaymentsIcon} alt="" aria-hidden={true} />
        <div>
          <h4 className="text-lg font-semibold text-secondarySanJuanBlue mb-4">
            Consumer Payments
          </h4>
          <p>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
