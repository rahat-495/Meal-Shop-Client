import type { Metadata } from "next";
import { Ubuntu, Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meal Moja - Homepage",
  description:
    "Meal Moja is your personalized meal planning and delivery solution. Choose meals based on your taste and schedule, and enjoy fresh, chef-prepared dishes delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${notoSans.variable} ${notoMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
