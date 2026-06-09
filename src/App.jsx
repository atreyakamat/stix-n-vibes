import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Shared Components
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { BackToTop } from './components/BackToTop'
import { ErrorBoundary } from './components/ErrorBoundary'

// Lazy load pages for peak performance code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const OurStory = lazy(() => import('./pages/OurStory'));
const StickerPacks = lazy(() => import('./pages/StickerPacks'));
const CustomOrders = lazy(() => import('./pages/CustomOrders'));
const ForBrands = lazy(() => import('./pages/ForBrands'));
const Inquiries = lazy(() => import('./pages/Inquiries'));
const FAQ = lazy(() => import('./pages/FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Skeleton loader for Suspense fallback
function PageSkeleton() {
  return (
    <div className="min-h-screen bg-cream select-none">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Hero skeleton */}
      <div className="pt-28 sm:pt-32 pb-10 px-6 max-w-4xl mx-auto text-center space-y-4">
        <div className="w-24 h-3 bg-cream-400/40 rounded-full mx-auto animate-pulse" />
        <div className="w-full max-w-lg h-10 bg-cream-400/30 rounded-2xl mx-auto animate-pulse" />
        <div className="w-3/4 h-4 bg-cream-400/20 rounded-lg mx-auto animate-pulse" />
      </div>

      {/* Card grid skeleton */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-sticker overflow-hidden border border-black/5 shadow-sticker">
              <div className="aspect-[4/3] bg-cream-300/40 animate-pulse" />
              <div className="p-5 space-y-2">
                <div className="w-2/3 h-4 bg-cream-400/30 rounded animate-pulse" />
                <div className="w-full h-3 bg-cream-400/20 rounded animate-pulse" />
                <div className="w-1/3 h-3 bg-cream-400/15 rounded animate-pulse mt-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Auto Scroll Reset Component on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Page transition wrapper
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/packs" element={<StickerPacks />} />
            <Route path="/custom" element={<CustomOrders />} />
            <Route path="/brands" element={<ForBrands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <ScrollProgress />
        {/* Floating global navigation navbar */}
        <Header />
        <AnimatedRoutes />
        <BackToTop />
      </ErrorBoundary>
    </Router>
  )
}

export default App
