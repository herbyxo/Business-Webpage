// "What arrives in 48 hours": the proof section for /web-design-adelaide.
//
// WHY IT EXISTS: the page asks for an email against a promise (a free homepage
// mockup in 48 hours) and then showed nothing of what that promise looks like.
// Every conversion framework puts concrete proof next to the ask; the page had
// none. Research on 2026-09-04 named this the biggest structural gap.
//
// WHY AN INVENTED BUSINESS: Will's standing rule is never to name a client or
// cite proof numbers in Herbert AI copy. A worked example owned outright breaks
// no rule, names nobody, and cannot be undone by a relationship ending. It is
// labelled as an example in the copy, never implied to be a customer.
//
// WHY IT IS DRAWN IN MARKUP, NOT SCREENSHOTTED: images would add weight to a
// page whose landing page experience Google already rates below average, and
// the point of the 2026-09-04 work was getting LCP down. This costs nothing to
// load and stays sharp at any size.
//
// The brief quoted below is the literal placeholder text from the form further
// down the page, so a visitor reads their own prompt and then sees what came
// back from it.

export default function MockupProof() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="flex items-center gap-3 mb-7 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="w-8 h-px bg-ink" />
          What arrives in 48 hours
        </div>

        <h2
          className="font-display text-ink max-w-[16ch]"
          style={{
            fontSize: 'var(--text-display-md)',
            lineHeight: 0.96,
            letterSpacing: '-0.035em',
            fontWeight: 800,
          }}
        >
          You see the site <em className="serif-em">first.</em>
        </h2>

        <p className="mt-8 text-[17px] text-muted leading-[1.55] max-w-[54ch]">
          Here is a worked example, start to finish. It is an invented business, so nothing
          here is a client of mine: the point is the deliverable, not the name on it. You
          send a few lines about what you do, and this is what lands in your inbox two days
          later.
        </p>

        <figure className="mt-12 max-w-[620px] border-l-2 border-ink pl-6">
          <figcaption className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">
            What they wrote
          </figcaption>
          <blockquote className="text-[19px] md:text-[21px] text-ink leading-[1.45]">
            &ldquo;Mobile dog grooming across the eastern suburbs. Want online booking and a
            site that doesn&rsquo;t look like 2012.&rdquo;
          </blockquote>
        </figure>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Frame label="Homepage" url="saltbushgrooming.com.au">
            <MockHome />
          </Frame>
          <Frame label="Services and prices" url="saltbushgrooming.com.au/services">
            <MockServices />
          </Frame>
          <Frame label="Booking" url="saltbushgrooming.com.au/book">
            <MockBooking />
          </Frame>
        </div>

        <p className="mt-10 text-[15px] text-muted max-w-[54ch]">
          Yours arrives as a real page you can click through on your phone, not a picture of
          one. Like it, and you get one fixed price to build it out. Don&rsquo;t, and you owe
          nothing.
        </p>
      </div>
    </section>
  )
}

/**
 * One browser frame. Deliberately flat: no perspective tilt, no device bezel,
 * no drop-shadow theatre. The frame is a container for the work, and the work
 * is the argument.
 */
function Frame({ label, url, children }) {
  return (
    <figure className="flex flex-col h-full">
      <div className="flex-1 rounded-2xl border border-line overflow-hidden bg-white">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-cream-alt border-b border-line">
          <span className="flex gap-1.5" aria-hidden>
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-line" />
          </span>
          <span className="ml-1 flex-1 min-w-0 truncate rounded-full bg-white border border-line px-3 py-1 font-mono text-[9px] text-muted">
            {url}
          </span>
        </div>
        {children}
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label}
      </figcaption>
    </figure>
  )
}

// The example brand. Deliberately NOT Herbert AI's palette: a visitor has to
// read these as somebody else's website, and a cream page with a neon green
// button would just look like this site again.
const BRAND = '#14342A'
const ACCENT = '#E0913A'
const SOFT = '#6B7C74'

function MockHome() {
  return (
    <div className="p-4 text-[7px] leading-[1.5] bg-white">
      <div className="flex items-center justify-between">
        <span className="font-semibold tracking-tight text-[9px]" style={{ color: BRAND }}>
          Saltbush
        </span>
        <span className="rounded-full px-2 py-1 text-white text-[6px]" style={{ background: BRAND }}>
          Book
        </span>
      </div>
      <div className="mt-6 font-semibold text-[15px] leading-[1.1] tracking-tight" style={{ color: BRAND }}>
        Grooming that
        <br />
        comes to you.
      </div>
      <p className="mt-2.5 text-[7px]" style={{ color: SOFT }}>
        Fully fitted van, warm water, seven days across the eastern suburbs.
      </p>
      <span
        className="mt-4 inline-block rounded-full px-3 py-1.5 text-[7px] font-semibold"
        style={{ background: ACCENT, color: '#1A1208' }}
      >
        Book a groom
      </span>
      <div className="mt-5 pt-3 border-t" style={{ borderColor: '#EAE6DE' }}>
        <span className="block font-semibold text-[6px] uppercase tracking-[0.12em]" style={{ color: SOFT }}>
          Service area
        </span>
        <span className="mt-1 block text-[7px]" style={{ color: BRAND }}>
          Norwood, Payneham, Burnside, Magill, Glynde
        </span>
      </div>
    </div>
  )
}

function MockServices() {
  const rows = [
    ['Full groom', 'Wash, clip, nails, ears', '$95'],
    ['Bath and tidy', 'Wash, brush out, trim', '$65'],
    ['Puppy first groom', 'Gentle, 30 minutes', '$45'],
  ]
  return (
    <div className="p-4 text-[7px] bg-white">
      <div className="font-semibold text-[11px] tracking-tight" style={{ color: BRAND }}>
        Services
      </div>
      <div className="mt-3 space-y-2.5">
        {rows.map(([name, detail, price]) => (
          <div
            key={name}
            className="flex items-start justify-between gap-3 pb-2.5 border-b"
            style={{ borderColor: '#EAE6DE' }}
          >
            <span>
              <span className="block font-semibold text-[8px]" style={{ color: BRAND }}>
                {name}
              </span>
              <span style={{ color: SOFT }}>{detail}</span>
            </span>
            <span className="font-semibold text-[9px] shrink-0" style={{ color: BRAND }}>
              {price}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3" style={{ color: SOFT }}>
        Prices for dogs up to 15kg. Larger breeds quoted on the day.
      </p>
    </div>
  )
}

function MockBooking() {
  return (
    <div className="p-4 text-[7px] bg-white">
      <div className="font-semibold text-[11px] tracking-tight" style={{ color: BRAND }}>
        Book a time
      </div>
      <div className="mt-3 space-y-2">
        {['Your name', 'Suburb', 'Dog and breed'].map(f => (
          <div
            key={f}
            className="rounded-md border px-2 py-1.5"
            style={{ borderColor: '#EAE6DE', color: '#9AA69F' }}
          >
            {f}
          </div>
        ))}
        <div className="flex gap-1.5 pt-1">
          {['Mon', 'Tue', 'Wed'].map((d, i) => (
            <span
              key={d}
              className="flex-1 rounded-md py-1.5 text-center font-semibold"
              style={
                i === 1
                  ? { background: BRAND, color: '#FFFFFF' }
                  : { background: '#F3F1EC', color: SOFT }
              }
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <span
        className="mt-3 block rounded-full py-1.5 text-center text-[7px] font-semibold"
        style={{ background: ACCENT, color: '#1A1208' }}
      >
        Request this time
      </span>
    </div>
  )
}
