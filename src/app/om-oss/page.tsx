import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Lär känna JV Event Planning och Jacob Laurin, med fokus på personliga event, struktur och trygg leverans.",
};

export default function AboutPage() {
  return (
    <div className="page-section">
      <section className="subhero">
        <div className="container subhero__content reveal">
          <p className="eyebrow">Om oss</p>
          <h1>En personlig eventpartner för människor som vill samla andra</h1>
          <p>
            JV Event Planning finns för kunder som vill skapa välplanerade och
            minnesvärda event utan att fastna i detaljerna själva. Vi tror på
            tydlig struktur, varm kommunikation och lösningar som känns lika
            genomtänkta som naturliga.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container section-grid">
          <div className="reveal">
            <p className="eyebrow">Vilka vi är</p>
            <h2>JV Event Planning bygger event runt människor, inte mallar</h2>
          </div>
          <div className="rich-text reveal">
            <p>
              För oss handlar event om mer än ett datum i kalendern. Det handlar
              om relationer, samvaro och upplevelser som känns rätt i stunden
              och minnesvärda efteråt. Därför börjar varje uppdrag med att förstå
              varför eventet ska genomföras, vilka människor det är till för och
              hur helheten ska kännas när det väl är dags.
            </p>
            <p>
              Vi arbetar inte med färdiga paketlösningar. Istället skapar vi
              koncept som anpassas efter målgrupp, budget och ambitionsnivå, med
              en tydlig struktur som ger trygghet genom hela processen.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section content-section--highlight">
        <div className="container">
          <div className="profile-story reveal">
            <div className="profile-story__imageWrap">
              <Image
                src="/jacob-jvep.png"
                alt="Jacob Laurin, kontaktperson på JV Event Planning"
                width={296}
                height={617}
                className="profile-story__image"
                priority
              />
            </div>
            <div className="profile-story__content">
              <p className="eyebrow">Grundare</p>
              <h2>Jacob Laurin</h2>
              <p>
                Jag startade JV Event Planning för att jag såg hur många event
                känns stressade, röriga eller opersonliga.
              </p>
              <p>
                För mig handlar ett event inte om ett schema, utan om känslan
                människor tar med sig därifrån.
              </p>
              <p>
                Därför jobbar jag nära mina kunder, från första idé till sista
                detalj. Det skapar ett personligt samarbete, snabb återkoppling
                och ett genomförande som känns lugnt, tydligt och genomtänkt.
              </p>
              <p>
                Jag har flera års erfarenhet av koordinering och har varit med
                från start till slut i många olika projekt, vilket gör att jag
                kan hålla ihop helheten även när mycket händer samtidigt.
              </p>
            </div>
          </div>
          <div className="profile-points profile-points--spaced">
            <article className="info-card reveal">
              <h3>Personlig närvaro</h3>
              <p>
                Ett nära samarbete gör det lättare att förstå detaljerna som
                lyfter helheten.
              </p>
            </article>
            <article className="info-card reveal">
              <h3>Trygg struktur</h3>
              <p>
                Planer, körscheman och samordning ger lugn både före och under
                eventdagen.
              </p>
            </article>
            <article className="info-card reveal">
              <h3>Rimliga lösningar</h3>
              <p>
                Flexibla upplägg och kostnadsmedvetna val gör att kvaliteten kan
                kännas hög utan att bli onödigt tung.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Så arbetar vi</p>
            <h2>Från första idé till ett välkoordinerat genomförande</h2>
          </div>
          <div className="process-grid process-grid--compact">
            <article className="process-step reveal">
              <span>01</span>
              <h3>Behov och mål</h3>
              <p>
                Vi börjar med att förstå syftet med eventet, vilka som ska delta
                och vad ni vill att upplevelsen ska leda till.
              </p>
            </article>
            <article className="process-step reveal">
              <span>02</span>
              <h3>Planering och budget</h3>
              <p>
                Vi formar idé, upplägg, budgetplanering och tidsramar så att
                projektet blir både inspirerande och realistiskt.
              </p>
            </article>
            <article className="process-step reveal">
              <span>03</span>
              <h3>Samordning av detaljer</h3>
              <p>
                Alla delar hålls ihop med fokus på struktur, tydlig kommunikation
                och ett körschema som fungerar i praktiken.
              </p>
            </article>
            <article className="process-step reveal">
              <span>04</span>
              <h3>Koordinering på dagen</h3>
              <p>
                När eventet väl genomförs finns vi där för att hålla ihop
                flödet, lösa detaljer och skapa lugn för er och era gäster.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container cta-panel reveal">
          <div>
            <p className="eyebrow">Ett event ska kännas enkelt att gå vidare med</p>
            <h2>Hör av er när ni vill planera med kvalitet och trygghet</h2>
            <p>
              Oavsett om ni representerar ett företag eller planerar ett privat
              firande hjälper vi er att skapa ett upplägg som känns genomtänkt
              från början.
            </p>
          </div>
          <div className="button-row button-row--stack">
            <Link href="/kontakt" className="button button--primary">
              Kontakta oss
            </Link>
            <a href="mailto:jacobjvep@gmail.com" className="button button--secondary">
              Mejla direkt
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
