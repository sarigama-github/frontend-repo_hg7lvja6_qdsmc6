import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could log this to a monitoring service
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/20">
          <div className="px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-950/60 text-emerald-100 text-sm">
            3D scene failed to load. Showing fallback.
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
