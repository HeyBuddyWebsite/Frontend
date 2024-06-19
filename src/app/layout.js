import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Nav";
import Head from "next/head";
import Gatag from "./Gatag.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeyBuddy",

  description: "HeyBuddy Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Gatag />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
