import './globals.css';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Practice about routing in NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' rel='stylesheet' />
      </Head>
      <body className={inter.className}>
        <div className='m-auto flex min-h-[100vh] w-[1536px] flex-col justify-between px-[50px]'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
