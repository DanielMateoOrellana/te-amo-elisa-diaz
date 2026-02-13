'use client';
import { motion } from 'framer-motion';

export default function Ending() {
    return (
        <section className="h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-red-100 via-pink-50 to-rose-50 px-4">
            {/* Decorative Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
                {/* The Core Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rose-300 shadow-[0_0_60px_rgba(244,63,94,0.3)] group"
                >
                    <img
                        src="/assets/ending.jpg"
                        alt="Para Siempre"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                </motion.div>

                {/* Typography */}
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-display text-5xl md:text-7xl tracking-wide max-w-2xl leading-none text-rose-900"
                    >
                        Mi Centro de <br />
                        <span className="text-red-500 italic text-4xl md:text-6xl">Gravedad</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="flex flex-col items-center space-y-2 mt-8"
                    >
                        <p className="text-rose-700 uppercase tracking-[0.3em] text-xs font-semibold">
                            Desde 29 . 03 . 2025
                        </p>
                        <div className="w-[2px] h-4 bg-red-400 rounded-full" />
                        <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm md:text-base">
                            Hasta Siempre
                        </p>
                        <p className="text-rose-500 text-xs tracking-widest mt-2 font-medium">
                            ❤️ Feliz San Valentín ❤️
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
                    className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all uppercase tracking-[0.2em] text-xs mt-8 font-bold shadow-[0_4px_20px_rgba(239,68,68,0.4)]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Repetir Historia
                </motion.button>
            </div>
        </section>
    );
}
