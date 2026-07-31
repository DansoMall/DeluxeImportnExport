import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { NewsPage } from './pages/NewsPage';
import { PackagersPage } from './pages/PackagersPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-full w-full bg-[#0b0f16]">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/packagers" element={<PackagersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>);

}