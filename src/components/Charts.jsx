import { useEffect, useRef } from 'react'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Filler, Tooltip, Legend } from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Filler, Tooltip, Legend)

export function RevenueLine({ labels, data, color = 'rgba(16,185,129,1)', glow = 'rgba(16,185,129,0.5)' }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    if (chartRef.current) chartRef.current.destroy()

    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
    gradient.addColorStop(0, color.replace('1)', '0.2)'))
    gradient.addColorStop(1, 'rgba(0,0,0,0)')

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data,
            borderColor: color,
            borderWidth: 3,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: { ticks: { color: '#a7f3d0' }, grid: { color: 'rgba(16,185,129,0.1)' } },
          y: { ticks: { color: '#a7f3d0' }, grid: { color: 'rgba(16,185,129,0.1)' } },
        },
      },
    })

    return () => chartRef.current?.destroy()
  }, [labels, data, color, glow])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export function PieChart({ labels, data, colors }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    if (chartRef.current) chartRef.current.destroy()

    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
            borderWidth: 2,
            borderColor: 'rgba(16,185,129,0.25)'
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#a7f3d0' } } },
      },
    })

    return () => chartRef.current?.destroy()
  }, [labels, data, colors])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
