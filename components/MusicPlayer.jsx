'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);
    const audioRef = useRef(null);

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setShowPrompt(false);
                } catch (err) {
                    console.log("Esperando archivo de audio...", err);
                    setIsPlaying(false);
                }
            }
        }
    };

    return (
        <>
            {/* Initial Play Prompt - Heart Button */}
            <AnimatePresence>
                {showPrompt && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fffaf0]/95 backdrop-blur-sm px-6"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-rose-600 font-script text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 px-4"
                            >
                                Presiona para comenzar tu cartita de cumpleaños...
                            </motion.p>

                            <motion.button
                                onClick={togglePlay}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                {/* Heart Shape Button */}
                                <svg
                                    viewBox="0 0 32 29.6"
                                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 fill-rose-500 hover:fill-rose-600 transition-colors drop-shadow-[0_8px_30px_rgba(244,63,94,0.5)] group-hover:drop-shadow-[0_12px_40px_rgba(244,63,94,0.7)]"
                                >
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                                </svg>

                                {/* Play Icon inside heart */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Play className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white fill-white ml-1 sm:ml-2" />
                                </div>

                                {/* Pulse rings */}
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 -z-10"
                                >
                                    <svg viewBox="0 0 32 29.6" className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 fill-rose-400/30">
                                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                                    </svg>
                                </motion.div>
                            </motion.button>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-rose-400 text-xs sm:text-sm mt-4 sm:mt-6 font-sans"
                            >
                                Con música de fondo
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Music Player */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 sm:gap-4"
            >
                <audio ref={audioRef} loop src="/assets/songg.mp3" />

                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-rose-200 shadow-lg"
                        >
                            <span className="text-[10px] sm:text-xs font-sans text-rose-600 tracking-widest uppercase">
                                <span className="hidden md:inline">Alvarito Diaz - </span>
                                <span className="font-bold text-rose-500">1000 canciones</span>
                            </span>
                            <div className="flex gap-[2px] items-end h-3">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: ["20%", "100%", "20%"] }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                        className="w-[2px] bg-rose-500"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center"
                >
                    {/* Mini Heart Button */}
                    <svg
                        viewBox="0 0 32 29.6"
                        className="w-11 h-11 sm:w-14 sm:h-14 fill-rose-500 hover:fill-rose-600 transition-colors drop-shadow-[0_4px_15px_rgba(244,63,94,0.4)]"
                    >
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                        {isPlaying ? (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                        ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-0.5 sm:ml-1" />
                        )}
                    </div>

                    {/* Pulse when playing */}
                    {isPlaying && (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0"
                        >
                            <svg viewBox="0 0 32 29.6" className="w-11 h-11 sm:w-14 sm:h-14 fill-rose-400/30">
                                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                            </svg>
                        </motion.div>
                    )}
                </motion.button>
            </motion.div>
        </>
    );
}
