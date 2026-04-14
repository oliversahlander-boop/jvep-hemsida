import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ScrollMotion from "./scroll-motion";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jvep.se"),
  title: {
    default: "JV Event Planning",
    template: "%s | JV Event Planning",
  },
  description:
    "JV Event Planning skapar personliga, välorganiserade och minnesvärda event för företag och privatpersoner.",
  alternates: {
    canonical: "https://jvep.se",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="site-shell min-h-full">
        <ScrollMotion />
        <div className="background-orb background-orb-left" />
        <div className="background-orb background-orb-right" />
        <div className="page-frame">
          <header className="site-header">
            <div className="container site-header__inner">
              <Link
                href="/"
                aria-label="JV Event Planning"
                className="inline-flex items-center gap-3"
              >
                <Image
                  src="/logo-jv1.png"
                  alt="JV Event Planning logotyp"
                  width={52}
                  height={52}
                  className="rounded-full"
                  priority
                />
                <span className="text-[#F5DFA3] font-semibold tracking-[0.2em] text-sm uppercase">
                  JV EVENT PLANNING
                </span>
              </Link>

              <nav className="site-nav" aria-label="Huvudnavigering">
                <Link href="/">Startsida</Link>
                <Link href="/om-oss">Om oss</Link>
                <Link href="/kontakt">Kontakt</Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="site-footer">
            <div className="container site-footer__inner">
              <div>
                <p className="site-footer__title">JV Event Planning</p>
                <p>
                  Personliga event med rätt idé, rätt struktur och rätt känsla
                  - från idé till genomförande.
                </p>
              </div>
              <div className="site-footer__contact">
                <Link href="/om-oss">Om oss</Link>
                <Link href="/kontakt">Kontakt</Link>
              </div>
            </div>
            <div className="container pt-6 text-center">
              <p className="text-xs tracking-[0.16em] uppercase text-white/35">
                Powered by One Media
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
