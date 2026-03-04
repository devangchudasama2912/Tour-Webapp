import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);

    const scrollToTours = () => {
        const element = document.getElementById('tour-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-[100dvh] md:h-[95vh] w-full overflow-hidden bg-royal-blue">
            {/* Background Image with Fallback */}
            <div className="absolute inset-0 z-0">
                <img
                    // Verified: Himalayas / Mountains - https://unsplash.com/photos/brown-mountain-under-white-sky-fed622ff2c3b
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
                    alt="Himalayas Background"
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                />
                {/* Placeholder Gradient while loading or if fails */}
                <div className={`absolute inset-0 bg-gradient-to-br from-royal-blue via-[#1e293b] to-black transition-opacity duration-1000 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/30 to-transparent mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-6 pt-16 pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl w-full flex flex-col items-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg"
                    >
                        <div className="flex gap-0.5 text-amber-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <span className="text-white/90 text-xs font-bold uppercase tracking-widest">{t('hero.badge')}</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 font-gujarati leading-tight tracking-tight drop-shadow-2xl">
                        {t('hero.headline_1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100">
                            {t('hero.headline_2')}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light drop-shadow-md px-2">
                        {t('hero.sub_1')} <br className="hidden md:block" />
                        {t('hero.sub_2')}
                    </p>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTours}
                        className="group relative px-6 py-4 md:px-10 md:py-5 bg-white text-royal-blue font-bold rounded-full text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all flex items-center gap-3 mx-auto overflow-hidden"
                    >
                        <span className="relative z-10">{t('hero.cta')}</span>
                        <ChevronDown size={20} className="relative z-10 animate-bounce mt-1" />
                        <div className="absolute inset-0 bg-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative Gradient Fade at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20" />
        </div>
    );
};

export default Hero;
