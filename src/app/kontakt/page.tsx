import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta JV Event Planning för att boka eller skicka en förfrågan om ert nästa event.",
};

export default function ContactPage() {
  return (
    <div className="page-section">
      <section className="subhero">
        <div className="container subhero__content reveal">
          <p className="eyebrow">Kontakt</p>
          <h1>Berätta om ert event så tar vi nästa steg tillsammans</h1>
          <p>
            Oavsett om ni planerar ett företagsevent, en fest eller ett firande
            med familj och vänner är ni varmt välkomna att höra av er. Vi svarar
            snabbt och hjälper er vidare med ett upplägg som passar syfte,
            budget och ambitionsnivå.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-layout">
          <div className="contact-card reveal">
            <p className="eyebrow">Kontaktuppgifter</p>
            <h2>JV Event Planning</h2>
            <div className="contact-list contact-list--compact">
              <p className="contact-list__name">
                <strong>Jacob Laurin</strong>
              </p>
              <a href="mailto:jacobjvep@gmail.com">jacobjvep@gmail.com</a>
              <a href="tel:0707490323">070-749 03 23</a>
            </div>
            <p className="contact-card__note">
              Ett första samtal räcker långt. Ni får snabb återkoppling, ett
              personligt bemötande och en tydlig väg framåt.
            </p>
            <div className="contact-mini-points">
              <p>Smidig process</p>
              <p>Personlig service</p>
              <p>Trygg leverans</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
