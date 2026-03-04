import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bus, ArrowRight, MapPin, ImageOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TourCard = ({ tour, onSelect }) => {
    const { t } = useTranslation();
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col h-full group cursor-pointer transition-all duration-500 ease-out"
            onClick={() => onSelect(tour)}
        >
            {/* Image Container - Aspect Ratio 4:3 */}
            <div className={`relative aspect-[4/3] overflow-hidden ${imgError ? 'bg-slate-100 flex items-center justify-center' : 'bg-slate-100'}`}>
                {!imgError ? (
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center text-slate-400 gap-2">
                        <ImageOff size={32} />
                        <span className="text-xs font-medium">{t('tour_card.no_image')}</span>
                    </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-royal-blue shadow-sm flex items-center gap-1.5 z-10">
                    <Bus size={12} />
                    {tour.duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow relative">
                <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 font-gujarati group-hover:text-royal-blue transition-colors leading-tight">
                        {tour.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {tour.description}
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 mt-auto">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-royal-blue/5 border border-royal-blue/10">
                        <Calendar size={16} className="text-royal-blue shrink-0" />
                        <div className="overflow-hidden">
                            <p className="text-[10px] uppercase text-royal-blue/60 font-bold tracking-wider">{t('tour_card.next')}</p>
                            <p className="text-sm font-semibold text-royal-blue truncate">{tour.dates[0]}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <MapPin size={16} className="text-amber-600 shrink-0" />
                        <div className="overflow-hidden">
                            <p className="text-[10px] uppercase text-amber-600/60 font-bold tracking-wider">{t('tour_card.type')}</p>
                            <p className="text-sm font-semibold text-amber-600 truncate">{tour.busType}</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-0.5">{t('tour_card.price_per_person')}</p>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{tour.price}</p>
                    </div>

                    <button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 transform group-hover:rotate-[-45deg]">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default TourCard;
