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
                {/* Very light overlay just for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 via-transparent to-rose-100/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm md:text-base font-sans font-light tracking-[0.3em] uppercase mb-4 text-rose-800 drop-shadow-sm"
                >
                    Nuestra Física
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-display text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight text-rose-900 drop-shadow-lg"
                >
                    Gravedad
                    <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-sans font-light tracking-[0.2em] italic text-red-500 drop-shadow-md">
                        & Conexión
                    </span>
                </motion.h1>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-700"
            >
                <span className="text-xs uppercase tracking-widest font-bold">Comenzar Historia</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-rose-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
