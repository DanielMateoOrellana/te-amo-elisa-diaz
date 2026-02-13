import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata = {
    title: "TE AMO ELISA DIAZ ❤️",
    description: "A story about gravity, time, and us.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
            <body className="bg-black text-white antialiased selection:bg-rose-500/30 selection:text-rose-200">
                {children}
            </body>
        </html>
    );
}
