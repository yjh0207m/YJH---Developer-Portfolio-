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

const INTRO_SEEN_KEY = 'yjh-intro-seen'

// 홈으로 첫 진입한 세션에서만 인트로 재생 (재방문·딥링크·모션 감소 설정 시 생략)
function shouldSkipIntro() {
  if (window.location.pathname !== '/') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(shouldSkipIntro)

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1')
    } catch {
      // 저장소 접근 불가 시 무시
    }
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
