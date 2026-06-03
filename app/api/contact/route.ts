import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body?.nom || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, message: "Informations incomplètes." }, { status: 400 })
  }

  // Point d'intégration réel : connecter ici Resend, EmailJS, Supabase, CRM, etc.
  console.info("Nouvelle demande contact JI Construction", body)

  return NextResponse.json({ ok: true })
}
