import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z, ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  project: z.enum(["Flash", "Grosse pièce", "Autre"]),
  date: z.string().optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  website: z.string().optional().nullable(), // honeypot
});

type BookingInput = z.infer<typeof Schema>;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown;

    // Validation stricte (sans any)
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      // Retour clair pour les erreurs de validation
      return NextResponse.json(
        {
          ok: false,
          error: "Validation error",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    const d: BookingInput = parsed.data;

    // HONEYPOT : si rempli => bot
    if (d.website && d.website.trim() !== "") {
      return NextResponse.json({ ok: false }, { status: 204 }); // no content
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
      replyTo: d.email, // ✅ remplace reply_to par replyTo
      subject: `Nouvelle demande de RDV — ${d.project}`,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: unknown) {
    let message = "Unexpected error";
    if (err instanceof ZodError) {
      message = err.issues.map((i) => i.message).join(", ");
    } else if (err instanceof Error) {
      message = err.message;
    }
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
