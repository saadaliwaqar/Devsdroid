import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

// Editorial serif display face, clean, modern, used for the italic emphasis word.
export const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
    weight: "400",
    style: ["normal", "italic"],
});
