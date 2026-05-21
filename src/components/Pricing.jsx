

const pricing = {
  title: "Simple, Transparent Pricing",
  subtitle:
    "Choose the plan that fits your needs. Upgrade or downgrade anytime.",
  plans: [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "$0",
      pricePeriod: "Month",
      features: [
        "Access to 1 free facilities",
        "Basic templates",
        "Community support",
        "1 time booking per day",
      ],
      button: {
        text: "Get Started Free",
      },
    },
    {
      name: "Pro",
      label: "Most Popular",
      description: "Best for professionals",
      price: "$29",
      pricePeriod: "Month",
      features: [
        "Access to all premium facilities",
        "Unlimited equipments",
        "Priority support",
        "Multiple time easy booking",
        "Advanced facility",
      ],
      button: {
        text: "Start Pro Trial",
      },
    },
    {
      name: "Enterprise",
      description: "For teams and players",
      price: "$99",
      pricePeriod: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom bookings",
        "Dedicated support",
        "Custom branding",
      ],
      button: {
        text: "Contact Sales",
      },
    },
  ],
};

const Pricing = () => {
  return (
    <div className="py-20 md:py-30 bg-base-100 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">{pricing.title}</h2>

          <p className="mt-2 text-gray-400 text-sm md:text-base">
            {pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`w-full flex-1 max-w-sm md:w-96 shadow-xl rounded-2xl relative ${
                plan.name === "Pro"
                  ? "text-white bg-gradient-to-br from-indigo-600 to-purple-600"
                  : "bg-white"
              }`}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="grow">
                  {/* Label */}
                  {plan.label && (
                    <span className="bg-yellow-100 px-4 py-2 rounded-full absolute left-1/2 -translate-x-1/2 -top-4 text-sm text-red-700 font-medium">
                      {plan.label}
                    </span>
                  )}

                  {/* Plan Name */}
                  <h2 className="text-xl md:text-2xl font-bold">{plan.name}</h2>

                  {/* Description */}
                  <p
                    className={`text-sm mt-1 ${
                      plan.name === "Pro" ? "opacity-80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>

                    <span className="text-sm md:text-lg opacity-80">
                      /{plan.pricePeriod}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 flex flex-col gap-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`size-4 me-2 inline-block ${
                            plan.name === "Pro"
                              ? "text-white"
                              : "text-green-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    className={`w-full py-3 rounded-full font-medium transition ${
                      plan.name === "Pro"
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    }`}
                  >
                    {plan.button.text}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
