import { useEffect, useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
    setCurrentHash(window.location.hash);
      
    setTimeout(() => {
      if (window.location.hash) {
        const hashElement = document.querySelector(window.location.hash);
        
        if (hashElement) {
          console.log("SINIIIII")
          hashElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }

      if (window.location.hash === '#contact') {
        window.scrollTo(0, 0);
      }
    }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Loading Page */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      
      <div className={`min-h-screen transition-opacity duration-300 
        ${isLoaded ? "opacity-100" : "opacity-0"} 
        bg-[#0f2242] text-[#c1d8f6]`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          {currentHash !== '#contact' && (
            <>
              <Home />
              <About />
              <Projects />
            </>
          )}

          {currentHash === '#contact' && <Contact />}
      </div>
    </>
  )
}

export default App
