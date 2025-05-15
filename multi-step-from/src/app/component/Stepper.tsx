export default function Stepper({ currentStep }: { currentStep: number }) {
  const steps = ["Your Info", "Select Plan", "Add-ons", "Summary"];
  return (
    <div className="flex flex-col gap-8">
      {steps.map((label, i) => (
        <div key={i} className="flex flex-row items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold border-white border-1 ${
              currentStep === i + 1 ? "bg-[#A6C2FF]" : "transparent"
            }
            }`}
          >
            {i + 1}
          </div>
          <div className="flex flex-col">
            <span className="text-base text-[#9CA2B0]">STEP {i + 1}</span>
            <span className="font-bold text-white">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
