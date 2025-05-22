import Image from "next/image";
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
    <div className="w-full flex flex-col gap-12 mt-12 max-w-[449px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#051B33]">Select your plan</h2>
        <p className="text-base text-gray-500">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {/* Plan selection */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan) => {
            const selected = formData.plan === plan.name;
            const price = plan.price[formData.billing];
            const freeText =
              formData.billing === "yearly" ? "2 months free" : "";

            return (
              <div
                key={plan.name}
                className={`border rounded p-4 cursor-pointer flex flex-col gap-12 ${
                  selected
                    ? "border-[#5C3DFF] bg-[#F8FBFF]"
                    : "border-[#9CA2B0]"
                }`}
                onClick={() => updateForm({ plan: plan.name })}
              >
                <Image src={plan.icon} alt={plan.name} width={40} height={40} />

                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">{plan.name}</p>
                  <p className="text-sm text-gray-600">
                    ${price}/{formData.billing === "monthly" ? "mo" : "yr"}
                  </p>
                  {freeText && (
                    <p className="text-xs text-[#051B33]">{freeText}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 rounded p-4 bg-[#F8FBFF]">
          <span
            className={
              formData.billing === "monthly" ? "font-bold" : "text-gray-400"
            }
          >
            Monthly
          </span>
          <button
            type="button"
            className="relative w-12 h-6 bg-[#051B33] rounded-full cursor-pointer"
            onClick={toggleBilling}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 absolute top-1 left-1 ${
                formData.billing === "monthly"
                  ? "translate-x-0"
                  : "translate-x-6"
              }`}
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
      </div>

      <div className="flex justify-between mt-auto">
        <button onClick={back} className="text-gray-600 cursor-pointer">
          Go Back
        </button>
        <button
          onClick={next}
          type="submit"
          className="bg-[#051B33] text-white p-4 rounded-xl max-w-[122px] w-full cursor-pointer hover:bg-[#0A2A4D] transition duration-300"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
