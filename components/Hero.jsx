'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20 sm:py-0">
            {/* Background with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{ backgroundImage: "url('/assets/hero.jpg')" }}
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-white/30 to-rose-100/90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xs sm:text-sm md:text-base font-sans font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 text-rose-800 drop-shadow-sm"
                >
                    Hoy en tu cumpleaños
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 tracking-tight text-rose-900 drop-shadow-lg leading-tight"
                >
                    Quiero que leas tu cartita
                    <span className="block text-lg sm:text-xl md:text-3xl lg:text-4xl mt-2 sm:mt-3 font-sans font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] italic text-red-500 drop-shadow-md">
                        de cumpleaños pues de que mas va a ser
                    </span>
                </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-700"
            >
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold">Comenzar</span>
                <div className="w-[1px] h-10 sm:h-16 bg-gradient-to-b from-rose-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
