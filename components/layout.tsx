import Head from "next/head"
import React, { ReactNode } from 'react';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function RootLayout({children, title = 'Portfolio'}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Johnathan's Portfolio and Blogs" />
        <link rel="icon" type="image/x-icon" href="/fav.ico" />
      </Head>

      <Navbar />

      <main className="">{children}</main>

      <Footer></Footer>
    </>
  )
}
