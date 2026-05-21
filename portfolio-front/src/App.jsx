import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import IntroAnimation from './components/common/IntroAnimation'
import CursorTrail from './components/common/CursorTrail'
import ScrollProgress from './components/common/ScrollProgress'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

const PAGE_TITLES = {
  '/': '유조현 포트폴리오',
  '/projects': 'Projects | 유조현 포트폴리오',
  '/about': 'About | 유조현 포트폴리오',
  '/contact': 'Contact | 유조현 포트폴리오',
}

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const base = location.pathname.startsWith('/projects/')
      ? 'Projects | 유조현 포트폴리오'
      : PAGE_TITLES[location.pathname] ?? '유조현 포트폴리오'
    document.title = base
  }, [location.pathname])
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default function App() {
  // 페이지 로드마다 인트로 재생 (SPA 내 페이지 이동 시에는 재생 안 함)
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <BrowserRouter>
      <ScrollProgress />
      {!introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      <Nav />
      <AnimatedRoutes />
      <Footer />
      <CursorTrail />
    </BrowserRouter>
  )
}
