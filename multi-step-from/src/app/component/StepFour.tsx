import { FormData } from "./MultiStepForm";

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
    <div className="w-full flex flex-col gap-12 mt-12 max-w-[449px] mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#051B33]">Summary</h2>
        <p className="text-base text-[#9CA2B0]">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="border rounded p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">
              {formData.plan} (
              {formData.billing === "yearly" ? "Yearly" : "Monthly"})
            </div>
            <button onClick={back} className="text-sm text-blue-600 underline">
              Change
            </button>
          </div>
          <div className="font-medium">${planCost}</div>
        </div>

        {formData.addons.length > 0 && (
          <div className="space-y-2 border-t pt-4">
            {formData.addons.map((addon) => (
              <div
                className="flex justify-between text-sm text-gray-600"
                key={addon}
              >
                <span>{addon.replace(/([A-Z])/g, " $1")}</span>
                <span>${formData.billing === "yearly" ? 10 : 1}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 text-right text-sm text-gray-600">
          Total (per {formData.billing === "yearly" ? "year" : "month"}):{" "}
          <span className="text-black font-bold">${total}</span>
        </div>
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
