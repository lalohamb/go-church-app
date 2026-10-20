"use client";

import { useEffect, useRef, useState } from "react";
import MinistryCard from "./MinistryCard";
import { ministries } from "./ministryData";

export default function MinistryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ministries"
      aria-labelledby="ministries-heading"
      className="bg-[var(--go-surface)] py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="text-[var(--go-green)] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            Get Involved
          </p>
          <h2
            id="ministries-heading"
            className="text-[var(--go-black)] font-bold uppercase tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Our Ministries
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {ministries.map((ministry, i) => (
            <div
              key={ministry.id}
              className={`transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <MinistryCard ministry={ministry} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
