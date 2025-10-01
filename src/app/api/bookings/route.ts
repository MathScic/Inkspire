import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z, ZodError } from "zod";

// ⛔️ Supprimer ceci : const resend = new Resend(process.env.RESEND_API_KEY);

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

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // on ne jette pas à l'import module, seulement si l'API est appelée
    throw new Error("Missing RESEND_API_KEY");
  }
  return new Resend(key);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown;
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
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

    // HONEYPOT
    if (d.website && d.website.trim() !== "") {
      return NextResponse.json({ ok: false }, { status: 204 });
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

    const resend = getResend(); // ✅ instanciation paresseuse

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.BOOKING_TO_EMAIL!,
      replyTo: d.email, // (camelCase OK)
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
