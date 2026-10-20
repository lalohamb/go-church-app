import Image from "next/image";
import Link from "next/link";
import type { Ministry } from "./ministryData";

export default function MinistryCard({ ministry }: { ministry: Ministry }) {
  return (
    <article className="group flex flex-col bg-white border border-[var(--go-border)] rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={ministry.image}
          alt={ministry.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <p className="text-[var(--go-green)] text-[11px] font-bold uppercase tracking-widest">
          {ministry.tagline}
        </p>
        <h3 className="text-[var(--go-black)] font-bold text-[15px] leading-snug">
          {ministry.title}
        </h3>
        <p className="text-[var(--go-text-muted)] text-[13px] leading-relaxed flex-1">
          {ministry.description}
        </p>

        {/* Link row */}
        <div className="mt-3 flex items-center justify-between">
          <Link
            href={ministry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--go-black)] text-[12px] font-semibold hover:text-[var(--go-green)] transition-colors duration-200 underline-offset-2 hover:underline"
            aria-label={ministry.linkLabel}
          >
            Learn More
          </Link>

          {/* Circular arrow */}
          <div
            aria-hidden="true"
            className="w-8 h-8 rounded-full border border-[var(--go-border)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--go-green)] group-hover:border-[var(--go-green)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--go-text-muted)] group-hover:text-white transition-colors duration-300"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
