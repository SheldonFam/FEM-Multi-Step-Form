import { FormData } from "./MultiStepForm";

interface Props {
  next: () => void;
  back: () => void;
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
}

export const availableAddons = [
  {
    id: "1",
    label: "Online service",
    description: "Access to 24/7 support",
    price: { monthly: 1, yearly: 10 },
  },
  {
    id: "2",
    label: "Larger storage",
    description: "Extra 1TB of cloud storage",
    price: { monthly: 2, yearly: 20 },
  },
  {
    id: "3",
    label: "Customizable profile",
    description: "Custom themes on your profile",
    price: { monthly: 2, yearly: 20 },
  },
];

export default function StepThree({ next, back, formData, updateForm }: Props) {
  const toggleAddon = (addonId: string) => {
    const addons = formData.addons.includes(addonId)
      ? formData.addons.filter((id) => id !== addonId)
      : [...formData.addons, addonId];

    updateForm({ addons });
  };

  return (
    <div className="w-full flex flex-col gap-12 mt-12 max-w-[449px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Pick add-ons</h2>
        <p className="text-sm text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {availableAddons.map((addon) => (
          <label
            key={addon.id}
            className={`flex flex-row items-center justify-between border p-4 rounded cursor-pointer ${
              formData.addons.includes(addon.id)
                ? "border-[#5C3DFF] bg-[#F8FBFF]"
                : "border-[#9CA2B0]"
            }`}
          >
            <div className="flex flex-row items-center gap-4">
              <input
                type="checkbox"
                checked={formData.addons.includes(addon.id)}
                onChange={() => toggleAddon(addon.id)}
                className="accent-[#5C3DFF] scale-125"
              />
              <div>
                <div className="font-medium">{addon.label}</div>
                <div className="text-sm text-gray-500">{addon.description}</div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600">
                $
                {formData.billing === "monthly"
                  ? addon.price.monthly
                  : addon.price.yearly}
                / {formData.billing === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          </label>
        ))}
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
