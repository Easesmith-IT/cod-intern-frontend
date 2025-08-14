import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-var",
});

export const metadata = {
  title: "Cod Intern",
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
  robots: { index: true, follow: true },
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL),
  openGraph: {
    title: "Cod [Intern]",
    description: "For Fresher Jobs, Internships and courses",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
    siteName: "Cod Intern",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/logo.svg`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          storageKey="cod-intern-theme"
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>

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
