import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Blog App",
    description: "Practice about routing in NextJS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="w-[1536px] m-auto px-[50px] min-h-[100vh] flex flex-col justify-between">
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
