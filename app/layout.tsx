import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
