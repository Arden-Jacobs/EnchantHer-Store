import type { Metadata } from "next";
import { Alex_Brush, Urbanist } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/provider/modal-provider";
import ToastProvider from "@/provider/toast-provider";

const font = Urbanist({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "EnchantHer",
  description: "EnchantHer Adult Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={font.className}>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
  );
}
