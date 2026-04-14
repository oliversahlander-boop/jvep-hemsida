import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_FIELDS = [
  "name",
  "email",
  "phone",
  "contactMethod",
  "eventType",
  "message",
] as const;

const DETAIL_REQUIRED_TYPES = new Set(["Tillstallning", "Ovrigt"]);

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  eventType: string;
  eventTypeDetail?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim();
}

function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpPort && smtpUser && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }),
      from: process.env.MAIL_FROM ?? smtpUser,
    };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (gmailUser && gmailAppPassword) {
    return {
      transporter: nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      }),
      from: process.env.MAIL_FROM ?? gmailUser,
    };
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<ContactPayload>;

    for (const field of REQUIRED_FIELDS) {
      if (!String(data[field] ?? "").trim()) {
        return NextResponse.json(
          { error: `Falt saknas: ${field}` },
          { status: 400 },
        );
      }
    }

    const normalizedEventType = normalizeValue(String(data.eventType ?? ""));
    const needsDetail = DETAIL_REQUIRED_TYPES.has(normalizedEventType);

    if (needsDetail && !String(data.eventTypeDetail ?? "").trim()) {
      return NextResponse.json(
        { error: "Ange vilken typ av evenemang ni onskar." },
        { status: 400 },
      );
    }

    const mailConfig = createTransporter();

    if (!mailConfig) {
      return NextResponse.json(
        { error: "E-post ar inte konfigurerad i servermiljon." },
        { status: 500 },
      );
    }

    const recipient = process.env.CONTACT_RECEIVER ?? "jacobjvep@gmail.com";
    const eventTypeDetail = String(data.eventTypeDetail ?? "").trim();
    const customerName = String(data.name ?? "").trim();
    const eventType = String(data.eventType ?? "").trim();
    const contactEmail = String(data.email ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const contactMethod = String(data.contactMethod ?? "").trim();
    const message = String(data.message ?? "").trim();

    const safeName = escapeHtml(customerName);
    const safeEventType = escapeHtml(eventType);
    const safeEmail = escapeHtml(contactEmail);
    const safePhone = escapeHtml(phone);
    const safeContactMethod = escapeHtml(contactMethod);
    const safeEventTypeDetail = escapeHtml(eventTypeDetail);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const summaryLines = [
      "Ny Förfrågan om event",
      "",
      `Namn: ${customerName}`,
      `E-postadress: ${contactEmail}`,
      `Telefonnummer: ${phone}`,
      `Kontaktmetod: ${contactMethod}`,
      `Typ av event: ${eventType}`,
      eventTypeDetail ? `Specificering: ${eventTypeDetail}` : null,
      "",
      "Kundens meddelande:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailSubject = `Ny Förfrågan om event - ${eventType} - ${customerName}`;

    const emailHtml = `
      <!doctype html>
      <html lang="sv">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charset="UTF-8" />
      </head>
      <body style="margin:0;padding:0;">
      <div style="margin:0;padding:24px;background:#090909;font-family:Montserrat,'Avenir Next',Arial,sans-serif;color:#ffffff;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;margin:0 auto;border:1px solid rgba(245,223,163,0.22);border-radius:18px;overflow:hidden;background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02));">
          <tr>
            <td style="padding:22px 26px;border-bottom:1px solid rgba(245,223,163,0.2);background:linear-gradient(90deg,#111111,#1c1c1c);">
              <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#f5dfa3;">JV Event Planning</p>
              <h1 style="margin:10px 0 0;font-size:24px;line-height:1.25;color:#ffffff;">Ny Förfrågan om event</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#d6d6d6;">En ny förfrågan har skickats från hemsidans kontaktformulär.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 26px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                <tr>
                  <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">Namn</td>
                  <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safeName}</td>
                </tr>
                <tr>
                  <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">E-postadress</td>
                  <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">Telefonnummer</td>
                  <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">Kontaktmetod</td>
                  <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safeContactMethod}</td>
                </tr>
                <tr>
                  <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">Typ av event</td>
                  <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safeEventType}</td>
                </tr>
                ${
                  eventTypeDetail
                    ? `<tr>
                        <td style="width:210px;padding:10px 12px;color:#f5dfa3;font-size:14px;background:#111111;border:1px solid rgba(245,223,163,0.2);border-radius:10px;">Specificering</td>
                        <td style="padding:10px 12px;color:#ffffff;font-size:14px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.1);border-radius:10px;">${safeEventTypeDetail}</td>
                      </tr>`
                    : ""
                }
              </table>
              <div style="margin-top:16px;padding:14px 16px;border-radius:12px;background:#0d0d0d;border:1px solid rgba(255,255,255,0.12);">
                <p style="margin:0 0 8px;color:#f5dfa3;font-size:14px;">Kundens meddelande</p>
                <p style="margin:0;color:#f3f3f3;font-size:14px;line-height:1.7;">${safeMessage}</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      </body>
      </html>
    `;

    await mailConfig.transporter.sendMail({
      from: mailConfig.from,
      to: recipient,
      replyTo: contactEmail,
      subject: mailSubject,
      text: summaryLines,
      html: emailHtml,
      textEncoding: "quoted-printable",
      headers: {
        "Content-Language": "sv-SE",
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Ett ovantat fel uppstod vid skickning." },
      { status: 500 },
    );
  }
}