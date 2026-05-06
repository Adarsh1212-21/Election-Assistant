import React from "react";

const mockUpdates = [
  { time: "08:00 AM", event: "Polling begins across all constituencies", type: "info" },
  { time: "09:30 AM", event: "Voter turnout at 12% in North Delhi", type: "stat" },
  { time: "11:00 AM", event: "EVM replaced at Booth 42, Chandni Chowk", type: "alert" },
  { time: "01:00 PM", event: "Voter turnout at 34% nationally", type: "stat" },
  { time: "03:00 PM", event: "Record turnout in Tamil Nadu — 58% by 3 PM", type: "highlight" },
  { time: "05:00 PM", event: "Voting ends at 6 PM — queues still active", type: "info" },
];

const typeStyles = {
  info: "border-l-blue-200 text-gray-600",
  stat: "border-l-blue-400 text-blue-600",
  alert: "border-l-blue-500 text-blue-700",
  highlight: "border-l-blue-600 text-blue-800",
};

export default function Track() {
  return (
    <div className="w-full min-h-screen bg-white px-6 lg:px-12 py-10">
      <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-3">
          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
            Phase 3
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900">
          Track
        </h1>

        <p className="text-gray-500 mt-2">
          Live election updates, voter turnout, and result tracking.
        </p>
      </div>

      {/* Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Live Tracking — Coming Soon
        </h2>

        <p className="text-gray-500 text-sm max-w-md mx-auto">
          On election day, this page will show real-time voter turnout, constituency-wise results,
          and official updates. For now, here's a mock live feed.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot" />
          <span className="text-xs text-gray-500">Mock Live Feed Active</span>
        </div>
      </div>

      {/* Live Feed */}
      <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
        
        <div className="flex items-center gap-3 px-5 py-4 border-b border-blue-100 bg-blue-50">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse-dot" />
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-widest">
            Live Updates
          </h3>
          <span className="text-xs text-gray-500 ml-auto">
            Sample Election Day
          </span>
        </div>

        <div className="p-5 space-y-4">
          {mockUpdates.map((update, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 pl-4 border-l-2 ${typeStyles[update.type]}`}
            >
              <div>
                <p className="text-xs text-gray-500 mb-0.5 font-semibold">
                  {update.time}
                </p>
                <p className="text-sm text-gray-700">
                  {update.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
    </div>
  );
}