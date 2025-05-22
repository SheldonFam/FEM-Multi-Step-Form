export default function Stepper({ currentStep }: { currentStep: number }) {
  const steps = ["Your Info", "Select Plan", "Add-ons", "Summary"];

  return (
    <div className="flex md:flex-col flex-row md:gap-8 gap-4 justify-center items-center md:items-start">
      {steps.map((label, i) => (
        <div
          key={i}
          className="flex md:flex-row flex-col items-center gap-1 md:gap-2"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-white ${
              currentStep === i + 1
                ? "bg-[#A6C2FF] text-[#051B33]"
                : "bg-transparent text-white"
            }`}
          >
            {i + 1}
          </div>
          <div className="hidden md:flex flex-col md:items-start items-center text-center md:text-left">
            <span className="text-xs md:text-base text-[#9CA2B0]">
              STEP {i + 1}
            </span>
            <span className="font-bold text-white text-sm md:text-base">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
