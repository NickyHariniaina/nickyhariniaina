import Nav from './components/Nav'
import HeroIntro from './components/HeroIntro'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <HeroIntro />
        <About />
        <Work />
        <Footer />
      </main>
    </div>
  )
}
