"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import React, { ReactNode } from 'react';
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
        <meta name="description" content="A portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="">{children}</main>

      <Footer></Footer>
    </>
  )
}
