import React, { useState } from "react";
import { fetchBooths } from "../services/api";
import { boothData } from "../data/boothData";

const crowdColor = {
  Low:      "text-emerald-600 bg-emerald-50 border-emerald-200",
  Moderate: "text-amber-600  bg-amber-50  border-amber-200",
  High:     "text-red-500    bg-red-50    border-red-200",
};

const crowdIcon = { Low: "🟢", Moderate: "🟡", High: "🔴" };

export default function BoothFinder() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    setMessage("");

    const isPin = /^\d+$/.test(query.trim());
    const params = isPin ? { pin: query.trim() } : { area: query.trim() };

    try {
      const res = await fetchBooths(params);
      setResults(res.data.data);
      if (!res.data.success) setMessage(res.data.message);
    } catch {
      const q = query.trim().toLowerCase();
      const local = boothData.filter(
        (b) => b.pin === query.trim() || b.area.toLowerCase().includes(q)
      );
      if (local.length > 0) {
        setResults(local);
      } else {
        setResults(boothData.slice(0, 3));
        setMessage("No booths found for your area. Showing nearest booths.");
      }
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="animate-slide-up min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-6">
      {/* Header banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 p-6 shadow-glow-violet">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          🗳️ Polling Booth Finder
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Enter your PIN code or area name to find nearby booths
        </p>
      </div>

      {/* Search bar */}
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Enter PIN code (e.g. 110001) or area name..."
          className="
            flex-1 bg-white border border-violet-200 rounded-xl px-4 py-3
            text-sm text-ink placeholder-indigo-300
            focus:outline-none focus:ring-2 focus:ring-violet-400/40 focus:border-violet-400
            shadow-card transition
          "
        />
        <button
          onClick={search}
          disabled={!query.trim() || loading}
          className="
            px-6 py-3 rounded-xl font-semibold text-sm text-white
            bg-gradient-to-r from-blue-500 to-violet-600
            hover:from-blue-600 hover:to-violet-700
            shadow-glow-blue transition-all duration-200
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Searching
            </span>
          ) : "Search"}
        </button>
      </div>

      {/* Quick PIN chips */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <span className="text-xs text-indigo-400 font-medium mr-1">Try:</span>
        {["110001", "400001", "700001", "600001", "560001"].map((pin) => (
          <button
            key={pin}
            onClick={() => setQuery(pin)}
            className="
              text-xs px-3 py-1 rounded-full font-medium
              bg-white border border-violet-200 text-indigo-500
              hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50
              hover:border-violet-400 hover:text-violet-700
              shadow-sm transition-all
            "
          >
            {pin}
          </button>
        ))}
      </div>

      {/* Warning message */}
      {message && (
        <div className="mb-5 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm flex items-start gap-2">
          <span>⚠️</span>
          <span>{message}</span>
        </div>
      )}

      {/* Results */}
      {searched && results.length > 0 && (
        <div className="space-y-3 animate-expand">
          <p className="text-sm text-indigo-400 font-medium">
            Found{" "}
            <span className="text-violet-600 font-bold">{results.length}</span>{" "}
            polling booth{results.length > 1 ? "s" : ""}
          </p>

          {results.map((booth) => (
            <div
              key={booth.id}
              className="
                bg-white border border-violet-100 rounded-2xl p-4
                hover:border-violet-300 hover:shadow-glow-violet
                transition-all duration-200 shadow-card
                bg-gradient-to-br from-white to-blue-50/40
              "
            >
              <div className="flex items-start gap-4">
                <div className="w-1 self-stretch rounded-full bg-gradient-to-b from-blue-400 to-violet-500 flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-ink text-sm leading-snug">
                    {booth.name}
                  </h3>
                  <p className="text-xs text-indigo-400 mt-0.5 truncate">{booth.address}</p>
                </div>

                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className={`text-xs px-2.5 py-1 rounded-lg border font-semibold ${crowdColor[booth.crowd]}`}>
                    {crowdIcon[booth.crowd]} {booth.crowd}
                  </span>
                  <span className="text-xs text-indigo-300 font-medium">{booth.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {searched && results.length === 0 && !loading && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 mb-4">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-indigo-400 text-sm">No booths found. Try a different PIN or area.</p>
        </div>
      )}
    </div>
  );
}