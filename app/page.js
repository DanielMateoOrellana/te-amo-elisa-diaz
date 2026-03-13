import Hero from '@/components/Hero';
import LoveLetter from '@/components/LoveLetter';
import Ending from '@/components/Ending';
import MusicPlayer from '@/components/MusicPlayer';
import StickerLayer from '@/components/StickerLayer';

export default function Home() {
    return (
        <main className="bg-[#fffaf0] text-rose-900 selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden">
            <MusicPlayer />
            <StickerLayer />
            <Hero />
            <LoveLetter />
            <Ending />
        </main>
    );
}
