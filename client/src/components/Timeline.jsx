import React, { useState, useEffect } from "react";
import { fetchTimeline } from "../services/api";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [steps, setSteps] = useState(timelineData);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    fetchTimeline()
      .then((res) => setSteps(res.data.data))
      .catch(() => setSteps(timelineData));
  }, []);

  const toggle = (id) => setActiveId(activeId === id ? null : id);

  return (
    <div className="animate-slide-up bg-white text-gray-800 p-4 rounded-2xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Election Timeline
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Click on any step to learn more about it
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative sm:pl-16">
              
              {/* Circle marker */}
              <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full bg-white border-2 border-blue-200 items-center justify-center text-xl z-10 shadow-sm">
                {step.icon}
              </div>

              {/* Step number */}
              <div className="hidden sm:flex absolute left-8 -top-1 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold items-center justify-center">
                {idx + 1}
              </div>

              <button
                onClick={() => toggle(step.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200
                  ${
                    activeId === step.id
                      ? "bg-blue-50 border-blue-300 shadow-sm"
                      : "bg-white border-blue-100 hover:border-blue-300 hover:bg-blue-50"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="sm:hidden text-2xl">{step.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {step.step}
                      </h3>
                      <span className="text-xs text-blue-600">
                        {step.date}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-gray-400 transition-transform duration-200 ${
                      activeId === step.id ? "rotate-180 text-blue-600" : ""
                    }`}
                  >
                    ▾
                  </span>
                </div>

                {activeId === step.id && (
                  <div className="animate-expand mt-4 pt-4 border-t border-blue-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {step.tips && (
                      <ul className="mt-3 space-y-1.5">
                        {step.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="text-blue-500 mt-0.5">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}