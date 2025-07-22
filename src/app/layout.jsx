import { Footer } from "@/components/layouts/footer";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/header";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-var",
});

export const metadata = {
  title: "Cod [Intern]",
  description: "For Fresher Jobs, Internships and courses",
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Footer />

        <Toaster richColors position="top-center" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9K8LH2M25"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F9K8LH2M25');
          `}
        </Script>
      </body>
    </html>
  );
}
