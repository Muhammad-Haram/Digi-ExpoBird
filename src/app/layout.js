import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "DigiExpo",
  description: "DigiExpo",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={roboto.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
        {/* <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
         */}
        {/* <Script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></Script> */}
      </body>
    </html>
  );
}
