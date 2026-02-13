'use client';
import { motion } from 'framer-motion';

export default function Journey() {
    return (
        <section className="bg-black text-white py-24 md:py-48 px-6 md:px-12 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Text Side */}
                <div className="space-y-12 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-20%" }}
                    >
                        <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                            Forces & <br />
                            <span className="text-rose-500/80 italic">Attraction</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300 max-w-lg">
                            "Like gravity, some things are inevitable. Not a choice, but a fundamental law of our universe."
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="text-base md:text-lg font-sans text-neutral-500 max-w-md border-l border-neutral-800 pl-6"
                    >
                        Every moment since that first spark has been a constant pull towards you. No resistance, just pure motion.
                    </motion.p>
                </div>

                {/* Image Side */}
                <div className="relative order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="relative aspect-[3/4] w-full max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 bg-neutral-900 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]">
                            <img
                                src="/assets/journey.jpg"
                                alt="Us"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-20 h-20 border border-rose-500/20 rounded-full"
                        />
                        <motion.div
                            animate={{ y: [0, 30, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-5 -left-5 w-32 h-32 border border-blue-500/10 rounded-full"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
