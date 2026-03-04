import React, { useState, useEffect } from 'react';
import { Phone, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'gu' ? 'en' : 'gu');
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? 'bg-white shadow-md py-3'
                    : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Brand */}
                    <div className="flex items-center gap-3 relative z-50">
                        <img
                            src={logoImg}
                            alt="JM Travels Logo"
                            className="h-12 w-auto object-contain rounded-md"
                        />
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <button onClick={toggleLanguage} className={`flex items-center gap-1 font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-royal-blue' : 'text-white/90 hover:text-white'
                            }`}>
                            <Globe size={16} />
                            <span>{i18n.language === 'gu' ? 'ENG' : 'GUJ'}</span>
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="bg-amber-accent hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <Phone size={16} />
                            <span>{t('header.call_now')}</span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X size={28} className="text-slate-800" />
                        ) : (
                            <Menu size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        <nav className="flex flex-col items-center gap-6 text-xl font-medium text-slate-700 w-full">
                            <a href="#" className="w-full text-center py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>{t('header.nav_home')}</a>
                            <a href="#tour-grid" className="w-full text-center py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>{t('header.nav_tours')}</a>
                            <a href="#" className="w-full text-center py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>{t('header.nav_about')}</a>
                            <a href="#" className="w-full text-center py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>{t('header.nav_contact')}</a>
                        </nav>

                        <div className="flex flex-col gap-4 w-full mt-auto mb-10">
                            <button onClick={toggleLanguage} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-100 text-slate-700 font-medium">
                                <Globe size={20} />
                                <span>{t('header.change_language')}</span>
                            </button>
                            <a
                                href="tel:+919876543210"
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-royal-blue text-white font-bold shadow-xl shadow-royal-blue/20"
                            >
                                <Phone size={20} />
                                <span>{t('header.call_number')}</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
