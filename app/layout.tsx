import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import the new wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bembex Lab",
  description:
    "Elevate your online presence with our expert web design and development agency. We build fast, modern, responsive websites that drive results for startups, businesses, and brands.",
  // Helps Next make absolute URLs from relative ones below
  metadataBase: new URL("https://bembexlab.com"),

  // ✅ Proper icons (avoid spaces in filenames)
  icons: {
    icon: "/Group 32.webp",
    apple: "/Group 32.webp",
  },

  // ✅ Open Graph for Facebook/LinkedIn/Slack etc.
  openGraph: {
    type: "website",
    url: "https://bembexlab.com/",
    siteName: "Bembex Lab",
    title: "Bembex Lab — Web Design & Development",
    description: "Fast, modern, responsive websites that drive results.",
    images: [
      {
        url: "/Group 32.webp", // resolves to absolute via metadataBase
        width: 1200,
        height: 630,
        alt: "Bembex Lab — web design & development",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Bembex Lab — Web Design & Development",
    description: "Fast, modern, responsive websites that drive results.",
    images: ["/Group 32.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="lJzbBLud9KIYFjfkga4ruCjCuOEkNfEPTw1BRwoGXm0" />
      </head>
      {/* <head>
        <link
          rel="icon"
          href="Bambex lab logo Text white 1 (1).webp"
          sizes="any"
        />
      </head> */}
      <body
        className={`${inter.className} bg-black text-white overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
 