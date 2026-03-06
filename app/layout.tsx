import type { Metadata } from "next";
import "./globals.css";

// We remove the Google Font imports from here because 
// we are loading them via @import in globals.css 
// to ensure the luxury serif font loads correctly.

export const metadata: Metadata = {
  title: "BizSite Studio — Custom Websites That Elevate Your Brand",
  description:
    "A premium web studio crafting elegant, high-converting websites for modern service brands. From online bookings to stunning portfolios, we turn your digital presence into a powerful business asset.",
  icons: {
    icon: "/logoi.png", // Ensure you have a favicon for a pro look
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-brand-cream text-brand-chocolate selection:bg-brand-gold selection:text-white">
        {/* The fonts are now handled by the CSS selectors 
           we defined in globals.css (h1, h2, body, etc.)
        */}
        {children}
      </body>
    </html>
  );
}