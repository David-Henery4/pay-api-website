import React from 'react'
import {
  bankingCoverageIcon,
  consumerPaymentsIcon,
  personalFinancesIcon,
} from "../../assets";

const Features = () => {
  return (
    <section>
      <div>
        <img src={personalFinancesIcon} alt="personal-finances" />
        <h4 className="text-lg font-semibold text-secondarySanJuanBlue">
          Personal Finances
        </h4>
        <p className="text-[15px] leading-6">
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.{" "}
        </p>
      </div>
      <div>
        <img src={bankingCoverageIcon} alt="banking-coverage" />
        <h4 className="text-lg font-semibold text-secondarySanJuanBlue">
          Banking & Coverage
        </h4>
        <p>
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.{" "}
        </p>
      </div>
      <div>
        <img src={consumerPaymentsIcon} alt="consumer-payments" />
        <h4 className="text-lg font-semibold text-secondarySanJuanBlue">
          Consumer Payments
        </h4>
        <p>
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.{" "}
        </p>
      </div>
    </section>
  );
}

export default Features