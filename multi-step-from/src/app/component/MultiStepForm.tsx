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

export type BillingType = "monthly" | "yearly";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
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
    const savedForm = localStorage.getItem("formData");
    const savedStep = localStorage.getItem("currentStep");
    const savedSubmitted = localStorage.getItem("submitted");
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
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("currentStep", step.toString());
    localStorage.setItem("submitted", submitted.toString());
  }, [formData, step, submitted]);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg flex gap-2">
      <div className="relative">
        <Image
          src="/images/bg-sidebar-desktop.svg"
          alt="sidebar background"
          width={300}
          height={100}
        />
        <div className="absolute top-0 left-0 p-3">
          <Stepper currentStep={step} />
        </div>
      </div>
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
  );
}
