import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Synthex Studio",
  description: " Synthex Studio - AI-Powered Content Creation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      style={{
        background: 'url("/images/Mathematics.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#08090C",
        backgroundBlendMode: "multiply",
        backgroundAttachment: "fixed",
      }}
        className={`${plusJakartaSans.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
