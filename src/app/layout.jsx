import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
        <ReactQueryProvider>{children}</ReactQueryProvider>

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
