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
    <div>
      <h2 className="text-xl font-bold mb-2">Summary</h2>
      <p className="text-sm text-gray-500 mb-4">
        Double-check everything looks OK before confirming.
      </p>

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

      <div className="flex justify-between items-center mt-6">
        <button
          type="button"
          onClick={back}
          className="text-gray-600 hover:text-gray-800"
        >
          Go Back
        </button>
        <button
          type="button"
          onClick={confirm}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
