import React, { useState } from "react";
import BoothFinder from "../components/BoothFinder";
import SOS from "../components/SOS";

const tabs = [
  { id: "booth", label: "Booth Finder" },
  { id: "sos", label: "SOS Help" },
];

export default function Report() {
  const [activeTab, setActiveTab] = useState("booth");

  return (
    <div className="w-full min-h-screen bg-white px-6 lg:px-12 py-10">
      <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-3">
          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
            Phase 2
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          Find your polling booth and get instant help if you face any issue on election day.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-blue-100 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white border border-blue-200 text-gray-600 hover:text-blue-600 hover:border-blue-400"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === "booth" && <BoothFinder />}
        {activeTab === "sos" && <SOS />}
      </div>
    </div>
    </div>
  );
}