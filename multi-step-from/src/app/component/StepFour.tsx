import { FormData } from "./MultiStepForm";
import { availableAddons } from "./StepThree";

interface Props {
  back: () => void;
  formData: FormData;
  confirm: () => void;
}

export default function Step4({ back, formData, confirm }: Props) {
  const planCost = formData.billing === "yearly" ? 90 : 9;
  const addonsCost =
    formData.addons.length * (formData.billing === "yearly" ? 10 : 1);
  const total = planCost + addonsCost;

  return (
    <div className="w-full flex flex-col gap-12 mt-12 max-w-[449px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#051B33]">Summary</h2>
        <p className="text-base text-[#9CA2B0]">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className=" bg-[#F8FBFF] rounded p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-[#051B33]">
              {formData.plan} (
              {formData.billing === "yearly" ? "Yearly" : "Monthly"})
            </div>
            <button
              onClick={back}
              className="text-sm text-[#9CA2B0] underline cursor-pointer"
            >
              Change
            </button>
          </div>
          <div className="font-bold text-[#051B33]">
            ${planCost}/{formData.billing === "yearly" ? "yr" : "mo"}
          </div>
        </div>

        {formData.addons.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            {formData.addons.map((addonId) => {
              const addon = availableAddons.find((a) => a.id === addonId);
              if (!addon) return null; // Handle possible mismatch

              return (
                <div
                  key={addon.id}
                  className="flex justify-between text-sm text-gray-600"
                >
                  <span className="text-[#9CA2B0]">{addon.label}</span>
                  <span className="text-[#051B33]">
                    +$
                    {formData.billing === "yearly"
                      ? addon.price.yearly
                      : addon.price.monthly}
                    /{formData.billing === "yearly" ? "yr" : "mo"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-row justify-between text-sm text-gray-600">
        <p>Total (per {formData.billing === "yearly" ? "year" : "month"})</p>
        <p className="text-black font-bold">
          ${total}/{formData.billing === "yearly" ? "yr" : "mo"}
        </p>
      </div>

      <div className="flex justify-between mt-auto">
        <button
          type="button"
          onClick={back}
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={confirm}
          type="submit"
          className="bg-[#051B33] text-white p-4 rounded-xl max-w-[122px] w-full cursor-pointer hover:bg-[#0A2A4D] transition duration-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
