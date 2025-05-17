import { FormData } from "./MultiStepForm";

interface Props {
  next: () => void;
  back: () => void;
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
}

export const plans = [
  {
    name: "Arcade",
    price: { monthly: 9, yearly: 90 },
    icon: "/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: "/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    price: { monthly: 15, yearly: 150 },
    icon: "/images/icon-pro.svg",
  },
];

export default function StepTwo({ next, back, formData, updateForm }: Props) {
  const toggleBilling = () => {
    updateForm({
      billing: formData.billing === "monthly" ? "yearly" : "monthly",
    });
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2">Select your plan</h2>
      <p className="text-sm text-gray-500 mb-4">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {plans.map((plan) => {
          const selected = formData.plan === plan.name;
          const price = plan.price[formData.billing];
          const freeText = formData.billing === "yearly" ? "2 months free" : "";

          return (
            <div
              key={plan.name}
              className={`border rounded p-4 cursor-pointer ${
                selected ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
              onClick={() => updateForm({ plan: plan.name })}
            >
              <img src={plan.icon} alt={plan.name} className="mb-4 w-10 h-10" />
              <div className="font-bold text-sm">{plan.name}</div>
              <div className="text-sm text-gray-600">
                ${price}/{formData.billing === "monthly" ? "mo" : "yr"}
              </div>
              {freeText && (
                <div className="text-xs text-blue-600 mt-1">{freeText}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <span
          className={
            formData.billing === "monthly" ? "font-bold" : "text-gray-400"
          }
        >
          Monthly
        </span>
        <button
          type="button"
          className="relative w-12 h-6 bg-blue-600 rounded-full"
          onClick={toggleBilling}
        >
          <div
            className={`absolute top-0.5 ${
              formData.billing === "monthly" ? "left-1" : "left-6"
            } w-4 h-4 bg-white rounded-full transition-all`}
          />
        </button>
        <span
          className={
            formData.billing === "yearly" ? "font-bold" : "text-gray-400"
          }
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between">
        <button onClick={back} className="text-gray-600">
          Go Back
        </button>
        <button
          onClick={next}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
