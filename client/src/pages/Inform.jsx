import React, { useState } from "react";
import Timeline from "../components/Timeline";
import RegistrationGuide from "../components/RegistrationGuide";
import ChatBox from "../components/ChatBox";

const tabs = [
  { id: "timeline", label: "Election Timeline" },
  { id: "register", label: "Registration Guide" },
  { id: "chat", label: "Ask Voti" },
];

export default function Inform() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <div className="w-full min-h-screen bg-white px-6 lg:px-12 py-10">
  <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-8 ">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-3">
          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
            Phase 1
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 ">
          Inform
        </h1>

        <p className="text-gray-500 mt-2">
          Learn everything about the election process — step by step.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-blue-100 pb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200
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
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "register" && <RegistrationGuide />}
        {activeTab === "chat" && <ChatBox />}
      </div>
    </div>
    </div>
  );
}