import type { Metadata } from "next";
import { Onest, Anonymous_Pro } from "next/font/google";
import "./globals.scss";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
    variable: "--font-anonymous-pro",
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "lttle.cloud",
    description: "lttle.cloud",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${onest.variable} ${anonymousPro.variable}`}>
                {children}
            </body>
        </html>
    );
}
