'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Sticker = ({ children, x, y, rotate, delay, scale = 1 }) => {
    return (
        <motion.div
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.8, scale: scale, rotate: rotate }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }}
            viewport={{ once: true }}
            className="absolute z-50 pointer-events-none block"
        >
            {children}
        </motion.div>
    );
};

// SVG Components for Doodles
const StarDoodle = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-rose-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

const HeartDoodle = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

const MusicNoteDoodle = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
        <circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

const PlanetDoodle = () => (
    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.0" className="text-purple-300 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]">
        <circle cx="12" cy="12" r="8" fill="currentColor" fillOpacity="0.1" />
        <path d="M2 12c0-4 4-8 10-8s10 4 10 8-4 8-10 8-10-4-10-8z" strokeDasharray="2 2" />
        <path d="M7 12c0 2 2.5 4 5 4s5-2 5-4-2.5-4-5-4-5 2-5 4z" />
    </svg>
);

// Placeholder Text Components for missing Images
const TextPlaceholder = ({ text, color = "rose" }) => {
    const borderColor = color === 'rose' ? 'border-rose-500/50' : color === 'blue' ? 'border-blue-500/50' : 'border-purple-500/50';
    const textColor = color === 'rose' ? 'text-rose-400' : color === 'blue' ? 'text-blue-400' : 'text-purple-400';

    return (
        <div className={`border-2 border-dashed ${borderColor} bg-black/40 backdrop-blur-sm p-4 rounded-xl text-center min-w-[120px]`}>
            <p className={`${textColor} font-display text-xs tracking-widest uppercase font-bold`}>
                {text}
            </p>
            <p className="text-[10px] text-white/50 mt-1">(Missing PNG)</p>
        </div>
    );
};

// Image Sticker with Fallback
const ImageSticker = ({ src, alt, placeholderText, color }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="relative group hover:scale-110 transition-transform duration-300 cursor-help">
            {!imgError ? (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setImgError(true)}
                    className="w-32 md:w-40 h-auto drop-shadow-xl"
                />
            ) : (
                <TextPlaceholder text={placeholderText} color={color} />
            )}
        </div>
    );
};

export default function StickerLayer() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">

            {/* Hero Section Stickers */}
            <Sticker x="5%" y="15%" rotate={-15} delay={0.5} scale={1.2}>
                <ImageSticker src="/assets/stickers/snoopy_love.png" alt="Snoopy Love" placeholderText="Snoopy Love" color="rose" />
            </Sticker>

            <Sticker x="80%" y="25%" rotate={10} delay={0.8}>
                <ImageSticker src="/assets/stickers/alvaro_logo.png" alt="Sad Boy Logo" placeholderText="Alvaro Logo" color="blue" />
            </Sticker>

            {/* Timeline Section Stickers */}
            <Sticker x="85%" y="40%" rotate={-20} delay={0.2} scale={0.8}>
                <HeartDoodle />
            </Sticker>

            <Sticker x="5%" y="50%" rotate={15} delay={0.4}>
                <MusicNoteDoodle />
            </Sticker>

            <Sticker x="15%" y="65%" rotate={-5} delay={0.3} scale={1.1}>
                <ImageSticker src="/assets/stickers/snoopy_chill.png" alt="Snoopy Chill" placeholderText="Snoopy Chill" color="purple" />
            </Sticker>

            <Sticker x="75%" y="75%" rotate={25} delay={0.5}>
                <PlanetDoodle />
            </Sticker>

            {/* Ending Section Stickers */}
            <Sticker x="10%" y="90%" rotate={-10} delay={0.2}>
                <p className="font-display text-4xl md:text-6xl text-rose-500/20 rotate-[-10deg] select-none">Forever</p>
            </Sticker>

            <Sticker x="85%" y="85%" rotate={15} delay={0.4} scale={0.7}>
                <StarDoodle />
            </Sticker>

        </div>
    );
}
