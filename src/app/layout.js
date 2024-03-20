import { Lexend_Peta, Montserrat, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";

const lexend_peta = Lexend_Peta({
  weight: "300",
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
  description: "A personal blog for tracking my frontend developer journey",
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
