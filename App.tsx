import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
import WorkWithUs from './pages/WorkWithUs';
import Contact from './pages/Contact';

// Scroll to top on route change, handling hash links for anchors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top first to reset position
    window.scrollTo(0, 0);

    // If there is a hash, attempt to scroll to the element
    if (hash) {
      const id = hash.replace('#', '');
      // Small timeout ensures the DOM is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/work-with-us" element={<WorkWithUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;