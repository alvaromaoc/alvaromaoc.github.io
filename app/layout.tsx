import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Logo from "@/app/components/logo/Logo";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Contact from "@/app/components/footer/Footer";
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "Álvaro Mañoso Oca, Software Engineer",
    description: "Portfolio of Álvaro Mañoso Oca, Software Engineer located in Barcelona.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const line = () => {
        return <div className={"h-1 w-full bg-gradient-to-r from-accent-500 to-accentSidecar-500"}></div>;
    }

    return (
        <html lang="en">
        <body className="w-full my-bg-body min-h-screen flex flex-col">
        {line()}
        <header>
            <Logo/>
            <div className={"my-container"}>
                <Breadcrumb/>
            </div>
        </header>
        <main className={"flex-1"}>
            <div className={"text-body-300 leading-relaxed"}>
                {children}
            </div>
        </main>
        <footer>
            <Contact/>
        </footer>
        {line()}
        </body>
        <GoogleAnalytics gaId={"G-4QJERRX7SQ"}/>
        </html>
    );
}
