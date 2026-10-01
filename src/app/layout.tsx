import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import ReduxProvider from "@/redux/Provider";
import Loading from "@/components/Others/Loader/Loading";
import {
  clashDisplay,
  gravitas,
  lobster,
  openSans,
  playfair,
  roboto,
  rowdies,
  satoshi,
} from "@/fonts/Fonts";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { Footer } from "@/components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "ByteSpace - Learning & Course Creation Platform",
  description:
    "Unlock your potential as a creator with ByteSpace. Explore curated courses or create, publish, and manage your own courses.",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} ${openSans.variable} ${playfair.variable} ${lobster.variable} ${roboto.variable} ${gravitas.variable} ${rowdies.variable} font-sans antialiased`}
      >
        <Suspense fallback={<Loading />}>



          <ReduxProvider>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
            <Toaster richColors position="top-right" />
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
