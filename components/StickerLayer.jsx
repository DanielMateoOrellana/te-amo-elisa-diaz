'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Sticker flotante con animaciones avanzadas
const FloatingSticker = ({
    children,
    x,
    y,
    initialRotate = 0,
    floatRange = 15,
    floatDuration = 4,
    rotateRange = 5,
    delay = 0,
    scale = 1,
    hideOnMobile = false
}) => {
    return (
        <motion.div
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: initialRotate - 180 }}
            whileInView={{ opacity: 1, scale: scale, rotate: initialRotate }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: delay
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={`absolute z-30 pointer-events-none ${hideOnMobile ? 'hidden sm:block' : ''}`}
        >
            <motion.div
                animate={{
                    y: [0, -floatRange, 0, floatRange / 2, 0],
                    x: [0, floatRange / 3, 0, -floatRange / 3, 0],
                    rotate: [initialRotate, initialRotate + rotateRange, initialRotate, initialRotate - rotateRange, initialRotate],
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay * 0.5
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Sticker con efecto de rebote
const BouncingSticker = ({ children, x, y, delay = 0, scale = 1, hideOnMobile = false }) => {
    return (
        <motion.div
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, y: -50 }}
            whileInView={{ opacity: 1, scale: scale, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                delay: delay
            }}
            viewport={{ once: true }}
            className={`absolute z-30 pointer-events-none ${hideOnMobile ? 'hidden sm:block' : ''}`}
        >
            <motion.div
                animate={{
                    scale: [1, 1.08, 1, 0.96, 1],
                    rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Sticker con órbita circular
const OrbitingSticker = ({ children, x, y, orbitRadius = 10, duration = 6, delay = 0, scale = 1, hideOnMobile = false }) => {
    return (
        <motion.div
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: scale }}
            transition={{ delay: delay, duration: 0.5 }}
            viewport={{ once: true }}
            className={`absolute z-30 pointer-events-none ${hideOnMobile ? 'hidden sm:block' : ''}`}
        >
            <motion.div
                animate={{
                    x: [0, orbitRadius, 0, -orbitRadius, 0],
                    y: [orbitRadius, 0, -orbitRadius, 0, orbitRadius],
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// SVG Doodles
const HeartDoodle = ({ size = 50 }) => (
    <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-red-500"
    >
        <motion.path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="currentColor"
            fillOpacity="0.4"
            animate={{ fillOpacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
        />
    </motion.svg>
);

const SparklesDoodle = ({ size = 30 }) => (
    <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-yellow-400"
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 180, 360]
        }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
    </motion.svg>
);

const StarDoodle = ({ size = 40 }) => (
    <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="text-rose-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="currentColor"
            strokeWidth="1"
        />
    </motion.svg>
);

// Image Sticker con efectos
const ImageSticker = ({ src, alt, size = "normal", glow = false }) => {
    const [imgError, setImgError] = useState(false);

    if (imgError) return null;

    const sizeClasses = {
        small: "w-12 sm:w-16 md:w-20",
        normal: "w-14 sm:w-18 md:w-24",
        large: "w-16 sm:w-22 md:w-28"
    };

    return (
        <motion.img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className={`${sizeClasses[size]} h-auto rounded-full border-2 border-white shadow-xl object-cover aspect-square ${
                glow ? 'shadow-[0_0_15px_rgba(244,63,94,0.3)]' : ''
            }`}
        />
    );
};

// Corazones flotantes pequeños que suben - menos en móvil
const FloatingHearts = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 640);
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const heartCount = isMobile ? 4 : 6;
    const hearts = Array.from({ length: heartCount }, (_, i) => ({
        id: i,
        x: `${15 + i * (isMobile ? 18 : 14)}%`,
        delay: i * 1.2,
        duration: 7 + Math.random() * 3,
        size: isMobile ? 12 + Math.random() * 8 : 15 + Math.random() * 12
    }));

    return (
        <>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    style={{ left: heart.x, bottom: '-5%' }}
                    className="absolute z-10 pointer-events-none"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.6, 0],
                        y: [0, -600],
                        x: [0, Math.sin(heart.id) * 30, 0]
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "easeOut"
                    }}
                >
                    <HeartDoodle size={heart.size} />
                </motion.div>
            ))}
        </>
    );
};

