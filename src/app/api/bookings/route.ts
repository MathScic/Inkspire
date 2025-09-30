import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  project: z.enum(["Flash", "Grosse pièce", "Autre"]),
  date: z.string().optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  website: z.string().optional().nullable(), // 👈 honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const d = Schema.parse(body);

    // 👇 HONEYPOT : si rempli => bot
    if (d.website && d.website.trim() !== "") {
      return NextResponse.json({ ok: false }, { status: 204 }); // no content, on “avale” le bot
    }

    const text = [
      `Nom: ${d.name}`,
      `Email: ${d.email}`,
      `Téléphone: ${d.phone || "-"}`,
      `Projet: ${d.project}`,
      `Date souhaitée: ${d.date || "-"}`,
      "",
      "Message:",
      d.message || "-",
    ].join("\n");

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.BOOKING_TO_EMAIL!,
      reply_to: d.email,
      subject: `Nouvelle demande de RDV — ${d.project}`,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Invalid" },
      { status: 400 }
    );
  }
}
