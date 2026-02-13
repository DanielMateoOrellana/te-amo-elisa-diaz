'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const DateSection = ({ date, title, description, src, mediaType = 'image', index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, scale }}
            className={`min-h-[80vh] w-full flex items-center justify-center py-24 relative z-10 px-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:gap-24 max-w-7xl mx-auto`}
        >
            {/* Date Marker Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-rose-300 to-transparent -translate-x-1/2 hidden md:block" />

            {/* Date Dot */}
            <div className="absolute left-6 md:left-1/2 top-1/2 w-5 h-5 bg-red-500 rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(239,68,68,0.6)] hidden md:block border-2 border-white" />

            {/* Content Side */}
            <div className={`flex-1 text-center md:text-left space-y-6 ${!isEven && "md:text-right"}`}>
                <span className="text-red-500 tracking-[0.2em] text-sm font-bold uppercase block mb-2">{date}</span>
                <h3 className="text-4xl md:text-5xl font-display leading-tight text-rose-900">{title}</h3>
                <p className="text-rose-800 font-light text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 ml-auto">
                    {description}
                </p>
            </div>

            {/* Media Side */}
            <div className="flex-1 w-full relative group">
                <div className="relative aspect-[4/5] md:aspect-video overflow-hidden rounded-2xl border-2 border-rose-200 shadow-[0_8px_40px_rgba(244,63,94,0.15)] bg-pink-100 group-hover:border-rose-400 group-hover:shadow-[0_8px_60px_rgba(244,63,94,0.3)] transition-all duration-500">
                    {mediaType === 'video' ? (
                        <div className="w-full h-full relative flex items-center justify-center bg-pink-50 cursor-pointer">
                            {/* Video */}
                            <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <Play className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform relative z-10" />
                            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full backdrop-blur-md text-rose-700 font-bold border border-rose-200 shadow-lg">
                                Recuerdo en Video
                            </span>
                        </div>
                    ) : (
                        <img
                            src={src}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}
                </div>
            </div>

        </motion.div>
    );
};

const Timeline = () => {
    const events = [
        {
            date: "29 . 03 . 2025",
            title: "Quito: El Inicio",
            description: "El destino nos puso en el mismo concierto de Alvarito Díaz. Tú de Zaruma, yo de Guayaquil, coincidiendo en la capital. Entre la multitud y la música, nuestras órbitas colisionaron por primera vez.",
            src: "/assets/concert-placeholder.mp4",
            mediaType: "video"
        },
        {
            date: "05 . 07 . 2025",
            title: "Guayaquil: El 'Sí'",
            description: "Viniste por las Fiestas Julianas, pero la verdadera fiesta fue en mi corazón. Ese 5 de julio, bajo el cielo de mi ciudad, te pedí que fueras mi novia. Y mi vida cambió para siempre.",
            src: "/assets/proposal-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "Agosto 2025",
            title: "Conexión Digital",
            description: "La distancia física no pudo con nosotros. Esas videollamadas infinitas, dormir juntos por cámara y sentirte cerca aunque estés lejos. Zaruma y Guayaquil nunca estuvieron tan unidos.",
            src: "/assets/facetime-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "Octubre 2025",
            title: "Pequeños Detalles",
            description: "No hace falta un día especial para demostrar amor. Las canciones dedicadas, los memes que solo nosotros entendemos y esos mensajes sorpresa que alegran el día.",
            src: "/assets/details-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "Noviembre 2025",
            title: "Sangolquí",
            description: "Esta vez me tocó a mí. Viajé a Sangolquí solo para verte. No importan los kilómetros, las horas o el cansancio; cada segundo de viaje valió la pena por un abrazo tuyo.",
            src: "/assets/trip-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "Diciembre 2025",
            title: "Primera Navidad",
            description: "Cerrar el año sabiendo que te tengo en mi vida fue el mejor regalo. A pesar de los kilómetros, el brindis más importante fue por nosotros y por todo lo que viene.",
            src: "/assets/christmas-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "Enero 2026",
            title: "La Cuenta Regresiva",
            description: "La ansiedad de volver a vernos, planear el futuro y saber que falta menos. Cada día tachado en el calendario es una victoria de nuestro amor.",
            src: "/assets/random-placeholder.jpg",
            mediaType: "image"
        },
        {
            date: "14 . 02 . 2026",
            title: "San Valentín",
            description: "Hoy celebro tenerte. Celebro cada viaje, cada encuentro, cada pantalla compartida y cada canción. Eres mi destino favorito, Elisa. Te amo.",
            src: "/assets/couple-placeholder.jpg",
            mediaType: "image"
        }
    ];

    return (
        <section className="relative w-full bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 py-20 overflow-hidden">
            {/* Decorative Background Hearts */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-rose-400 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-20 w-60 h-60 bg-pink-400 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-red-400 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center font-display text-3xl md:text-5xl mb-24 text-rose-900"
                >
                    Nuestra Bitácora <span className="text-red-500">de Viaje</span>
                </motion.h2>

                {events.map((event, index) => (
                    <DateSection key={index} {...event} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
