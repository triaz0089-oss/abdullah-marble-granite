import React, { useEffect, useRef, useState } from "react";
import type { DesignStyle } from "../hooks/useQueries";
import { CategoryPreview } from "./CategoryPreview";

interface DesignCardProps {
  style: DesignStyle;
  index: number;
  isDark: boolean;
}

export function DesignCard({ style, index, isDark }: DesignCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardBg = isDark
    ? "bg-marble-charcoal border border-[rgba(198,161,90,0.2)]"
    : "bg-marble-light border border-[rgba(198,161,90,0.25)]";

  const textColor = isDark ? "text-marble-text" : "text-[#111111]";
  const mutedColor = isDark ? "text-[#888888]" : "text-[#666666]";

  return (
    <div
      ref={ref}
      data-ocid={`styles.item.${index + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        className={`card-gold-hover ${cardBg} rounded-xl overflow-hidden shadow-card-dark flex flex-col h-full`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <CategoryPreview category={style.category} isDark={isDark} />
        </div>

        <div className="gold-divider" />

        <div className="p-6 flex flex-col flex-1">
          <div className="font-inter text-[11px] uppercase tracking-[0.15em] text-gold mb-2">
            {style.category}
          </div>
          <h3
            className={`font-playfair text-xl font-semibold uppercase tracking-wide ${textColor} mb-1 leading-tight`}
          >
            {style.name}
          </h3>
          <p
            className={`font-inter text-sm font-medium ${mutedColor} mb-3 italic`}
          >
            {style.tagline}
          </p>
          <p
            className={`font-inter text-[13px] leading-relaxed ${mutedColor} flex-1 mb-4`}
          >
            {style.description}
          </p>
          <button
            type="button"
            className="font-inter text-[12px] uppercase tracking-[0.12em] text-gold hover:opacity-70 transition-opacity text-left flex items-center gap-2 group"
            data-ocid={`styles.button.${index + 1}`}
          >
            View Details
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
