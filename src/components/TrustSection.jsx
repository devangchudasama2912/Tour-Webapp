import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustSection = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-white py-12 sm:py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-2 block">{t('trust.badge')}</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-gujarati">
                        {t('trust.headline_1')}<br />
                        <span className="text-royal-blue">{t('trust.headline_2')}</span>
                    </h2>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed px-2">
                        {t('trust.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                    {[
                        {
                            title: t('trust.feat_1_title'),
                            desc: t('trust.feat_1_desc'),
                            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" // Modern Bus Interior (Verified)
                        },
                        {
                            title: t('trust.feat_2_title'),
                            desc: t('trust.feat_2_desc'),
                            img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop" // Indian Food (Verified)
                        },
                        {
                            title: t('trust.feat_3_title'),
                            desc: t('trust.feat_3_desc'),
                            img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" // Happy Senior Citizens (Verified)
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-slate-50 shadow-xl group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
