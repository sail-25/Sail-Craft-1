
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * A minimal, high-performance loading state that respects 
 * the site's aesthetic without causing significant layout shift.
 */
const LoadingState = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-sail-orange/20 border-t-sail-orange rounded-full animate-spin"></div>
    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-sail-green opacity-50">
      Optimizing Experience
    </p>
  </div>
);

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
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<LoadingState />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/work-with-us" element={<WorkWithUs />} />
                <Route path="/contact" element={<Contact />} />
                {/* Catch-all route for 404 Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
