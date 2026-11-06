import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";

import { figtreeBold, inter } from "./fonts";
import ThemeRegistry from "@/providers/ThemeRegistry";

import "@/css/mantine-theme.css";
import "@/css/app.scss";
import "@/css/devicon.scss";
import Header from "@/components/Header";
import SkipLink from "@/components/SkipLink";

export const metadata: Metadata = {
  metadataBase: new URL("https://bitrecruit.dawidolko.pl"),
  title: "BitRecruit — IT Career Platform",
  description:
    "Discover top tech opportunities. The smartest way to land your next developer role.",
  alternates: {
    canonical: "https://bitrecruit.dawidolko.pl/",
  },
  openGraph: {
    type: "website",
    url: "https://bitrecruit.dawidolko.pl/",
    siteName: "BitRecruit",
    title: "BitRecruit — IT Career Platform",
    description:
      "Browse developer roles by technology, seniority and salary. A frontend-only job board built with Next.js.",
    locale: "en_US",
    images: [
      {
        url: "https://bitrecruit.dawidolko.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "BitRecruit: an IT job board for developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitRecruit — IT Career Platform",
    description:
      "Browse developer roles by technology, seniority and salary.",
    images: ["https://bitrecruit.dawidolko.pl/og-image.png"],
  },
  referrer: "strict-origin-when-cross-origin",
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'"
        />
        <script src="/a11y/a11y-panel.js" data-accent="#1d4ed8" defer></script>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body
        className={[
          inter.variable,
          figtreeBold.variable,
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
              url: "https://bitrecruit.dawidolko.pl/",
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
        <SkipLink />
        <ThemeRegistry>
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
        </ThemeRegistry>
      </body>
    </html>
  );
}
