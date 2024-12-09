import type { Metadata } from "next";
import "./globals.css";
import AppAppBar from "./UI/AppAppBar"; // Adjust path as needed
import Footer from "./UI/Footer";
import './globals.css'; // Include your global CSS

export const metadata: Metadata = {
  title: "Sankan AI",
  description: "Home Page",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <AppAppBar />
        <main className="mt-24 container mx-auto px-4">
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  );
}