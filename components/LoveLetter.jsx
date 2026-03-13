'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Array de fotos - modifica esto para agregar o quitar fotos
const photos = [
    { src: '/assets/photo-01.jpg', rotation: -3 },
    { src: '/assets/photo-02.jpg', rotation: 4 },
    { src: '/assets/photo-03.jpg', rotation: 2 },
    { src: '/assets/photo-04.jpg', rotation: -5 },
    { src: '/assets/photo-05.jpg', rotation: -2 },
    { src: '/assets/photo-06.jpg', rotation: 3 },
    { src: '/assets/photo-07.jpg', rotation: 5 },
    { src: '/assets/photo-08.jpg', rotation: -4 },
    { src: '/assets/photo-09.jpg', rotation: -1 },
    { src: '/assets/photo-10.jpg', rotation: 2 },
    { src: '/assets/photo-11.jpg', rotation: 4 },
    { src: '/assets/photo-12.jpg', rotation: -3 },
    { src: '/assets/photo-13.jpg', rotation: -5 },
    { src: '/assets/photo-14.jpg', rotation: 1 },
    { src: '/assets/photo-15.jpg', rotation: 3 },
    { src: '/assets/photo-16.jpg', rotation: -2 },
    { src: '/assets/photo-17.jpg', rotation: 2 },
    { src: '/assets/photo-18.jpg', rotation: -4 },
    { src: '/assets/photo-19.jpg', rotation: -3 },
    { src: '/assets/photo-20.jpg', rotation: 5 },
    { src: '/assets/photo-21.jpg', rotation: 1 },
    { src: '/assets/photo-22.jpg', rotation: -1 },
    { src: '/assets/photo-23.jpg', rotation: 4 },
    { src: '/assets/photo-24.jpg', rotation: -5 },
    { src: '/assets/photo-25.jpg', rotation: -2 },
    { src: '/assets/photo-26.jpg', rotation: 3 },
    { src: '/assets/photo-27.jpg', rotation: 2 },
    { src: '/assets/photo-28.jpg', rotation: -3 },
];

// Párrafos de la carta - modifica esto para cambiar el contenido
const letterParagraphs = [
    "Hola mi amorsito bello hermoso precioso...",
    "La verdad tengo una letra muy fea y prefiero expresarte mi amor así de esta manera que me parece la más creativa jeje.",
    "Ya Elisa es un año de nuestro primer contacto, no me olvido aún de esa madrugada cuando te escribí.",
    "Desde la primera vez que te vi en ig, bueno no fue la primera xq ya nos seguíamos antes, desde el primer momento que te vi me pareciste muy guapa e interesante.",
    "Solo que me daba miedo que te veías muy criatura la verdad JSAKJSKASKAS, te ponía máximo 18 y me daba miedo eso me acuerdo.",
    "Pero bueno te escribí una madrugada del 16 de marzo del 2025 creo a felicitarte x tu cumpleaños.",
    "No me acuerdo quien te había felicitado y habías resubido, supongo q la Cristel y alguien más, si se me hacía raro que solo te habían felicitado creo 2 personas, ahorita veamos jeje.",
    "La verdad si me emocionó cuando me jodiste con lo de la entrada, y estaba muy nervioso cuando ya quedamos de topar y eso en el concierto.",
    "Aún me acuerdo lo acholados que estábamos en el concierto y como te quería hacer conversa y no había como xq estábamos en un concierto pues jeje.",
    "De ahí todo fue cuesta arriba en la vida de ambos.",
    "Aún me acuerdo cuando me llevaste a tu casa y conocí a la Olga, me daba mucho miedo el no caerle bien y demás.",
    "Después me daba miedo q me quiera convertir vuelta a su religión y q si no lo hacía ya no me deje ir a su casa a verte.",
    "Aún me acuerdo también como fue cuando le dije a la Olga q te quería y que quería estar contigo.",
    "Cuando le dije a tu mamá lo mismo para q te mande a mi cena de cumpleaños.",
    "Han pasado tantas cosas q nos hacen la pareja q somos hoy en día.",
    "También han pasado muchas cosas malas pero con la ayuda de Dios lo hemos sabido sobrellevar juntos.",
    "Hoy en el día de tu cumpleaños que también se cumple justo un año de nuestro primer contacto aunque haya sido virtual...",
    "Amarte es de las cosas más bonitas que me ha pasado en la vida.",
    "Y en serio estoy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy muy seguro de mi infinito amor por ti.",
    "Desde que me dejaste entrar en tu mundo: Elishop, la Olga, tu abuelito Sergio, la Cristel, la Abigail, la Churos, tus amigos y amigas, Alvarito, Rainao, el Tigrillo...",
    "Todo ha sido un viaje el que repetiría una y otra vez.",
    "Si me preguntan si cambiaría algo de marzo a acá no cambiaría nada xq todo ha sido increíble contigo.",
    "Te amo muchísimo Elisa, no tienes idea cuánto.",
    "No cambiaría esto x nada del mundo, no me importa la distancia ni las peleas, esto merece la pena.",
    "Y esperemos con la ayuda de Dios pronto tanto esa distancia como los problemas tengan un fin y podamos tener todo lo q durante este año no hemos podido.",
    "Estar juntos aunque sea para no hacer nada y estar echados todo el día.",
    "Espero también poder conocer muchos lugares juntos.",
    "Si te pones a pensar hacia atrás hemos vivido muchos momentos muy bonitos.",
    "Todo el mundo te quiere y estoy orgulloso de eso.",
    "Créeme q nunca he dicho con vergüenza o recelo que tengo novia, q estamos a distancia y eso.",
    "No me importa lo q diga la gente, yo contigo quiero estar por y para siempre.",
    "Te amo infinitamente,",
    "Mi 19+1 ❤️"
];

