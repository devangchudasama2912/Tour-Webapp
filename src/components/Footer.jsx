import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-slate-900 text-slate-300 py-10 sm:py-16 px-4 font-light">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Jay Mahakali Tours & Travels</h2>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/jaymahakali.tours" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/share/1Jxg2ehxxp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">{t('footer.contact')}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-amber-500 mt-0.5" size={18} />
                                <span>
                                    31, Solitaire Arcade,<br />
                                    Nr Sadhi Mata Mandir, New Naroda,<br />
                                    Ahmedabad, Gujarat
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-amber-500" size={18} />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">{t('footer.company')}</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">{t('footer.link_about')}</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">{t('footer.link_fleet')}</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">{t('footer.link_test')}</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">{t('footer.link_privacy')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Jay Mahakali Travels. {t('footer.rights')}</p>
                    <p>{t('footer.credit')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
