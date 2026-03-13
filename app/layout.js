import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});
const dancing = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing",
    display: "swap",
});

export const metadata = {
    title: "TE AMO ELISA DIAZ ❤️",
    description: "A story about gravity, time, and us.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable} ${dancing.variable} scroll-smooth`}>
            <body className="bg-[#fffaf0] text-rose-900 antialiased selection:bg-rose-500/30 selection:text-rose-200">
                {children}
            </body>
        </html>
    );
}
