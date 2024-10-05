"use client";

import clsx from "clsx";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

enum StepKey {
  DASHBOARD = "dashboard",
  PAYMENT = "payment",
  COMPLETED = "completed",
}
const STEPS: StepProps[] = [
  {
    label: "Dashboard",
    id: StepKey.DASHBOARD,
  },
  {
    label: "Payments",
    id: StepKey.PAYMENT,
  },
  {
    label: "Complete",
    id: StepKey.COMPLETED,
  },
];

export function PosStepper() {
  return (
    <div className="flex flex-row justify-center p-2 bg-white">
      <div className="flex flex-row gap-2">
        {STEPS.map((step) => (
          <Step key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
}

type StepProps = {
  label: string;
  id: string;
};
function Step(props: StepProps) {
  const [step, setStep] = useQueryState("step", { defaultValue: StepKey.DASHBOARD });
  const active = useMemo(() => step === props.id, [step, props.id]);
  return (
    <div
      onClick={() => setStep(props.id)}
      className={clsx([
        "w-40 px-8 py-2 rounded-full duration-500",
        active
          ? "bg-orange-500 text-slate-50 hover:bg-orange-600"
          : "text-slate-500 hover:text-slate-700 hover:bg-slate-100",
        "cursor-pointer select-none",
      ])}
    >
      <div className="font-bold text-center">{props.label}</div>
    </div>
  );
}
