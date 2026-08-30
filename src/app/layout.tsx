import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";

import { inter, oenosBold, oenosRegular, roboto_mono } from "./fonts";
import ThemeRegistry from "@/providers/ThemeRegistry";

import "@/css/app.scss";
import "devicon/devicon.min.css";
import Header from "@/components/Header";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  // metadataBase lets Next resolve the relative URLs below into absolute ones,
  // which is what crawlers and social cards require.
  metadataBase: new URL("https://bitrecruit.dawidolko.pl"),
  title: "BitRecruit — IT Career Platform",
  description:
    "Discover top tech opportunities. The smartest way to land your next developer role.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BitRecruit",
    title: "BitRecruit — IT Career Platform",
    description:
      "Browse developer roles by technology, seniority and salary. A frontend-only job board built with Next.js.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitRecruit — IT Career Platform",
    description:
      "Browse developer roles by technology, seniority and salary.",
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
        <ColorSchemeScript />
      </head>
      <body
        className={[
          inter.variable,
          oenosBold.variable,
          oenosRegular.variable,
          roboto_mono.variable,
        ].join(" ")}>
        {/* First focusable element: lets keyboard and screen reader users jump
            past the header navigation straight to the offer list. */}
        {/* Structured data: lets search engines describe the site in results
            rather than inferring it from a client-rendered page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BitRecruit",
              url: "https://bitrecruit.dawidolko.pl",
              description:
                "IT job board with developer roles filterable by technology, seniority and salary.",
              author: {
                "@type": "Person",
                name: "Dawid Olko",
                url: "https://dawidolko.pl",
              },
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeRegistry>
          <QueryProvider>
            <Header />
            {children}
            <footer className="site-footer">
              <p>
                BitRecruit — a demonstration IT job board. Built by{" "}
                <a href="https://dawidolko.pl" rel="noopener noreferrer" target="_blank">
                  Dawid Olko
                </a>
                .
              </p>
            </footer>
          </QueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
