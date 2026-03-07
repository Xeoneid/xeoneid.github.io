import PillNav from './components/PillNav'
import Hero from './components/Hero'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <>
      <PillNav logo="/favicon.svg" logoAlt="Blas Ingiulla" items={navItems} />
      <Hero />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
