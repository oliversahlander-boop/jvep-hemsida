import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "JV Event Planning – Eventkoordinator för företag & privatpersoner",
  },
  description:
    "Planering som lyfter ditt event från idé till upplevelse. JV Event Planning håller ihop helheten – kickoffs, firmafiranden, personalfester och privatfiranden.",
  alternates: {
    canonical: "https://jvep.se",
  },
  openGraph: {
    url: "https://jvep.se",
    title: "JV Event Planning – Eventkoordinator för företag & privatpersoner",
    description:
      "Planering som lyfter ditt event från idé till upplevelse. Personlig kontakt, trygg struktur och genomtänkta lösningar.",
  },
};

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center px-5 py-20 md:py-44">
        
        {/* glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#C8A04A]/10 blur-3xl rounded-full top-20 hidden sm:block"></div>

        <div className="relative max-w-4xl w-full">
          <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl font-semibold text-[#F5DFA3] leading-[1.15] mb-5">
            Planering som lyfter ditt event från idé till upplevelse.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
            Rätt planering är grunden för ett event som engagerar, flyter
            smidigt och ger resultat - utan stress och överraskningar.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Vi på JV Event Planning tar hand om hela processen och skapar
            minnesvärda event för både företag och privatpersoner.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/kontakt#kontaktformular"
              className="bg-[#C8A04A] text-black px-7 py-3.5 rounded-md font-semibold border border-[#F5DFA3]/70 shadow-[0_0_0_1px_rgba(245,223,163,0.35),0_14px_38px_rgba(200,160,74,0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(245,223,163,0.45),0_18px_46px_rgba(200,160,74,0.55)] transition-all text-center"
            >
              Boka direkt
            </Link>
            <Link
              href="/om-oss"
              className="border border-[#C8A04A] px-6 py-3.5 rounded-md hover:bg-[#C8A04A] hover:text-black transition text-center"
            >
              Se hur vi jobbar
            </Link>
          </div>
        </div>
      </section>

      {/* FÖR DIG */}
      <section className="max-w-5xl mx-auto px-5 py-12 md:py-16">
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-6 md:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#F5DFA3] text-center mb-6">
            För dig som vill skapa något som faktiskt känns
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-gray-200">
              Företagsevent
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-gray-200">
              Privatfiranden
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-gray-200">
              Kickoffs & upplevelser
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="max-w-6xl mx-auto px-5 pb-4" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-[#F5DFA3]/40 to-transparent" />
        <div className="mx-auto mt-3 h-16 max-w-3xl rounded-full bg-[#C8A04A]/12 blur-3xl" />
      </section>

      {/* VAD VI GÖR */}
      <section className="max-w-5xl mx-auto px-5 py-14 md:py-24">
        <h2 className="text-2xl sm:text-3xl text-center text-[#F5DFA3] mb-10 md:mb-16">
          Vad vi gör
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">

          <div className="p-5 sm:p-6 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative w-full h-40 sm:h-44 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/happy-b.png"
                alt="Födelsedagsfirande"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg text-white mb-2">🎉 Födelsedagar & firanden</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Personliga firanden med rätt känsla, rätt detaljer och en helhet
              som känns både varm och genomtänkt.
            </p>
          </div>

          <div className="p-5 sm:p-6 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative w-full h-40 sm:h-44 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mingel.png"
                alt="Kick off"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg text-white mb-2">Kickoffs & företagsevent</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Vi skapar energifyllda event som stärker teamkänslan, bygger
              relationer och ger en inspirerande start.
            </p>
          </div>

          <div className="p-5 sm:p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <h3 className="text-base sm:text-lg text-white mb-2">🎯 Planering & genomförande</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Från idé och struktur till trygg koordinering på plats - vi håller
              ihop allt så att ni kan fokusera på upplevelsen.
            </p>
          </div>

          <div className="p-5 sm:p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <h3 className="text-base sm:text-lg text-white mb-2">Koordinering & genomförande</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Vi håller ihop allt så att ni kan vara närvarande i stunden.
            </p>
          </div>

        </div>
      </section>

      {/* TIDIGARE EVENT */}
      <section className="max-w-6xl mx-auto px-5 py-14 md:py-24">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#F5DFA3] tracking-[0.16em] uppercase text-xs font-semibold mb-3">
            Tidigare event
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#F5DFA3]">
            Utvalda event
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Tre event där struktur, känsla och helhetsansvar fick ta lika stor
            plats.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative h-44 sm:h-48">
              <Image
                src="/event-jam-open.svg"
                alt="JAM OPEN"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl text-white mb-3">JAM OPEN</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ett återkommande 2-dagars golfevent där tävling, social samvaro
                och kvällsaktiviteter binds ihop till en tydlig helhet.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>20 deltagare per tillfälle</li>
                <li>Kommunikation före och under eventet</li>
                <li>Middag och kvällsupplägg som social förlängning</li>
              </ul>
              <p className="mt-4 text-[#F5DFA3] text-sm leading-relaxed">
                Återkommande genomförande med hög uppskattning från deltagarna.
              </p>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative h-44 sm:h-48">
              <Image
                src="/event-fivehole.svg"
                alt="FiveHole Festival"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl text-white mb-3">FiveHole Festival</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ett återkommande hockeyevent för tidigare spelare, byggt som en
                social och välkoordinerad helhetsupplevelse.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Noggrant planerade matchtider</li>
                <li>All nödvändig utrustning på plats</li>
                <li>Gemensam middag som naturlig fortsättning</li>
              </ul>
              <p className="mt-4 text-[#F5DFA3] text-sm leading-relaxed">
                Struktur på isen och avslappnad stämning utanför den.
              </p>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative h-44 sm:h-48">
              <Image
                src="/event-linn.svg"
                alt="Linn Karlssons 25-års- och examensfest"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl text-white mb-3">
                Linn Karlssons 25-års- och examensfest
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ett exklusivt privat event med helhetsansvar från första plan
                till genomförd kväll.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Transportlogistik till och från ö</li>
                <li>Dekor, utrustning och middagsupplevelse</li>
                <li>DJ och anpassat musikupplägg för kvällen</li>
              </ul>
              <p className="mt-4 text-[#F5DFA3] text-sm leading-relaxed">
                Ett sömlöst event där detaljer och gästupplevelse höll samma
                höga nivå.
              </p>
            </div>
          </article>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-5">
            Vill du skapa något liknande?
          </p>
          <Link
            href="/kontakt#kontaktformular"
            className="inline-flex items-center justify-center bg-[#C8A04A] text-black px-8 py-3.5 rounded-md font-semibold border border-[#F5DFA3]/70 shadow-[0_0_0_1px_rgba(245,223,163,0.35),0_14px_38px_rgba(200,160,74,0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(245,223,163,0.45),0_18px_46px_rgba(200,160,74,0.55)] transition-all"
          >
            Kontakta oss
          </Link>
        </div>
      </section>

      {/* VARFÖR OSS */}
      <section className="max-w-4xl mx-auto px-5 py-14 md:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl text-[#F5DFA3] mb-8 md:mb-10">
          Varför välja oss
        </h2>

        <div className="max-w-2xl mx-auto text-left space-y-3 text-gray-200 text-base sm:text-lg">
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-4">
            ✓ Personlig kontakt hela vägen
          </p>
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-4">
            ✓ Anpassat efter er - inget standardpaket
          </p>
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-4">
            ✓ Lugnt, strukturerat och genomtänkt
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 text-center py-16 md:py-24 border-t border-white/10">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#F5DFA3] mb-6 max-w-xs sm:max-w-none mx-auto">
          Redo att skapa något som faktiskt känns?
        </h2>

        <Link
          href="/kontakt#kontaktformular"
          className="inline-block bg-[#C8A04A] text-black px-8 py-4 rounded-md font-medium hover:opacity-90"
        >
          Kontakta oss
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} JV Event Planning
      </footer>

    </main>
  );
}