import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Check Eligibility",
    description: "You must be 18+ years old, an Indian citizen, and a resident of the constituency where you want to register.",
    checklist: [
      "Age 18 or above",
      "Indian citizenship",
      "Resident of the constituency",
      "Not declared of unsound mind by court",
    ],
  },
  {
    id: 2,
    title: "Gather Documents",
    description: "Collect the required documents before filling out the form.",
    checklist: [
      "Aadhaar Card (age & address proof)",
      "Passport-size photograph",
      "Proof of residence (utility bill / rent agreement)",
      "Date of birth proof (birth cert / school cert)",
    ],
  },
  {
    id: 3,
    title: "Fill the Form",
    description: "Fill Form 6 for new registration. Available at voters.eci.gov.in or at your ERO office.",
    checklist: [
      "Go to voters.eci.gov.in",
      'Click "New Registration" → Form 6',
      "Fill in personal details accurately",
      "Upload scanned documents",
      "Submit the form online or in person",
    ],
  },
  {
    id: 4,
    title: "Verification",
    description: "After submission, a Booth Level Officer (BLO) may visit your address for verification.",
    checklist: [
      "BLO will visit within 2-4 weeks",
      "Keep original documents ready",
      "Track status at voters.eci.gov.in",
      "Receive EPIC card by post / collect from ERO",
    ],
  },
];

export default function RegistrationGuide() {
  const [completed, setCompleted] = useState({});
  const [activeStep, setActiveStep] = useState(1);

  const toggleItem = (stepId, item) => {
    const key = `${stepId}-${item}`;
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const stepProgress = (stepId) => {
    const s = steps.find((s) => s.id === stepId);
    const done = s.checklist.filter((item) => completed[`${stepId}-${item}`]).length;
    return Math.round((done / s.checklist.length) * 100);
  };

  return (
    <div className="animate-slide-up min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-6">

      {/* Header banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 p-6 shadow-glow-violet">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          📋 Voter Registration Guide
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Complete each step and check off the tasks
        </p>
      </div>

      {/* Step tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {steps.map((s) => {
          const prog = stepProgress(s.id);
          const isActive = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-gradient-to-r from-blue-50 to-violet-50 border-violet-300 text-violet-600 shadow-sm"
                  : "bg-white border-violet-100 text-indigo-400 hover:text-ink hover:border-violet-200 hover:bg-blue-50/60"
                }`}
            >
              <span>{s.icon}</span>
              <span className="hidden sm:inline">{s.title}</span>
              {prog === 100 && (
                <span className="text-emerald-500 text-xs font-bold">✓</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active step content */}
      {steps.map((s) =>
        s.id === activeStep ? (
          <div key={s.id} className="animate-expand">
            <div className="bg-white border border-violet-100 rounded-2xl p-6 shadow-card">

              {/* Step header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-2xl shadow-glow-blue flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-lg leading-snug">
                    Step {s.id}: {s.title}
                  </h3>
                  <p className="text-sm text-indigo-400 mt-0.5">{s.description}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-indigo-400 font-medium">Progress</span>
                  <span className="text-violet-600 font-bold">{stepProgress(s.id)}%</span>
                </div>
                <div className="h-2 bg-violet-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${stepProgress(s.id)}%` }}
                  />
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                {s.checklist.map((item) => {
                  const key = `${s.id}-${item}`;
                  const done = !!completed[key];
                  return (
                    <button
                      key={item}
                      onClick={() => toggleItem(s.id, item)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200
                        ${done
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-blue-50/40 border-violet-100 text-ink hover:border-violet-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50"
                        }`}
                    >
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs transition-all duration-200
                        ${done
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-violet-200 bg-white"
                        }`}>
                        {done ? "✓" : ""}
                      </span>
                      <span className={`text-sm font-medium ${done ? "line-through opacity-50" : ""}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Next step button */}
              {activeStep < steps.length && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="
                    mt-6 w-full py-3 rounded-xl text-sm font-semibold text-white
                    bg-gradient-to-r from-blue-500 to-violet-600
                    hover:from-blue-600 hover:to-violet-700
                    shadow-glow-blue transition-all duration-200
                  "
                >
                  Next: {steps[activeStep].title} →
                </button>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}