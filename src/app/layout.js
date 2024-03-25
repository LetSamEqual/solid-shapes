import { Lexend_Peta, Montserrat, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const lexend_peta = Lexend_Peta({
  weight: ["100", "200", "300"],
  subsets: ["latin"],
  variable: "--font-lexend_peta",
  display: "swap",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dm_sans = DM_Sans({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-dm_sans",
  display: "swap",
});

export const metadata = {
  title: "Solid Shapes",
  description: "Give people a reason to listen",
  openGraph: {
    title: "Solid Shapes",
    description: "Give people a reason to listen",
    url: "https://www.solid-shapes.com.au/",
    siteName: "Solid Shapes",
    images: [
      {
        url: "hhttps://solid-shapes-images.s3.ap-southeast-2.amazonaws.com/solid-shapes-og-twitter.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://solid-shapes-images.s3.ap-southeast-2.amazonaws.com/solid-shapes-og.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Solid Shapes open graphs image",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lexend_peta.variable} ${montserrat.variable} ${poppins.variable} ${dm_sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
