import React from "react";
import { Category } from "../hooks/useQueries";

interface CategoryPreviewProps {
  category: Category;
  isDark?: boolean;
}

export function CategoryPreview({
  category,
  isDark = false,
}: CategoryPreviewProps) {
  const bg = isDark ? "#1e1e1f" : "#f4f1ec";
  const fg = isDark ? "#f2efea" : "#111111";
  const fgMuted = isDark ? "#888888" : "#aaaaaa";
  const gold = "#c6a15a";
  const accent = isDark ? "#3a3a3d" : "#e5e0d8";

  switch (category) {
    case Category.minimal:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Minimal design preview"
        >
          <title>Minimal style preview</title>
          <rect width="280" height="200" fill={bg} />
          <rect
            x="40"
            y="44"
            width="80"
            height="6"
            rx="2"
            fill={fg}
            opacity="0.9"
          />
          <rect
            x="40"
            y="58"
            width="50"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.5"
          />
          <line
            x1="40"
            y1="80"
            x2="240"
            y2="80"
            stroke={gold}
            strokeWidth="0.5"
            opacity="0.6"
          />
          <rect
            x="40"
            y="96"
            width="200"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.25"
          />
          <rect
            x="40"
            y="106"
            width="160"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.2"
          />
          <rect
            x="40"
            y="116"
            width="180"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.22"
          />
          <rect
            x="40"
            y="142"
            width="64"
            height="22"
            rx="2"
            fill="none"
            stroke={fg}
            strokeWidth="1"
          />
          <rect
            x="44"
            y="151"
            width="56"
            height="3"
            rx="1"
            fill={fg}
            opacity="0.5"
          />
          <circle
            cx="234"
            cy="44"
            r="22"
            fill="none"
            stroke={accent}
            strokeWidth="1"
          />
          <circle cx="234" cy="44" r="8" fill={gold} opacity="0.3" />
        </svg>
      );

    case Category.bold:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Bold design preview"
        >
          <title>Bold style preview</title>
          <rect width="280" height="200" fill="#111111" />
          <rect x="0" y="0" width="280" height="80" fill="#c6a15a" />
          <rect
            x="20"
            y="18"
            width="140"
            height="18"
            rx="2"
            fill="#111111"
            opacity="0.9"
          />
          <rect
            x="20"
            y="44"
            width="90"
            height="11"
            rx="2"
            fill="#111111"
            opacity="0.6"
          />
          <rect
            x="20"
            y="96"
            width="200"
            height="10"
            rx="2"
            fill="#ffffff"
            opacity="0.8"
          />
          <rect
            x="20"
            y="114"
            width="240"
            height="8"
            rx="2"
            fill="#ffffff"
            opacity="0.4"
          />
          <rect
            x="20"
            y="130"
            width="180"
            height="8"
            rx="2"
            fill="#ffffff"
            opacity="0.3"
          />
          <rect x="20" y="156" width="80" height="28" rx="3" fill={gold} />
          <rect
            x="28"
            y="168"
            width="64"
            height="4"
            rx="1"
            fill="#111111"
            opacity="0.8"
          />
        </svg>
      );

    case Category.editorial:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Editorial design preview"
        >
          <title>Editorial style preview</title>
          <rect width="280" height="200" fill={bg} />
          <rect
            x="20"
            y="20"
            width="240"
            height="4"
            rx="1"
            fill={fg}
            opacity="0.8"
          />
          <line
            x1="20"
            y1="30"
            x2="260"
            y2="30"
            stroke={gold}
            strokeWidth="1"
          />
          <rect
            x="20"
            y="38"
            width="150"
            height="22"
            rx="1"
            fill={fg}
            opacity="0.85"
          />
          <rect
            x="20"
            y="66"
            width="110"
            height="4"
            rx="1"
            fill={fgMuted}
            opacity="0.4"
          />
          <rect
            x="20"
            y="80"
            width="112"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect
            x="20"
            y="88"
            width="108"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.28"
          />
          <rect
            x="20"
            y="96"
            width="115"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect
            x="20"
            y="104"
            width="105"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.28"
          />
          <rect
            x="20"
            y="112"
            width="112"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect
            x="148"
            y="80"
            width="112"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect
            x="148"
            y="88"
            width="108"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.28"
          />
          <rect
            x="148"
            y="96"
            width="112"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect
            x="148"
            y="104"
            width="100"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.28"
          />
          <rect
            x="148"
            y="112"
            width="108"
            height="3"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <rect x="148" y="122" width="112" height="52" rx="2" fill={accent} />
          <rect
            x="160"
            y="134"
            width="88"
            height="28"
            rx="1"
            fill={fgMuted}
            opacity="0.3"
          />
          <line
            x1="20"
            y1="188"
            x2="260"
            y2="188"
            stroke={gold}
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      );

    case Category.ecommerce:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="E-commerce design preview"
        >
          <title>E-commerce style preview</title>
          <rect width="280" height="200" fill={bg} />
          <rect
            x="0"
            y="0"
            width="280"
            height="28"
            fill={isDark ? "#2a2a2c" : "#fffff8"}
          />
          <circle cx="20" cy="14" r="5" fill={gold} opacity="0.6" />
          <rect
            x="32"
            y="11"
            width="60"
            height="4"
            rx="1"
            fill={fgMuted}
            opacity="0.4"
          />
          <rect
            x="220"
            y="8"
            width="40"
            height="14"
            rx="7"
            fill={fg}
            opacity="0.15"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const x = 18 + col * 84;
            const y = 38 + row * 80;
            return (
              <g key={i}>
                <rect x={x} y={y} width="72" height="52" rx="3" fill={accent} />
                <rect
                  x={x + 6}
                  y={y + 8}
                  width="60"
                  height="36"
                  rx="1"
                  fill={fgMuted}
                  opacity="0.2"
                />
                <rect
                  x={x}
                  y={y + 58}
                  width="50"
                  height="4"
                  rx="1"
                  fill={fg}
                  opacity="0.5"
                />
                <rect
                  x={x}
                  y={y + 66}
                  width="36"
                  height="3"
                  rx="1"
                  fill={gold}
                  opacity="0.7"
                />
              </g>
            );
          })}
        </svg>
      );

    case Category.portfolio:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Portfolio design preview"
        >
          <title>Portfolio style preview</title>
          <rect width="280" height="200" fill={bg} />
          <rect
            x="20"
            y="22"
            width="120"
            height="14"
            rx="2"
            fill={fg}
            opacity="0.85"
          />
          <rect
            x="20"
            y="42"
            width="80"
            height="5"
            rx="1"
            fill={gold}
            opacity="0.7"
          />
          <rect x="20" y="60" width="116" height="80" rx="4" fill={accent} />
          <rect
            x="28"
            y="68"
            width="100"
            height="64"
            rx="2"
            fill={fgMuted}
            opacity="0.25"
          />
          <rect x="144" y="60" width="116" height="36" rx="4" fill={accent} />
          <rect
            x="152"
            y="67"
            width="100"
            height="22"
            rx="2"
            fill={fgMuted}
            opacity="0.2"
          />
          <rect
            x="144"
            y="102"
            width="116"
            height="38"
            rx="4"
            fill={isDark ? "#3a3a3d" : "#ddd8d0"}
          />
          <rect
            x="152"
            y="109"
            width="100"
            height="24"
            rx="2"
            fill={fgMuted}
            opacity="0.2"
          />
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              cx={124 + i * 14}
              cy="168"
              r="3"
              fill={i === 0 ? gold : fgMuted}
              opacity={i === 0 ? 0.9 : 0.3}
            />
          ))}
        </svg>
      );

    case Category.blog:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Blog design preview"
        >
          <title>Blog style preview</title>
          <rect width="280" height="200" fill={bg} />
          <rect
            x="80"
            y="14"
            width="120"
            height="10"
            rx="2"
            fill={fg}
            opacity="0.85"
          />
          <line
            x1="40"
            y1="30"
            x2="240"
            y2="30"
            stroke={accent}
            strokeWidth="1"
          />
          <rect x="20" y="38" width="240" height="72" rx="4" fill={accent} />
          <rect
            x="28"
            y="46"
            width="160"
            height="10"
            rx="2"
            fill={fg}
            opacity="0.5"
          />
          <rect
            x="28"
            y="62"
            width="120"
            height="6"
            rx="1"
            fill={fgMuted}
            opacity="0.35"
          />
          <rect
            x="28"
            y="74"
            width="140"
            height="4"
            rx="1"
            fill={fgMuted}
            opacity="0.25"
          />
          <rect
            x="28"
            y="84"
            width="130"
            height="4"
            rx="1"
            fill={fgMuted}
            opacity="0.22"
          />
          <rect
            x="28"
            y="96"
            width="70"
            height="4"
            rx="1"
            fill={gold}
            opacity="0.5"
          />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="20"
                y={124 + i * 22}
                width="200"
                height="4"
                rx="1"
                fill={fg}
                opacity="0.4"
              />
              <rect
                x="20"
                y={132 + i * 22}
                width="160"
                height="3"
                rx="1"
                fill={fgMuted}
                opacity="0.25"
              />
              <rect
                x="228"
                y={124 + i * 22}
                width="32"
                height="18"
                rx="2"
                fill={accent}
              />
            </g>
          ))}
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 280 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Landing page design preview"
        >
          <title>Landing page style preview</title>
          <rect width="280" height="200" fill={isDark ? "#111111" : bg} />
          <rect
            x="0"
            y="0"
            width="280"
            height="110"
            fill={isDark ? "#1a1a1b" : "#111111"}
          />
          <rect
            x="60"
            y="26"
            width="160"
            height="16"
            rx="2"
            fill="#ffffff"
            opacity="0.9"
          />
          <rect
            x="80"
            y="48"
            width="120"
            height="8"
            rx="1"
            fill="#ffffff"
            opacity="0.45"
          />
          <rect x="88" y="68" width="104" height="28" rx="14" fill={gold} />
          <rect
            x="100"
            y="78"
            width="80"
            height="5"
            rx="1"
            fill="#111111"
            opacity="0.7"
          />
          <rect
            x="0"
            y="110"
            width="280"
            height="40"
            fill={isDark ? "#2a2a2c" : "#f4f1ec"}
          />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect
                x={18 + i * 64}
                y="120"
                width="40"
                height="6"
                rx="1"
                fill={gold}
                opacity="0.7"
              />
              <rect
                x={18 + i * 64}
                y="130"
                width="30"
                height="3"
                rx="1"
                fill={fgMuted}
                opacity="0.4"
              />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle cx={40 + i * 88} cy="166" r="10" fill={accent} />
              <rect
                x={18 + i * 88}
                y="180"
                width="44"
                height="3"
                rx="1"
                fill={fgMuted}
                opacity="0.35"
              />
            </g>
          ))}
        </svg>
      );
  }
}
