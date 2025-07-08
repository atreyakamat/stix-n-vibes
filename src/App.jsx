import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
