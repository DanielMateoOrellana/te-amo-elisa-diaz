'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, Heart } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
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
                } catch (err) {
                    console.log("Esperando archivo de audio...", err);
                    setIsPlaying(false);
                }
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
        >
            <audio ref={audioRef} loop src="/assets/song.mp3" />

            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/5"
                    >
                        <span className="text-xs font-sans text-white/80 tracking-widest uppercase">
                            Alvarito Diaz - <span className="font-bold text-white">Gongoli</span>
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

            <button
                onClick={togglePlay}
                className="relative w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all group"
            >
                {isPlaying ? (
                    <Pause size={20} className="fill-white" />
                ) : (
                    <Play size={20} className="fill-white ml-1" />
                )}

                {/* Ripple Effect */}
                <span className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
            </button>
        </motion.div>
    );
}
