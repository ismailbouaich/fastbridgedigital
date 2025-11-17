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

export const metadata = {
  title: "Bridge Digital - Premium Web & Mobile Development",
  description: "We craft exceptional digital experiences through innovative web and mobile applications. Specializing in React, Next.js, and React Native development.",
  keywords: "web development, mobile apps, React, Next.js, React Native, UI/UX design, software development",
  authors: [{ name: "Bridge Digital" }],
  openGraph: {
    title: "Bridge Digital - Premium Web & Mobile Development",
    description: "We craft exceptional digital experiences through innovative web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
