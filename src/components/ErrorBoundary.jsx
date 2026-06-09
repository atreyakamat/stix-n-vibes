import React from 'react'
import { Home, RefreshCw } from 'lucide-react'

/**
 * React Error Boundary — catches JS errors in child components
 * and renders a friendly fallback instead of a white screen.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 select-none">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

          <div className="relative z-10 text-center max-w-md">
            <h1 className="font-script liquid-glass text-6xl sm:text-7xl leading-none mb-6">
              oops
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-3 tracking-tight">
              Something went wrong.
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed mb-8">
              This sticker got a little wrinkled. Try refreshing the page or heading back home.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto bg-brand-dark text-white font-bold text-sm px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-brand-charcoal transition-colors cursor-pointer shadow-sticker"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </button>
              <a
                href="/"
                className="w-full sm:w-auto bg-white text-brand-dark font-bold text-sm px-7 py-3 rounded-full border border-black/8 flex items-center justify-center gap-2 hover:bg-cream-300/50 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                Go Home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
