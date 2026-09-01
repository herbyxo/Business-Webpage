import { NextResponse } from 'next/server'

// Server-side proxy from the public enquiry forms to the marketing engine's
// lead intake. Exists so the webhook secret lives HERE, in server env, and
// never reaches a browser. The form posts to this route; this route forwards
// to the engine with the secret attached.
//
// Fails soft on purpose: the visitor's real submission is the web3forms email,
// which has already happened by the time this runs. A missing env var or an
// engine outage must never surface as an error to the person enquiring, so
// every failure path returns ok and logs for the operator instead.

const HERBERT_TENANT_ID = '6a4acf91-5d44-48b9-bc7a-cdeb1f95a16e'

export async function POST(request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ ok: true })

  const engine = process.env.MARKETING_ENGINE_URL
  const secret = process.env.LEAD_WEBHOOK_SECRET
  if (!engine || !secret) {
    console.error('[api/lead] engine forwarding not configured; enquiry only reached email')
    return NextResponse.json({ ok: true })
  }

  const str = v => (typeof v === 'string' ? v.trim().slice(0, 500) : '')

  // The engine's generic shape (lib/leadIntake normalizeGeneric). A gclid means
  // the visit came from a Google ad, and that attribution is the whole reason
  // this proxy exists: the revenue dashboard joins leads back to ad spend.
  const payload = {
    client_id: HERBERT_TENANT_ID,
    name: str(body.name) || str(body.business) || 'Website enquiry',
    email: str(body.email),
    phone: str(body.phone),
    service: 'Website design',
    city: 'Adelaide',
    channel: str(body.gclid) ? 'google' : 'website',
  }

  try {
    const res = await fetch(`${engine}/api/leads/in`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-webhook-secret': secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) console.error('[api/lead] engine returned', res.status)
  } catch (err) {
    console.error('[api/lead] engine unreachable:', err?.message)
  }

  return NextResponse.json({ ok: true })
}
