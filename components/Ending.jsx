'use client';
import { motion } from 'framer-motion';

export default function Ending() {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-red-100 via-pink-50 to-rose-50 px-4 py-16 sm:py-20">
            {/* Decorative Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-rose-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-10 right-5 sm:right-10 w-52 sm:w-80 h-52 sm:h-80 bg-pink-200 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
                {/* The Core Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rose-300 shadow-[0_0_40px_rgba(244,63,94,0.3)] sm:shadow-[0_0_60px_rgba(244,63,94,0.3)] group"
                >
                    <img
                        src="/assets/ending.jpg"
                        alt="Para Siempre"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                </motion.div>

                {/* Typography */}
                <div className="text-center space-y-3 sm:space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-display text-4xl sm:text-5xl md:text-7xl tracking-wide max-w-2xl leading-none text-rose-900"
                    >
                        Mi <br />
                        <span className="text-red-500 italic text-3xl sm:text-4xl md:text-6xl">19+1</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="flex flex-col items-center space-y-2 mt-4 sm:mt-8"
                    >
                        <p className="text-rose-700 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold px-2 text-center">
                            Desde el 15 . 03 . 2006 haciendo tener rabia a la olga jeje
                        </p>
                        <div className="w-[2px] h-3 sm:h-4 bg-red-400 rounded-full" />
                        <p className="text-red-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base">
                            TE AMO POR SIEMPRE
                        </p>
                        <p className="text-rose-500 text-[10px] sm:text-xs tracking-widest mt-1 sm:mt-2 font-medium">
                            ❤️ Feliz Cumpleaños mi amor ❤️
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs mt-4 sm:mt-8 font-bold shadow-[0_4px_20px_rgba(239,68,68,0.4)]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Repetir Historia
                </motion.button>
            </div>
        </section>
    );
}
