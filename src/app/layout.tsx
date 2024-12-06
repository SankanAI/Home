import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AppAppBar from "./UI/AppAppBar"; // Adjust path as needed

export const dm_sans_init = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ["300", "400", "500", "700"]
});

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
      <body className={`${dm_sans_init.variable}`}>
      <AppAppBar />
        <main className="mt-24 container mx-auto px-4">
          {children}
        </main>
        <footer className="mt-10 py-6 text-center bg-gray-100">
          © {new Date().getFullYear()} Your Company Name
        </footer>
      </body>
    </html>
  );
}