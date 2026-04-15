import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss – Jacob Laurin & JV Event Planning",
  description:
    "Lär känna Jacob Laurin och JV Event Planning. Vi skapar personliga event med rätt struktur, trygg koordinering och genomtänkt genomförande – från idé till kväll.",
  alternates: {
    canonical: "https://jvep.se/om-oss",
  },
  openGraph: {
    url: "https://jvep.se/om-oss",
    title: "Om oss – Jacob Laurin & JV Event Planning",
    description:
      "Lär känna Jacob Laurin och JV Event Planning. Personliga event med rätt struktur och trygg koordinering.",
  },
};

export default function AboutPage() {
  return (
    <div className="page-section">
      <section className="subhero">
        <div className="container subhero__content reveal">
          <p className="eyebrow">Om oss</p>
          <h1>Ett lugnt och tryggt sätt att komma vidare</h1>
          <p>
            JV Event Planning tror på det personliga mötet och på att ta oss
            tid att förstå. Hos oss börjar allt med ett samtal - utan stress,
            utan förpliktelser - där vi lyssnar in era behov och funderar
            tillsammans på bästa vägen framåt.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container section-grid">
          <div className="reveal">
            <p className="eyebrow">Vilka är vi?</p>
            <h2>JV Event Planning bygger event runt människor, inte mallar</h2>
          </div>
          <div className="profile-points">
            <article className="info-card reveal">
              <p>
                JV Event Planning grundades ur viljan att göra event mer
                mänskliga. Jag upplevde att många arrangemang präglas av stress
                och fasta mallar, där känslan och mötet mellan människor hamnar
                i andra hand. För mig är det just där kvaliteten ligger - i
                helheten, stämningen och minnet som lever kvar.
              </p>
            </article>
            <article className="info-card reveal">
              <p>
                För oss börjar ett lyckat event långt innan datumet är satt.
                Det börjar i förståelsen för människorna som ska mötas,
                stämningen som ska skapas och upplevelsen som ska leva kvar även
                efteråt. Vi lägger stor vikt vid helheten - från den första
                idén till hur det faktiskt känns att vara där när allt faller på
                plats.
              </p>
            </article>
            <article className="info-card reveal">
              <p>
                Varje uppdrag formas utifrån unika behov och önskemål. Vi
                arbetar nära kund, utan färdiga mallar, och skapar lösningar som
                är genomtänkta, personliga och anpassade efter både ambition och
                budget. Med tydlighet och struktur genom hela processen vill vi
                att samarbetet ska kännas tryggt, smidigt och inspirerande.
              </p>
            </article>
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
                Jag grundade JV Event Planning utifrån min erfarenhet av hur
                mycket tryggare och bättre ett event blir när rätt person håller
                ihop helheten. När struktur, människor och detaljer samverkar
                på rätt sätt skapas ett lugn - både för arrangör och deltagare.
              </p>
              <p>
                Under flera år har jag arbetat med koordinering och
                genomförande av event i olika sammanhang och följt projekten
                hela vägen från planering till avslutning. Den erfarenheten har
                gett mig en god förståelse för vad som krävs för att skapa ett
                fungerande och välbalanserat event, även när tempot är högt och
                förutsättningarna förändras längs vägen.
              </p>
              <p>
                Den återkoppling jag oftast får handlar om lugnet i
                genomförandet och känslan av att allt bara flyter på. För mig
                är det ett viktigt kvitto - när gästerna lämnar nöjda,
                uppskattande och med en positiv upplevelse i kroppen vet jag att
                helheten har hållit, och att arrangören kunnat känna sig trygg
                hela vägen.
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
