import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ejikeme Amako - Ph.D. Researcher in Electrical Engineering",
    template: "%s | Ejikeme Amako",
  },
  description:
    "Ph.D. Researcher in Electrical Engineering at Tennessee Tech. Specializing in smart grid systems, energy management, deep reinforcement learning, and controller hardware-in-the-loop simulation. IEEE Senior Member.",
  keywords: [
    "Ejikeme Amako",
    "Power Systems",
    "Smart Grid",
    "Electrical Engineering",
    "Tennessee Tech",
    "DER Integration",
    "Energy Management",
    "IEEE Member",
    "Grid Modernization",
    "Renewable Energy",
  ],
  authors: [{ name: "Ejikeme Amako" }],
  creator: "Ejikeme Amako",
  publisher: "Ejikeme Amako",
  metadataBase: new URL("https://ejikemeamako.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ejikemeamako.com",
    siteName: "Ejikeme Amako - Ph.D. Researcher",
    title: "Ejikeme Amako - Ph.D. Researcher in Electrical Engineering",
    description:
      "Ph.D. Researcher in Electrical Engineering at Tennessee Tech. Specializing in smart grid systems, energy management, and grid modernization. IEEE Senior Member.",
    images: [
      {
        url: "/images/profile1.jpg",
        width: 1200,
        height: 630,
        alt: "Ejikeme Amako - Ph.D. Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ejikeme Amako - Ph.D. Researcher in Electrical Engineering",
    description:
      "Ph.D. Researcher in Electrical Engineering at Tennessee Tech. Specializing in smart grid systems and energy management. IEEE Senior Member.",
    images: ["/images/profile1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ubuntu.variable} ${ubuntuMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0f2949" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <Script
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <a href="#main" className="skip-to-main">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
