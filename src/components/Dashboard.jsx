import KPICard from './KPICard'
import { RevenueLine, PieChart } from './Charts'

export default function Dashboard() {
  return (
    <div className="-mt-28 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold text-emerald-50 tracking-tight">Analysis Dashboard</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KPICard title="Total Revenue" value="$123,456" subtitle="All Time" />
          <KPICard title="This Month Revenue" value="$8,940" subtitle="Current Month" />
          <KPICard title="Avg Growth" value="+10.4%" subtitle="Month over Month" />
          <KPICard title="Avg Qty/Month" value="245 units" subtitle="Average Sold" />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="rounded-3xl p-5 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.25)] h-80">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-emerald-50 font-medium">Revenue Trends</h2>
              <span className="text-emerald-200/60 text-xs">Jan - Apr</span>
            </div>
            <div className="h-[calc(100%-28px)]">
              <RevenueLine labels={["Jan","Feb","Mar","Apr"]} data={[22000,26000,31000,28000]} />
            </div>
          </div>

          <div className="rounded-3xl p-5 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.25)] h-80">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-emerald-50 font-medium">User Engagement (3 Months)</h2>
              <span className="text-emerald-200/60 text-xs">Jan - Mar</span>
            </div>
            <div className="h-[calc(100%-28px)]">
              <RevenueLine labels={["Jan","Feb","Mar"]} data={[18000,21500,29000]} color="rgba(244,63,94,1)" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
          <div className="rounded-3xl p-5 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.25)] h-80">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-emerald-50 font-medium">Country Sales</h2>
            </div>
            <div className="h-[calc(100%-28px)]">
              <PieChart labels={["Country A","Country B","Country C","Country D","Country E"]} data={[40,25,15,10,10]} colors={["#10b981","#34d399","#6ee7b7","#a7f3d0","#064e3b"]} />
            </div>
          </div>

          <div className="rounded-3xl p-5 bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 shadow-[0_0_35px_rgba(16,185,129,0.25)] h-80">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-emerald-50 font-medium">Payment Mode Distribution</h2>
            </div>
            <div className="h-[calc(100%-28px)]">
              <PieChart labels={["UPI / Digital Wallets","Credit Card","Debit Card","Cash"]} data={[70,15,10,5]} colors={["#10b981","#059669","#047857","#064e3b"]} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
