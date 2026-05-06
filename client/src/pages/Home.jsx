import React from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    path: "/inform",
    phase: "Phase 1",
    title: "Inform",
    desc: "Learn the election process — timeline, registration guide, and how everything works.",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-200",
    badge: "text-blue-600",
  },
  {
    path: "/report",
    phase: "Phase 2",
    title: "Report",
    desc: "Find polling booths near you and get emergency help if something goes wrong.",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-200",
    badge: "text-blue-600",
  },
  {
    path: "/track",
    phase: "Phase 3",
    title: "Track",
    desc: "Track election updates, results, and voter turnout in real-time.",
    color: "from-blue-100 to-blue-50",
    border: "border-blue-200",
    badge: "text-blue-600",
  },
];

const stats = [
  { label: "Registered Voters", value: "96.8 Cr+" },
  { label: "Polling Booths", value: "10.5 Lakh+" },
  { label: "Constituencies", value: "543" },
  { label: "Voter Helpline", value: "1950" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 text-center animate-slide-up">

          {/* Top badge */}
          <div className="inline-flex rounded-full overflow-hidden mb-8 border border-blue-200">
            <span className="bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700">
              India
            </span>
            <span className="bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
              Electoral
            </span>
            <span className="bg-blue-200 px-4 py-1 text-xs font-semibold text-blue-800">
              Guide
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
            Your Vote.
            <br />
            <span className="text-blue-600">Your Power.</span>
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Understand the election process, find your polling booth, and get
            help when you need it — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/inform"
              className="px-8 py-4 bg-blue-600 text-white font-bold text-base rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
            >
              Get Started →
            </Link>

            <a
              href="tel:1950"
              className="px-8 py-4 bg-white border border-blue-200 text-blue-600 font-semibold text-base rounded-2xl hover:border-blue-400 transition-all"
            >
              Helpline: 1950
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-blue-100 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-bold text-gray-900 text-xl">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phases */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Three Phases of <span className="text-blue-600">Civic Action</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <Link
              key={p.path}
              to={p.path}
              className={`group p-6 rounded-2xl bg-gradient-to-b ${p.color} border ${p.border} hover:scale-[1.02] transition-all duration-300`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4">
                <span className={`text-xs font-semibold uppercase tracking-widest ${p.badge}`}>
                  {p.phase}
                </span>
                <h3 className="font-bold text-gray-900 text-2xl mt-1">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {p.desc}
              </p>

              <div className={`mt-4 text-xs font-semibold ${p.badge} group-hover:translate-x-1 transition-transform`}>
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            First time voter?
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Start with Phase 1 to understand everything about the election process.
          </p>

          <Link
            to="/inform"
            className="inline-block px-6 py-3 bg-blue-100 border border-blue-300 text-blue-700 font-semibold rounded-xl hover:bg-blue-200 transition text-sm"
          >
            Start Learning →
          </Link>
        </div>
      </div>
    </div>
  );
}