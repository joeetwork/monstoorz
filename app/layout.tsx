import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Monstoorz",
    description: "Bitcoin's favourite monstoorz - Crafted with digital matter",
    openGraph: {
        title: "Monstoorz",
        url: "",
        images: [
            {
                url: "",
                width: 400,
                height: 400,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "",
        title: "Monstoorz",
        description:
            "Bitcoin's favourite monstoorz - Crafted with digital matter",
        images: [""],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={inter.className}
                data-sveltekit-preload-data="hover"
            >
                <div style={{ display: "contents" }}>
                    <Navigation />
                    {children}
                </div>
            </body>
        </html>
    );
}
