import { useEffect, useState } from 'react'

export default function SafeSpline({ scene, className = '', style }) {
  const [mounted, setMounted] = useState(false)
  const [SplineComp, setSplineComp] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setMounted(true)
    import('@splinetool/react-spline')
      .then(mod => {
        if (!active) return
        setSplineComp(() => mod.default)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('Failed to load Spline:', err)
        setError(err)
      })
    return () => {
      active = false
    }
  }, [])

  if (!mounted || error || !SplineComp) {
    return (
      <div className={`w-full h-full ${className}`} style={style}>
        <div className="w-full h-full bg-gradient-to-b from-emerald-900/20 via-emerald-900/30 to-emerald-950" />
      </div>
    )
  }

  const Spline = SplineComp
  return <Spline scene={scene} className={className} style={style} />
}
