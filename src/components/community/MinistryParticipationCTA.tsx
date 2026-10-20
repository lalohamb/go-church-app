import Link from "next/link";

export default function MinistryParticipationCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-[var(--go-black)] py-20 overflow-hidden"
    >
      {/* Subtle green accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--go-green)]" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[var(--go-green)] text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Take the Next Step
        </p>
        <h2
          id="cta-heading"
          className="text-white font-bold uppercase tracking-tight leading-tight"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Ready to Get Connected?
        </h2>
        <p className="mt-4 text-white/70 text-base leading-relaxed max-w-xl mx-auto">
          Every ministry at The GO Church Chicago is a doorway into deeper community, growth, and purpose. Take the next step today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/visit"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--go-green)] hover:bg-[var(--go-green-light)] text-white font-semibold text-sm rounded transition-colors duration-200"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-sm rounded transition-colors duration-200"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
