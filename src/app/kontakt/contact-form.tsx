"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const DETAIL_REQUIRED_TYPES = new Set(["Tillställning", "Övrigt"]);

export default function ContactForm() {
  const [eventType, setEventType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  const needsDetail = DETAIL_REQUIRED_TYPES.has(eventType);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitMessage(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      contactMethod: String(formData.get("contactMethod") ?? "").trim(),
      eventType: String(formData.get("eventType") ?? "").trim(),
      eventTypeDetail: String(formData.get("eventTypeDetail") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Kunde inte skicka förfrågan just nu.");
      }

      form.reset();
      setEventType("");
      setSubmitMessage({
        kind: "success",
        text: "Tack! Din förfrågan är skickad. Vi återkommer så snart vi kan.",
      });
    } catch (error) {
      const fallbackMessage = "Något gick fel vid skickning. Försök igen strax.";
      setSubmitMessage({
        kind: "error",
        text: error instanceof Error ? error.message : fallbackMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id="kontaktformular"
      className="contact-form reveal"
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <label className="field">
          <span>Namn</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="Ditt namn"
          />
        </label>
        <label className="field">
          <span>E-postadress</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="dinmail@foretag.se"
          />
        </label>
        <label className="field">
          <span>Telefonnummer</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            placeholder="0707490323"
          />
        </label>
        <label className="field field--selectable">
          <span>Kontaktmetod</span>
          <select name="contactMethod" required defaultValue="">
            <option value="" disabled>
              Välj kontaktmetod
            </option>
            <option value="Via telefon">Via telefon</option>
            <option value="SMS">SMS</option>
            <option value="E-post">E-post</option>
            <option value="Digitalt möte">Digitalt möte</option>
            <option value="Fysiskt möte">
              Fysiskt möte (rekommenderas)
            </option>
          </select>
        </label>
        <label className="field field--selectable">
          <span>Typ av event</span>
          <select
            name="eventType"
            required
            value={eventType}
            onChange={(event) => setEventType(event.target.value)}
          >
            <option value="" disabled>
              Välj typ av event
            </option>
            <option value="Födelsedagsfiranden">Födelsedagsfiranden</option>
            <option value="Kick off">Kick off</option>
            <option value="Afterwork">Afterwork</option>
            <option value="Företagsaktivitet">Företagsaktivitet</option>
            <option value="Personalfest">Personalfest</option>
            <option value="Kalas">Kalas</option>
            <option value="Tillställning">Tillställning</option>
            <option value="Övrigt">Övrigt</option>
          </select>
        </label>
        {needsDetail ? (
          <label className="field field--full">
            <span>
              {eventType === "Tillställning"
                ? "Vilken typ av tillställning?"
                : "Vilken typ av evenemang ni önskar"}
            </span>
            <input
              type="text"
              name="eventTypeDetail"
              required
              placeholder={
                eventType === "Tillställning"
                  ? "Till exempel middag, mottagning eller jubileum"
                  : "Skriv gärna vilken typ av event det gäller"
              }
            />
          </label>
        ) : null}
        <label className="field field--full">
          <span>Meddelande</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Beskriv tydligt önskat datum, hur många gäster ni blir (ca om ni inte vet exakt) samt önskad plats eller typ av plats."
          />
        </label>
      </div>
      <button type="submit" className="button button--primary" disabled={isSubmitting}>
        {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
      </button>
      {submitMessage ? (
        <p
          className={
            submitMessage.kind === "success"
              ? "form-alert form-alert--success"
              : "form-alert form-alert--error"
          }
          role="status"
        >
          {submitMessage.text}
        </p>
      ) : null}
      <p className="form-note">
        Vi ser fram emot att höra mer om era idéer och återkommer så snart vi
        kan med ett personligt svar. Er förfrågan behandlas alltid med omtanke,
        tydlighet och full respekt för era önskemål.
      </p>
    </form>
  );
}