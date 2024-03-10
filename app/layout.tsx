import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";

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
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        </Head>
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
