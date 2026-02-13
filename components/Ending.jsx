'use client';
import { motion } from 'framer-motion';

export default function Ending() {
    return (
        <section className="h-screen relative flex items-center justify-center overflow-hidden bg-black text-white px-4">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/20 to-black z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
                {/* The Core Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(255,100,100,0.15)] group"
                >
                    <img
                        src="/assets/ending.jpg"
                        alt="Forever"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay" />
                </motion.div>

                {/* Typography */}
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-display text-5xl md:text-7xl tracking-wide max-w-2xl leading-none text-white drop-shadow-2xl"
                    >
                        Mi Centro de <br />
                        <span className="text-rose-400 italic text-4xl md:text-6xl drop-shadow-lg">Gravedad</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="flex flex-col items-center space-y-2 mt-8"
                    >
                        <p className="text-white uppercase tracking-[0.3em] text-xs drop-shadow-md">
                            Desde 29 . 03 . 2025
                        </p>
                        <div className="w-[1px] h-4 bg-white shadow-[0_0_10px_white]" />
                        <p className="text-rose-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base drop-shadow-lg">
                            Hasta Siempre
                        </p>
                        <p className="text-neutral-200 text-[10px] tracking-widest mt-2 drop-shadow-sm">
                            Feliz San Valentín
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="px-8 py-3 rounded-full border border-white/40 text-white hover:border-white transition-all uppercase tracking-[0.2em] text-xs backdrop-blur-md mt-8 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Repetir Historia
                </motion.button>
            </div>
        </section>
    );
}
