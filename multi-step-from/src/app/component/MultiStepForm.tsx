/* File: components/MultiStepForm.tsx */

"use client";

import { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import ThankYou from "./ThankYou";
import Stepper from "./Stepper";
import Image from "next/image";
import { plans } from "./StepTwo"; // or wherever you move it to

export type Plan = (typeof plans)[number]["name"];

export type BillingType = "monthly" | "yearly";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  billing: BillingType;
  addons: string[];
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  billing: "monthly",
  addons: [],
};

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const updateForm = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const confirm = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    const savedForm = sessionStorage.getItem("formData");
    const savedStep = sessionStorage.getItem("currentStep");
    const savedSubmitted = sessionStorage.getItem("submitted");
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
    if (savedStep) {
      setStep(Number(savedStep));
    }
    if (savedSubmitted === "true") {
      setSubmitted(true);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
    sessionStorage.setItem("currentStep", step.toString());
    sessionStorage.setItem("submitted", submitted.toString());
  }, [formData, step, submitted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f6ff]">
      <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[942px] p-4 min-h-[600px]">
        <div className="relative bg-transparent min-w-[274px] flex flex-col justify-between">
          <div className="absolute">
            <Image
              src="/images/bg-sidebar-desktop.svg"
              alt="sidebar background"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative p-8 ">
            <Stepper currentStep={step} />
          </div>
        </div>
        <div className="flex flex-1 w-full">
          {!submitted && step === 1 && (
            <StepOne next={next} formData={formData} updateForm={updateForm} />
          )}
          {!submitted && step === 2 && (
            <StepTwo
              next={next}
              back={back}
              formData={formData}
              updateForm={updateForm}
            />
          )}
          {!submitted && step === 3 && (
            <StepThree
              next={next}
              back={back}
              formData={formData}
              updateForm={updateForm}
            />
          )}
          {!submitted && step === 4 && (
            <StepFour back={back} formData={formData} confirm={confirm} />
          )}
          {submitted && <ThankYou />}
        </div>
      </div>
    </div>
  );
}
