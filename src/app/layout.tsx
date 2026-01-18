import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";

import TanStackProvider from "@/providers/TanstackProvider";
import { WebsiteInfoProvider } from "@/providers/websites.providers";

import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { getWebsite } from "@/actions/get/get.action";
import { AOSInit } from "@/shared/shared/aos.config";
import PopupAd from "@/components/Home/PopupAd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gamma Education",
  description: "Gamma Education",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteData = await getWebsite();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSInit />
        <PopupAd advertisements={websiteData?.data?.advertisments} />
        <WebsiteInfoProvider initialData={websiteData}>
          <TanStackProvider>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </TanStackProvider>
        </WebsiteInfoProvider>
      </body>
    </html>
  );
}
