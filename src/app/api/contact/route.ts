import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const allowedServices = new Set(["", "Innenraumaufbereitung", "Außenaufbereitung", "Lackkorrektur", "Keramikversiegelung", "Komplettpaket", "Andere Anfrage"]);
const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ message: "Ungültige Anfrage." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length") || 0) > 12_000) {
    return NextResponse.json({ message: "Die Nachricht ist zu groß." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("invalid");
  } catch {
    return NextResponse.json({ message: "Bitte prüfen Sie Ihre Eingaben." }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ message: "Ihre Anfrage wurde gesendet." });

  const name = clean(body.name);
  const email = clean(body.email);
  const service = clean(body.service);
  const vehicle = clean(body.vehicle);
  const message = clean(body.message);
  const consent = body.consent === "on" || body.consent === true;

  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !allowedServices.has(service) || vehicle.length > 100 || message.length < 10 || message.length > 3000 || !consent) {
    return NextResponse.json({ message: "Bitte füllen Sie alle Pflichtfelder korrekt aus." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ message: "Das Formular ist derzeit nicht erreichbar." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: email,
        subject: `Neue Detailwerk-Anfrage${service ? `: ${service}` : ""}`,
        html: `<h1>Neue Anfrage über detailwerk.com</h1><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(email)}</p><p><strong>Leistung:</strong> ${escapeHtml(service || "Nicht angegeben")}</p><p><strong>Fahrzeug:</strong> ${escapeHtml(vehicle || "Nicht angegeben")}</p><p><strong>Nachricht:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Mail provider responded ${response.status}`);
    return NextResponse.json({ message: "Ihre Anfrage wurde gesendet." });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return NextResponse.json({ message: "Die Anfrage konnte nicht gesendet werden." }, { status: 502 });
  }
}
