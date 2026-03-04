import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TourCard from './components/TourCard';
import TourDetailModal from './components/TourDetailModal';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import { getTours } from './data/tours';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedTourId, setSelectedTourId] = useState(null);

  const tours = getTours(i18n.language);
  const selectedTour = tours.find(tour => tour.id === selectedTourId) || null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <main>
        <Hero />

        {/* Tour Grid Section */}
        <section id="tour-grid" className="py-12 sm:py-20 px-4 container mx-auto -mt-20 relative z-30">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-4 font-gujarati">{t('app.upcoming_yatra')}</h2>
            <div className="w-24 h-1 bg-amber-accent mx-auto rounded-full" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onSelect={(tour) => setSelectedTourId(tour.id)}
              />
            ))}
          </motion.div>
        </section>

        <TrustSection />
      </main>

      <Footer />

      {/* Modal */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTourId(null)}
      />
    </div>
  );
}

export default App;
