import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bells University of Technology | Admissions, Academics & Colleges",
  description:
    "Bells University of Technology — explore colleges, departments, programmes, campus life, and admissions information.",
  keywords:
    "Bells University of Technology, Bells University, university, Nigeria, admissions, academics, colleges, programmes",
  openGraph: {
    title: "Bells University of Technology",
    description:
      "Explore colleges, departments, programmes, campus life, and admissions information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
