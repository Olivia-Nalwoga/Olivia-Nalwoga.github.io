import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://olivia-nalwoga.github.io/";
const title = "Olivia Nalwoga | Data Analyst & Data Science Portfolio";
const description =
  "Olivia Nalwoga's data analyst and data science portfolio: Python, SQL, statistical modeling, relational database design, and evidence-based analytics.";
const socialImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Olivia Nalwoga — Data Analyst | Data Science. Python · SQL · Statistics.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Olivia Nalwoga", url: siteUrl }],
  keywords: [
    "Olivia Nalwoga",
    "Data Analyst",
    "Data Science",
    "Python",
    "SQL",
    "Statistical Modeling",
    "Relational Database Design",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Olivia Nalwoga",
    title,
    description,
    locale: "en_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

const profileData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}#profile`,
  url: siteUrl,
  name: title,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}#olivia-nalwoga`,
    name: "Olivia Nalwoga",
    url: siteUrl,
    sameAs: [
      "https://github.com/Olivia-Nalwoga",
      "https://www.linkedin.com/in/olivia-nalwoga-a3ab10382/",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