export default function StickerLayer() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-20">

            {/* Corazones flotantes de fondo */}
            <FloatingHearts />

            {/* ========== STICKERS PRINCIPALES ========== */}

            {/* Top - Visible en móvil */}
            <FloatingSticker x="2%" y="6%" initialRotate={-12} floatRange={15} floatDuration={5} delay={0.2} scale={1}>
                <ImageSticker src="/assets/stickers/coco.jpg" alt="Coco" size="normal" glow />
            </FloatingSticker>

            <BouncingSticker x="82%" y="4%" delay={0.4} scale={1}>
                <ImageSticker src="/assets/stickers/coca.jpg" alt="Coca" size="small" glow />
            </BouncingSticker>

            {/* Solo desktop */}
            <OrbitingSticker x="90%" y="15%" orbitRadius={8} duration={8} delay={0.6} hideOnMobile>
                <HeartDoodle size={22} />
            </OrbitingSticker>

            {/* Upper Middle */}
            <FloatingSticker x="1%" y="20%" initialRotate={15} floatRange={18} floatDuration={6} delay={0.3} scale={1}>
                <ImageSticker src="/assets/stickers/coco diaz.jpg" alt="Coco Diaz" size="large" glow />
            </FloatingSticker>

            <BouncingSticker x="85%" y="22%" delay={0.5} hideOnMobile>
                <ImageSticker src="/assets/stickers/coco.jpg" alt="Coco" size="small" />
            </BouncingSticker>

            <OrbitingSticker x="6%" y="30%" orbitRadius={8} duration={5} delay={0.4} hideOnMobile>
                <SparklesDoodle size={18} />
            </OrbitingSticker>

            {/* Middle */}
            <FloatingSticker x="84%" y="35%" initialRotate={-8} floatRange={15} floatDuration={4.5} delay={0.3}>
                <ImageSticker src="/assets/stickers/coca.jpg" alt="Coca" size="normal" glow />
            </FloatingSticker>

            <BouncingSticker x="2%" y="42%" delay={0.4} scale={1}>
                <ImageSticker src="/assets/stickers/coco.jpg" alt="Coco" size="small" />
            </BouncingSticker>

            <OrbitingSticker x="88%" y="45%" orbitRadius={6} duration={4} delay={0.5} hideOnMobile>
                <StarDoodle size={20} />
            </OrbitingSticker>

            <FloatingSticker x="3%" y="52%" initialRotate={10} floatRange={16} floatDuration={5.5} delay={0.4} scale={1}>
                <ImageSticker src="/assets/stickers/coco diaz.jpg" alt="Coco Diaz" size="normal" glow />
            </FloatingSticker>

            {/* Lower Middle */}
            <BouncingSticker x="85%" y="55%" delay={0.3}>
                <ImageSticker src="/assets/stickers/coco diaz.jpg" alt="Coco Diaz" size="small" />
            </BouncingSticker>

            <FloatingSticker x="1%" y="62%" initialRotate={-15} floatRange={18} floatDuration={5} delay={0.4}>
                <ImageSticker src="/assets/stickers/coca.jpg" alt="Coca" size="normal" glow />
            </FloatingSticker>

            <OrbitingSticker x="4%" y="68%" orbitRadius={10} duration={7} delay={0.5} hideOnMobile>
                <HeartDoodle size={20} />
            </OrbitingSticker>

            <BouncingSticker x="88%" y="66%" delay={0.4} hideOnMobile>
                <ImageSticker src="/assets/stickers/coco.jpg" alt="Coco" size="small" />
            </BouncingSticker>

            {/* Bottom */}
            <FloatingSticker x="2%" y="76%" initialRotate={12} floatRange={14} floatDuration={4} delay={0.3} scale={1}>
                <ImageSticker src="/assets/stickers/coco.jpg" alt="Coco" size="normal" glow />
            </FloatingSticker>

            <BouncingSticker x="86%" y="78%" delay={0.4}>
                <ImageSticker src="/assets/stickers/coca.jpg" alt="Coca" size="small" />
            </BouncingSticker>

            <FloatingSticker x="4%" y="86%" initialRotate={-8} floatRange={15} floatDuration={5} delay={0.5}>
                <ImageSticker src="/assets/stickers/coco diaz.jpg" alt="Coco Diaz" size="normal" glow />
            </FloatingSticker>

            <OrbitingSticker x="88%" y="88%" orbitRadius={8} duration={6} delay={0.4} hideOnMobile>
                <SparklesDoodle size={22} />
            </OrbitingSticker>

            {/* Extra sparkles - solo desktop */}
            <FloatingSticker x="12%" y="12%" initialRotate={0} floatRange={10} floatDuration={3} delay={0.8} scale={0.7} hideOnMobile>
                <SparklesDoodle size={16} />
            </FloatingSticker>

            <FloatingSticker x="80%" y="32%" initialRotate={0} floatRange={8} floatDuration={3.5} delay={1} scale={0.6} hideOnMobile>
                <HeartDoodle size={16} />
            </FloatingSticker>

            <FloatingSticker x="10%" y="48%" initialRotate={0} floatRange={12} floatDuration={4} delay={1.2} scale={0.5} hideOnMobile>
                <StarDoodle size={18} />
            </FloatingSticker>

        </div>
    );
}
