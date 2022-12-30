
const pricingPlan = [
  {
    id: 1,
    planType: "Free Plan",
    planDescription:
      "Build and test using our core set of products with up to 100 API requests",
    price: "$0.00",
    features: [
      {
        id: 1,
        name: "Transactions",
        isIncluded: true,
      },
      {
        id: 2,
        name: "Auth",
        isIncluded: true,
      },
      {
        id: 3,
        name: "Identity",
        isIncluded: true,
      },
      {
        id: 4,
        name: "Investments",
        isIncluded: false,
      },
      {
        id: 5,
        name: "Assets",
        isIncluded: false,
      },
      {
        id: 6,
        name: "Liabilities",
        isIncluded: false,
      },
      {
        id: 7,
        name: "Income",
        isIncluded: false,
      },
    ],
  },
  {
    id: 2,
    planType: "Basic Plan",
    planDescription:
      "Launch your project with unlimited requests and no contractual minimums",
    price: "$249.00",
    features: [
      {
        id: 1,
        name: "Transactions",
        isIncluded: true,
      },
      {
        id: 2,
        name: "Auth",
        isIncluded: true,
      },
      {
        id: 3,
        name: "Identity",
        isIncluded: true,
      },
      {
        id: 4,
        name: "Investments",
        isIncluded: true,
      },
      {
        id: 5,
        name: "Assets",
        isIncluded: true,
      },
      {
        id: 6,
        name: "Liabilities",
        isIncluded: false,
      },
      {
        id: 7,
        name: "Income",
        isIncluded: false,
      },
    ],
  },
  {
    id: 3,
    planType: "Premium Plan",
    planDescription:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "$499.00",
    features: [
      {
        id: 1,
        name: "Transactions",
        isIncluded: true,
      },
      {
        id: 2,
        name: "Auth",
        isIncluded: true,
      },
      {
        id: 3,
        name: "Identity",
        isIncluded: true,
      },
      {
        id: 4,
        name: "Investments",
        isIncluded: true,
      },
      {
        id: 5,
        name: "Assets",
        isIncluded: true,
      },
      {
        id: 6,
        name: "Liabilities",
        isIncluded: true,
      },
      {
        id: 7,
        name: "Income",
        isIncluded: true,
      },
    ],
  },
];

export default pricingPlan