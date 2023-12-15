import { useState,useEffect } from 'react'
import Home from './pages/home'
import Products from './pages/products'
import AboutUs from './pages/aboutus'
import Nav from './components/nav'
import NavSticky from './components/nav_sticky'
import Footer from './components/footer'


import { Route , Routes, } from 'react-router-dom'

function App() {
  const [displayElement, setDisplayElement] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisplayElement(true);
      } else {
        setDisplayElement(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div>
     <Nav /> 
     {displayElement && <NavSticky />}
     <Routes >
        <Route path="/" element={<Home /> }  />
        <Route path="/aboutus" element={<AboutUs /> }  />
        <Route path="/products" element={<Products /> }  />
     </Routes>
     <Footer />

    </div>
  )
}

export default App
