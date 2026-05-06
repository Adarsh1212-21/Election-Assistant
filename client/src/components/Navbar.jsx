import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const phases = [
  { label: "Home", path: "/" },
  { label: "Phase 1: Inform", path: "/inform" },
  { label: "Phase 2: Report", path: "/report" },
  { label: "Phase 3: Track", path: "/track" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100 shadow-sm">
      {/* Blue-purple tricolor top strip */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600" />

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div >
  <img src="/icon.svg" alt="Election Assistant" className="w-10 h-10" />
</div>
          <div>
            <span className="font-display font-bold text-lg text-ink leading-none block">
              Election
            </span>
            <span className="font-display font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 leading-none block">
              Assistant
            </span>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {phases.map((p) => (
            <NavLink
              key={p.path}
              to={p.path}
              end={p.path === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-violet-50 text-violet-600 border border-violet-200 shadow-sm"
                    : "text-indigo-400 hover:text-ink hover:bg-blue-50/60"
                }`
              }
            >
              <span>{p.emoji}</span>
              <span>{p.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Helpline badge */}
        <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-50 to-violet-50 border border-violet-200 rounded-full px-4 py-1.5 shadow-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-indigo-400 font-body">Helpline:</span>
          <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">
            1950
          </span>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-indigo-500 p-2 rounded-lg hover:bg-blue-50 hover:text-violet-600 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-violet-100 bg-white px-4 py-3 flex flex-col gap-1 shadow-card">
          {phases.map((p) => (
            <NavLink
              key={p.path}
              to={p.path}
              end={p.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-violet-50 text-violet-600 border border-violet-200"
                    : "text-indigo-400 hover:text-ink hover:bg-blue-50/60"
                }`
              }
            >
              <span className="text-lg">{p.emoji}</span>
              {p.label}
            </NavLink>
          ))}

          <div className="mt-2 pt-3 border-t border-violet-100 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-indigo-400">Voter Helpline:</span>
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">
              1950
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}