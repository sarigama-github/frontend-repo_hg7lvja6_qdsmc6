import { Menu, Home, LineChart, BarChart3, Users, User } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="sticky top-0 z-20 w-full backdrop-blur-xl bg-emerald-900/30 border-b border-emerald-400/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-xl bg-emerald-800/40 border border-emerald-500/20 text-emerald-200 hover:bg-emerald-700/40 transition">
              <Menu className="w-5 h-5" />
            </button>
            <div className="h-9 w-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.35)] flex items-center justify-center">
              <div className="h-6 w-6 rounded-lg bg-emerald-400/30 border border-emerald-300/30" />
            </div>
            <span className="text-emerald-100 font-semibold tracking-wide"> </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Tab icon={Home} label="Home" />
            <Tab icon={LineChart} label="Analysis" active />
            <Tab icon={BarChart3} label="Analytics" />
            <Tab icon={Users} label="Employees" />
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-600/20 border border-emerald-400/30 shadow-[0_0_25px_rgba(16,185,129,0.25)] flex items-center justify-center">
              <User className="w-5 h-5 text-emerald-100" />
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-[260px] sm:h-[320px]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-emerald-950/60 to-emerald-950" />
      </div>
    </div>
  );
}

function Tab({ icon: Icon, label, active }) {
  return (
    <button
      className={`group px-4 h-10 rounded-2xl flex items-center gap-2 border transition shadow-[inset_0_0_0_1px_rgba(16,185,129,0.25)] ${
        active
          ? "bg-emerald-700/30 border-emerald-400/40 text-emerald-50"
          : "bg-emerald-800/20 border-emerald-500/20 text-emerald-200 hover:bg-emerald-700/30 hover:border-emerald-400/30 hover:text-emerald-50"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{label}</span>
    </button>
  );
}
