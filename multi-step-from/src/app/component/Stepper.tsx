export default function Stepper({ currentStep }: { currentStep: number }) {
  const steps = ["Your Info", "Select Plan", "Add-ons", "Summary"];
  return (
    <div className="flex flex-col gap-2">
      {steps.map((label, i) => (
        <div key={i} className="flex flex-row items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              currentStep === i + 1 ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-300">Step {i + 1}</span>
            <span className="text-xs mt-1">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
