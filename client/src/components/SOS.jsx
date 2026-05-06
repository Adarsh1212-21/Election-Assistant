import React, { useState } from "react";

const sosOptions = [
  {
    id: "machine",
    label: "EVM Not Working",
    color: "text-blue-600",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    steps: [
      "Stay calm and do NOT leave the booth",
      "Inform the Presiding Officer (PO) immediately",
      "PO will halt voting and seal the malfunctioning EVM",
      "A replacement EVM will be provided by the Election Commission",
      "Vote once the new machine is set up",
      "If issue persists, call the ECI helpline: 1950",
    ],
  },
  {
    id: "queue",
    label: "Long Queue / Crowd",
    color: "text-blue-600",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    steps: [
      "Check your token/slip number from the booth officer",
      "You can step away and return — your place is secured",
      "Senior citizens & disabled voters get priority queue",
      "Polling hours can be extended if queue exists at closing time",
      "Call Voter Helpline 1950 for assistance",
      "Report harassment to the nearest election observer",
    ],
  },
  {
    id: "missing",
    label: "Name Missing from List",
    color: "text-blue-700",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    steps: [
      "Do NOT panic — this can be resolved",
      "Contact the Booth Level Officer (BLO) at the booth",
      "Check if you're registered at voters.eci.gov.in",
      "Verify your correct polling booth — you may be redirected",
      "Apply for a Tender Vote if you are legally registered",
      "File a complaint at the ERO office or call 1950",
    ],
  },
  {
    id: "harassment",
    label: "Harassment / Intimidation",
    color: "text-blue-700",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    steps: [
      "Move to a safe area within or near the polling booth",
      "Inform the Presiding Officer immediately",
      "Call Police: 100 or Women Helpline: 1091",
      "Contact the Election Observer posted at the constituency",
      "Note down evidence (time, description) if possible",
      "File a formal complaint at the District Election Office",
    ],
  },
];

export default function SOS() {
  const [activeId, setActiveId] = useState(null);
  const active = sosOptions.find((s) => s.id === activeId);

  return (
    <div className="animate-slide-up bg-white text-gray-800 p-4 rounded-2xl">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-3">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot" />
          <span className="text-xs text-blue-600 font-semibold">
            Emergency Help
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          SOS / Help Section
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Having a problem at the polling booth? We've got you covered.
        </p>
      </div>

      {/* Helpline bar */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          { label: "Voter Helpline", number: "1950" },
          { label: "Police", number: "100" },
          { label: "Women Helpline", number: "1091" },
        ].map((h) => (
          <a
            key={h.label}
            href={`tel:${h.number}`}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-xl hover:border-blue-400 transition group shadow-sm"
          >
            <div>
              <p className="text-xs text-gray-500">{h.label}</p>
              <p className="text-sm font-bold text-blue-600 group-hover:text-blue-800 transition">
                {h.number}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Problem cards */}
      {!activeId ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sosOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveId(opt.id)}
              className={`text-left p-5 rounded-2xl border ${opt.borderColor} ${opt.bgColor} hover:scale-[1.02] transition-all duration-200`}
            >
              <h3 className={`font-bold text-base ${opt.color}`}>
                {opt.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Tap for step-by-step guidance →
              </p>
            </button>
          ))}
        </div>
      ) : (
        <div className="animate-expand">
          <button
            onClick={() => setActiveId(null)}
            className="text-sm text-gray-500 hover:text-gray-800 transition mb-4"
          >
            ← Back to issues
          </button>

          <div
            className={`bg-white border ${active.borderColor} rounded-2xl p-6 shadow-sm`}
          >
            <h3 className={`font-bold text-xl mb-5 ${active.color}`}>
              {active.label}
            </h3>

            <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">
              Follow these steps:
            </p>

            <div className="space-y-3">
              {active.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${active.bgColor} ${active.color} border ${active.borderColor}`}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}