function PolaroidPhoto({ photo, index, side }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    const isLeft = side === 'left';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20, rotate: 0 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: photo.rotation } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${isLeft ? 'self-start ml-2 sm:ml-0 sm:-ml-4 lg:-ml-12' : 'self-end mr-2 sm:mr-0 sm:-mr-4 lg:-mr-12'}`}
        >
            <div className="bg-white p-1.5 sm:p-2 pb-8 sm:pb-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-32 sm:w-40 md:w-48 lg:w-52">
                <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-44 overflow-hidden">
                    <Image
                        src={photo.src}
                        alt={`Recuerdo ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    />
                </div>
                <div className="absolute bottom-1.5 sm:bottom-2 left-0 right-0 text-center">
                    <span className="font-script text-rose-400 text-xs sm:text-sm">nosotros ❤️</span>
                </div>
            </div>
        </motion.div>
    );
}

function LetterParagraph({ text, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const isTitle = index === 0;
    const isSignature = index >= letterParagraphs.length - 2;

    return (
        <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className={`
                ${isTitle ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-script text-rose-600 mb-4 sm:mb-6' : ''}
                ${isSignature ? 'font-script text-xl sm:text-2xl text-rose-500 text-right mt-4 sm:mt-6' : ''}
                ${!isSignature && !isTitle ? 'text-base sm:text-lg md:text-xl leading-relaxed text-rose-900/80 mb-3 sm:mb-4 font-display' : ''}
            `}
        >
            {text}
        </motion.p>
    );
}

export default function LoveLetter() {
    // Crear el contenido intercalado: párrafos con fotos entre ellos
    const content = [];
    let photoIndex = 0;

    letterParagraphs.forEach((paragraph, pIndex) => {
        // Agregar el párrafo
        content.push({
            type: 'paragraph',
            text: paragraph,
            index: pIndex
        });

        // Después de cada párrafo (excepto título y firmas), agregar una foto si hay disponibles
        const isTitle = pIndex === 0;
        const isSignature = pIndex >= letterParagraphs.length - 2;

        if (!isTitle && !isSignature && photoIndex < photos.length) {
            content.push({
                type: 'photo',
                photo: photos[photoIndex],
                index: photoIndex,
                side: photoIndex % 2 === 0 ? 'left' : 'right'
            });
            photoIndex++;
        }
    });

    // Agregar fotos restantes al final si hay
    while (photoIndex < photos.length) {
        content.push({
            type: 'photo',
            photo: photos[photoIndex],
            index: photoIndex,
            side: photoIndex % 2 === 0 ? 'left' : 'right'
        });
        photoIndex++;
    }

    return (
        <section className="relative min-h-screen py-10 sm:py-16 md:py-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-rose-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-pink-200/20 rounded-full blur-3xl" />
                <div className="absolute top-2/3 left-10 sm:left-20 w-52 sm:w-80 h-52 sm:h-80 bg-orange-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-pink-100/25 rounded-full blur-3xl" />
            </div>

            {/* Main Content */}
            <div className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-8">
                {/* Letter Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                >
                    {/* Decorative stamp */}
                    <div className="absolute -top-2 right-2 sm:-top-4 sm:right-4 md:-top-6 md:-right-2 z-10">
                        <motion.div
                            initial={{ rotate: -20, scale: 0 }}
                            animate={{ rotate: 12, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="bg-rose-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg font-script text-sm sm:text-lg"
                        >
                            Para ti ❤️
                        </motion.div>
                    </div>

                    {/* Content with interleaved photos and paragraphs */}
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                        {content.map((item, idx) => {
                            if (item.type === 'paragraph') {
                                return (
                                    <div key={`p-${idx}`} className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-rose-100">
                                        <LetterParagraph text={item.text} index={item.index} />
                                    </div>
                                );
                            } else {
                                return (
                                    <PolaroidPhoto
                                        key={`photo-${idx}`}
                                        photo={item.photo}
                                        index={item.index}
                                        side={item.side}
                                    />
                                );
                            }
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
