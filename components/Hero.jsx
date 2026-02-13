'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{ backgroundImage: "url('/assets/hero.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm md:text-base font-sans font-light tracking-[0.3em] uppercase mb-4 text-white drop-shadow-md"
                >
                    Nuestra Física
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight drop-shadow-2xl text-white"
                >
                    Gravedad
                    <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-sans font-light tracking-[0.2em] italic text-rose-400 drop-shadow-lg">
                        & Conexión
                    </span>
                </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
            >
                <span className="text-xs uppercase tracking-widest font-bold">Comenzar Historia</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
