import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Utensils, Bus, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TourDetailModal = ({ tour, onClose }) => {
    const { t } = useTranslation();
    const [expandedDay, setExpandedDay] = useState(0);

    if (!tour) return null;

    const whatsappMessage = `Hello Jay Mahakali Travels, I am interested in the ${tour.title} starting ${tour.dates[0]}. Please send details.`;
    const whatsappLink = `https://wa.me/911234567890?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6"
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    className="bg-white w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto flex-grow">
                        {/* Header Image */}
                        <div className="relative h-48 sm:h-80">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
                                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-gujarati">{tour.title}</h2>
                                <div className="flex flex-wrap gap-4 text-white/90 text-sm font-medium">
                                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-amber-400" /> {tour.duration}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={16} className="text-amber-400" /> {t('tour_modal.next')} {tour.dates[0]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 pb-24">
                            {/* Why Choose Us Icons */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                                {[
                                    { icon: <Utensils size={24} />, text: t('tour_modal.food_title'), sub: t('tour_modal.food_sub') },
                                    { icon: <Bus size={24} />, text: t('tour_modal.bus_title'), sub: t('tour_modal.bus_sub') },
                                    { icon: <CheckCircle2 size={24} />, text: t('tour_modal.inc_title'), sub: t('tour_modal.inc_sub') },
                                    { icon: <Phone size={24} />, text: t('tour_modal.sup_title'), sub: t('tour_modal.sup_sub') }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-1.5 sm:gap-2">
                                        <div className="w-10 h-10 bg-royal-blue/10 text-royal-blue rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-royal-blue text-sm">{item.text}</p>
                                            <p className="text-xs text-slate-500">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold text-royal-blue mb-3">{t('tour_modal.about')}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {tour.description}
                                </p>
                            </div>

                            {/* Itinerary Accordion */}
                            <div>
                                <h3 className="text-lg font-bold text-royal-blue mb-4">{t('tour_modal.itinerary')}</h3>
                                <div className="space-y-3">
                                    {tour.itinerary.map((day, index) => (
                                        <div
                                            key={index}
                                            className={`border rounded-xl overflow-hidden transition-all duration-300 ${expandedDay === index ? 'border-amber-500 shadow-md bg-amber-50/10' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                                        >
                                            <button
                                                onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                                                className="w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 text-left"
                                            >
                                                <div className="flex items-start gap-3 sm:gap-4">
                                                    <div className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold ${expandedDay === index ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                        {day.day}
                                                    </div>
                                                    <span className={`font-semibold text-sm sm:text-base ${expandedDay === index ? 'text-royal-blue' : 'text-slate-700'}`}>
                                                        {day.title}
                                                    </span>
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {expandedDay === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-3 sm:p-4 pt-0 pl-11 sm:pl-16 text-slate-600 text-sm leading-relaxed border-t border-dashed border-amber-200/50 mt-2">
                                                            {day.details}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Bottom Bar */}
                    <div className="border-t border-gray-100 p-4 sm:p-6 bg-white flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs text-slate-400 font-medium uppercase">{t('tour_modal.total_price')}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl sm:text-3xl font-bold text-royal-blue">{tour.price}</span>
                                <span className="text-xs text-slate-500">{t('tour_modal.per_person')}</span>
                            </div>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20"
                        >
                            <MessageCircle size={20} />
                            <span>{t('tour_modal.book_wa')}</span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TourDetailModal;
