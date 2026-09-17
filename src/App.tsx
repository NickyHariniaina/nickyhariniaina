import { Routes, Route, Navigate } from 'react-router-dom'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

export default function App() {
  return (
    <div className="site">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}