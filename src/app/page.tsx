import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center px-6 py-36 md:py-44">
        
        {/* glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#C8A04A]/10 blur-3xl rounded-full top-20"></div>

        <div className="relative max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-semibold text-[#F5DFA3] leading-tight mb-6">
            Event som känns - inte bara genomförs
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Vi planerar och genomför personliga event för företag och privatpersoner 
            som vill skapa upplevelser med kvalitet, närvaro och ett lugnt genomförande.
          </p>

          <p className="text-gray-500 text-sm mb-10">
            För företag, team och privatpersoner som vill göra något ordentligt
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/kontakt#kontaktformular"
              className="bg-[#C8A04A] text-black px-7 py-3 rounded-md font-semibold border border-[#F5DFA3]/70 shadow-[0_0_0_1px_rgba(245,223,163,0.35),0_14px_38px_rgba(200,160,74,0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(245,223,163,0.45),0_18px_46px_rgba(200,160,74,0.55)] transition-all"
            >
              Boka direkt
            </Link>
            <Link
              href="/om-oss"
              className="border border-[#C8A04A] px-6 py-3 rounded-md hover:bg-[#C8A04A] hover:text-black transition"
            >
              Se hur vi jobbar
            </Link>
          </div>
        </div>
      </section>

      {/* FÖR DIG */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl text-[#F5DFA3] text-center mb-8">
            För dig som vill skapa något som faktiskt känns
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-5 text-gray-200">
              Företagsevent
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-5 text-gray-200">
              Privatfiranden
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-5 text-gray-200">
              Kickoffs & upplevelser
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <section className="max-w-6xl mx-auto px-6 pb-6" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-[#F5DFA3]/40 to-transparent" />
        <div className="mx-auto mt-3 h-16 max-w-3xl rounded-full bg-[#C8A04A]/12 blur-3xl" />
      </section>

      {/* VAD VI GÖR */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl text-center text-[#F5DFA3] mb-16">
          Vad vi gör
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/happy-b.png"
                alt="Födelsedagsfirande"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg text-white mb-2">🎉 Födelsedagar & firanden</h3>
            <p className="text-gray-400">
              Personliga firanden med rätt känsla, rätt detaljer och en helhet
              som känns både varm och genomtänkt.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mingel.png"
                alt="Kick off"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg text-white mb-2">Kickoffs & företagsevent</h3>
            <p className="text-gray-400">
              Vi skapar energifyllda event som stärker teamkänslan, bygger
              relationer och ger en inspirerande start.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <h3 className="text-lg text-white mb-2">🎯 Planering & genomförande</h3>
            <p className="text-gray-400">
              Från idé och struktur till trygg koordinering på plats - vi håller
              ihop allt så att ni kan fokusera på upplevelsen.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:scale-[1.02] hover:border-[#D4AF37] transition-all duration-300">
            <h3 className="text-lg text-white mb-2">Koordinering & genomförande</h3>
            <p className="text-gray-400">
              Vi håller ihop allt så att ni kan vara närvarande i stunden.
            </p>
          </div>

        </div>
      </section>

      {/* VARFÖR OSS */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl text-[#F5DFA3] mb-10">
          Varför välja oss
        </h2>

        <div className="max-w-2xl mx-auto text-left space-y-4 text-gray-200 text-lg">
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4">
            ✓ Personlig kontakt hela vägen
          </p>
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4">
            ✓ Anpassat efter er - inget standardpaket
          </p>
          <p className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4">
            ✓ Lugnt, strukturerat och genomtänkt
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 border-t border-white/10">
        <h2 className="text-3xl text-[#F5DFA3] mb-6">
          Redo att skapa något som faktiskt känns?
        </h2>

        <Link
          href="/kontakt#kontaktformular"
          className="bg-[#C8A04A] text-black px-8 py-4 rounded-md font-medium hover:opacity-90"
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