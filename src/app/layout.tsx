import type { Metadata } from "next";
import { Onest, Anonymous_Pro } from "next/font/google";
import "../styles/globals.scss";
import "../styles/hljs.css";
import "@mantine/core/styles.css";
import {
    ColorSchemeScript,
    mantineHtmlProps,
    MantineProvider,
    createTheme,
} from "@mantine/core";
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

const theme = createTheme({
    fontFamily: "var(--font-onest)",
    components: {
        Menu: {
            styles: {
                dropdown: {
                    borderRadius: "1rem",
                    padding: "0",
                    overflow: "hidden",
                },
                item: {
                    padding: "0.5rem 1rem",
                    fontWeight: 500,
                },
            },
        },
    },
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${onest.variable} ${anonymousPro.variable}`}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
