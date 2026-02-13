import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Ending from '@/components/Ending';
import MusicPlayer from '@/components/MusicPlayer';
import StickerLayer from '@/components/StickerLayer';

export default function Home() {
    return (
        <main className="bg-black text-white selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden">
            <MusicPlayer />
            <StickerLayer /> {/* Added sticker layer */}
            <Hero />
            <Timeline />
            <Ending />
        </main>
    );
}
