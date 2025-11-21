export default function KPICard({ title, value, subtitle, accent = "emerald" }) {
  const glow = accent === "red" ? "shadow-[0_0_25px_rgba(239,68,68,0.35)]" : "shadow-[0_0_25px_rgba(16,185,129,0.35)]";
  const border = accent === "red" ? "border-red-400/30" : "border-emerald-400/30";
  const bg = accent === "red" ? "bg-red-500/10" : "bg-emerald-500/10";

  return (
    <div className={`rounded-3xl p-5 ${bg} backdrop-blur-xl border ${border} ${glow} hover:scale-[1.01] transition-transform`}> 
      <div className="text-sm text-emerald-200/80">{title}</div>
      <div className="mt-2 text-3xl font-semibold text-emerald-50">{value}</div>
      {subtitle && <div className="mt-1 text-xs text-emerald-300/70">{subtitle}</div>}
    </div>
  );
}
