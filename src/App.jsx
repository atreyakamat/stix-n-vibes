import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import FloatingCart from './components/FloatingCart'
import './App.css'

// Pages
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Collections from './pages/Collections'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CustomPage from './pages/CustomPage'
import PolaroidPage from './pages/PolaroidPage'
import PosterSeriesPage from './pages/PosterSeriesPage'
import CollabPage from './pages/CollabPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/polaroid" element={<PolaroidPage />} />
          <Route path="/poster-series" element={<PosterSeriesPage />} />
          <Route path="/collabs" element={<CollabPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCart />
      </Router>
    </CartProvider>
  )
}

export default App
