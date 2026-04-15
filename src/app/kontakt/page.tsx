import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Kontakt – Boka eller skicka förfrågan",
  description:
    "Kontakta JV Event Planning för att boka eller skicka en förfrågan om ert nästa event. Snabb återkoppling, personligt bemötande och en tydlig väg framåt.",
  alternates: {
    canonical: "https://jvep.se/kontakt",
  },
  openGraph: {
    url: "https://jvep.se/kontakt",
    title: "Kontakt – Boka eller skicka förfrågan | JV Event Planning",
    description:
      "Skicka en förfrågan om ert nästa event. Snabb återkoppling och personligt bemötande.",
  },
};

export default function ContactPage() {
  return (
    <div className="page-section">
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
