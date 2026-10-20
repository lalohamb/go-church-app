import Link from "next/link";
import Image from "next/image";
import { ministries } from "./ministryData";

export default function MinistryDetailSection() {
  return (
    <section
      aria-labelledby="ministry-details-heading"
      className="bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-[var(--go-green)] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            Full Details
          </p>
          <h2
            id="ministry-details-heading"
            className="text-[var(--go-black)] font-bold uppercase tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Ministry Information
          </h2>
          <p className="mt-3 text-[var(--go-text-muted)] text-sm max-w-xl mx-auto">
            Find schedules, locations, and participation details for each ministry below.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {ministries.map((ministry, i) => (
            <div
              key={ministry.id}
              id={ministry.id}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-2/5 aspect-video rounded-sm overflow-hidden shrink-0">
                <Image
                  src={ministry.image}
                  alt={ministry.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-[var(--go-green)] text-[11px] font-bold uppercase tracking-widest">
                  {ministry.tagline}
                </p>
                <h3 className="text-[var(--go-black)] font-bold text-2xl leading-tight">
                  {ministry.title}
                </h3>
                <p className="text-[var(--go-text-muted)] text-sm leading-relaxed">
                  {ministry.description}
                </p>

                {/* Meta */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-[var(--go-text-muted)]">
                      Schedule
                    </dt>
                    <dd className="text-sm text-[var(--go-black)]">{ministry.schedule}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-[var(--go-text-muted)]">
                      Location
                    </dt>
                    <dd className="text-sm text-[var(--go-black)]">{ministry.location}</dd>
                  </div>
                </dl>

                <Link
                  href={ministry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--go-green)] hover:bg-[var(--go-green-light)] text-white text-sm font-semibold rounded transition-colors duration-200 self-start"
                >
                  {ministry.linkLabel}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
