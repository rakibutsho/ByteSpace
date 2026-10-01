import localFont from "next/font/local";
import {
  Gravitas_One,
  Lobster_Two,
  Open_Sans,
  Playfair_Display,
  Roboto,
  Rowdies,
} from "next/font/google";

export const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "200 700",
});

export const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster",
});

export const gravitas = Gravitas_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-gravitas"
})

export const rowdies = Rowdies({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-rowdies"
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});