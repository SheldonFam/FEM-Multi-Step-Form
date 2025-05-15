import { FormData } from "./MultiStepForm";

interface Props {
  next: () => void;
  back: () => void;
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
}

const availableAddons = [
  {
    id: "onlineSupport",
    label: "Online service",
    description: "Access to 24/7 support",
  },
  {
    id: "largerStorage",
    label: "Larger storage",
    description: "Extra 1TB of cloud storage",
  },
  {
    id: "customProfile",
    label: "Customizable profile",
    description: "Custom themes on your profile",
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
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2">Pick add-ons</h2>
      <p className="text-sm text-gray-500 mb-4">
        Add-ons help enhance your experience.
      </p>

      <div className="space-y-4">
        {availableAddons.map((addon) => (
          <label
            key={addon.id}
            className={`flex items-center border p-4 rounded cursor-pointer ${
              formData.addons.includes(addon.id)
                ? "border-blue-600 bg-blue-50"
                : ""
            }`}
          >
            <input
              type="checkbox"
              checked={formData.addons.includes(addon.id)}
              onChange={() => toggleAddon(addon.id)}
              className="mr-4"
            />
            <div>
              <div className="font-medium">{addon.label}</div>
              <div className="text-sm text-gray-500">{addon.description}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={back}
          className="text-gray-600 hover:text-gray-800"
        >
          Go Back
        </button>
        <button
          type="button"
          onClick={next}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
