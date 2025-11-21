import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(1200px_600px_at_100%_20%,rgba(16,185,129,0.08),transparent)] bg-emerald-950">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(16,185,129,0.12),transparent_20%),radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(5,150,105,0.08),transparent_35%)]" />
      <div className="relative">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App