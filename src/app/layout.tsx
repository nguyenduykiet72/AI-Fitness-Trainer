import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Care Assistant",
  description: "Get instant answers to your dental questions with DentWise, your AI-powered dental care assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#e78a53",
          colorBackground: "#f3f4f6",
          colorForeground: "#111827",
          colorMutedForeground: "#6b7280",
          colorInput: "#f3f4f6",
        },
      }}
    >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
