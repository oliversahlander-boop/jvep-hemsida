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
    default: "JV Event Planning – Eventkoordinator för företag & privatpersoner",
    template: "%s | JV Event Planning",
  },
  description:
    "JV Event Planning skapar personliga, välorganiserade och minnesvärda event för företag och privatpersoner. Kickoffs, personalfester, födelsedagar och mer – i hela Sverige.",
  keywords: [
    "event planning",
    "eventkoordinator",
    "eventbyrå",
    "företagsevent",
    "kickoff",
    "personalfest",
    "födelsedag",
    "privatfirande",
    "eventplanering Sverige",
    "JV Event Planning",
    "Jacob Laurin",
  ],
  authors: [{ name: "Jacob Laurin", url: "https://jvep.se/om-oss" }],
  creator: "Jacob Laurin",
  publisher: "JV Event Planning",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://jvep.se",
    siteName: "JV Event Planning",
    title: "JV Event Planning – Eventkoordinator för företag & privatpersoner",
    description:
      "Personliga, välorganiserade och minnesvärda event för företag och privatpersoner. Kickoffs, personalfester, födelsedagar och mer.",
    images: [
      {
        url: "/Logga-JVeventplanning.jpg",
        width: 1200,
        height: 630,
        alt: "JV Event Planning – Eventkoordinator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JV Event Planning – Eventkoordinator för företag & privatpersoner",
    description:
      "Personliga, välorganiserade och minnesvärda event. Kickoffs, personalfester, födelsedagar och mer.",
    images: ["/Logga-JVeventplanning.jpg"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://jvep.se",
              name: "JV Event Planning",
              description:
                "JV Event Planning skapar personliga, välorganiserade och minnesvärda event för företag och privatpersoner.",
              url: "https://jvep.se",
              telephone: "+46707490323",
              email: "jacobjvep@gmail.com",
              image: "https://jvep.se/Logga-JVeventplanning.jpg",
              founder: {
                "@type": "Person",
                name: "Jacob Laurin",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "SE",
              },
              areaServed: {
                "@type": "Country",
                name: "Sverige",
              },
              knowsAbout: [
                "Eventplanering",
                "Eventkoordinering",
                "Kickoff",
                "Företagsevent",
                "Personalfester",
                "Privatfiranden",
              ],
              sameAs: [],
            }),
          }}
        />
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
