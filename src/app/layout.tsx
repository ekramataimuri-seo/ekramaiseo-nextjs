import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- 1. IMPORT NAVBAR

export const metadata: Metadata = {
  title: "Ekrama SEO",
  description: "Digital Marketing That Drives Revenue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* --- GOOGLE FONTS --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* --- FONT AWESOME ICONS --- */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      
      <body>
        {/* --- 2. DISPLAY NAVBAR HERE --- */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
