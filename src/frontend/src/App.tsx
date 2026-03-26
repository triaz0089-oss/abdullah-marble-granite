import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Crown,
  Diamond,
  Facebook,
  Gem,
  Instagram,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { DesignCard } from "./components/DesignCard";
import { Category, useGetAllDesignStyles } from "./hooks/useQueries";
import type { DesignStyle } from "./hooks/useQueries";

const queryClient = new QueryClient();

const FILTER_LABELS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: Category.minimal, label: "Minimal" },
  { key: Category.bold, label: "Bold" },
  { key: Category.editorial, label: "Editorial" },
  { key: Category.ecommerce, label: "E-Commerce" },
  { key: Category.portfolio, label: "Portfolio" },
  { key: Category.blog, label: "Blog" },
  { key: Category.landing, label: "Landing" },
];

const FALLBACK_STYLES: DesignStyle[] = [
  {
    id: "1",
    category: Category.minimal,
    name: "Pure Form",
    tagline: "Less is infinitely more",
    description:
      "A pristine white canvas with generous white space, razor-thin lines, and a single accent hue. Distillation of content to its purest essence.",
  },
  {
    id: "2",
    category: Category.bold,
    name: "Manifesto",
    tagline: "Design that demands attention",
    description:
      "High-contrast black and gold typography dominating the viewport. Unapologetic, assertive, and impossible to ignore at every scroll depth.",
  },
  {
    id: "3",
    category: Category.editorial,
    name: "The Chronicle",
    tagline: "Journalism meets fine art",
    description:
      "Magazine-grade column layouts, ink-black body text, and typographic hierarchy inspired by the golden age of print. Words as architecture.",
  },
  {
    id: "4",
    category: Category.ecommerce,
    name: "Atelier Shop",
    tagline: "Luxury commerce, redefined",
    description:
      "A curated product experience where each item feels like an objet d'art. Clean product photography against soft marble backdrops with gold CTA elements.",
  },
  {
    id: "5",
    category: Category.portfolio,
    name: "Folio Noir",
    tagline: "Work speaks for itself",
    description:
      "An immersive dark-canvas portfolio for creative professionals. Full-bleed imagery, elegant transitions, and minimal navigation allow work to take center stage.",
  },
  {
    id: "6",
    category: Category.landing,
    name: "The Overture",
    tagline: "First impressions, perfected",
    description:
      "A conversion-engineered landing page wrapped in premium aesthetics. Cinematic hero, social proof ribbon, and a single crystalline call-to-action.",
  },
  {
    id: "7",
    category: Category.blog,
    name: "Pensées",
    tagline: "Ideas deserve beautiful homes",
    description:
      "A literary blog template with drop-cap leads, pull quotes framed in gold, and a reading experience calibrated for both beauty and comprehension.",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "Portfolio", "Styles", "Process", "Contact"];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      style={{
        backgroundColor: "#f9f7f3",
        borderBottom: "1px solid rgba(207,201,194,0.6)",
      }}
      data-ocid="header.section"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="font-playfair text-xl font-bold tracking-[0.12em] text-[#111111] leading-tight"
          data-ocid="header.link"
        >
          <span className="block">ABDULLAH MARBLE</span>
          <span className="block text-[#c6a15a] text-[13px] tracking-[0.18em]">
            GRANITE
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link font-inter text-[14px] font-medium tracking-wide text-[#444444] hover:text-[#111111] transition-colors"
              data-ocid="header.link"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#styles"
            className="hidden md:block font-inter text-[13px] uppercase tracking-[0.14em] font-medium px-6 py-2.5 rounded-sm transition-all duration-200 hover:opacity-80 hover:shadow-gold"
            style={{ backgroundColor: "#2b2b2c", color: "#f6f2ec" }}
            data-ocid="header.primary_button"
          >
            Explore Designs
          </a>
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t"
            style={{
              borderColor: "rgba(207,201,194,0.6)",
              backgroundColor: "#f9f7f3",
            }}
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-inter text-[14px] font-medium text-[#444444] hover:text-[#111111] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="marble-light py-28 md:py-36 relative overflow-hidden"
      data-ocid="hero.section"
    >
      <div
        className="absolute top-12 left-8 w-32 h-32 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #c6a15a 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-16 right-12 w-48 h-48 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,161,90,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
            <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-[#c6a15a]">
              Wholesale Dealer — Gujranwala
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
          </div>

          <h1 className="font-playfair font-bold uppercase leading-none tracking-tight text-[#111111] mb-6">
            <span className="block text-[clamp(36px,6vw,72px)]">
              ABDULLAH MARBLE
            </span>
            <span className="block text-[clamp(28px,4.5vw,52px)] text-[#c6a15a] mt-1">
              GRANITE
            </span>
          </h1>

          <div className="gold-divider max-w-md mx-auto my-8" />

          <p className="font-inter text-[16px] leading-relaxed text-[#666666] max-w-lg mx-auto mb-4">
            Gujranwala se kam qeemat per premium marble aur granite ki supply.
            Wholesale dealer — bulk orders ke liye rabta karein.
          </p>
          <p className="font-inter text-[14px] leading-relaxed text-[#888888] max-w-lg mx-auto mb-10">
            Premium quality marble &amp; granite at the best wholesale prices
            from Gujranwala.
          </p>

          <a
            href="#contact"
            className="inline-block font-inter text-[13px] uppercase tracking-[0.16em] font-medium px-10 py-4 rounded-sm transition-all duration-300 hover:opacity-85 hover:shadow-gold hover:-translate-y-0.5"
            style={{ backgroundColor: "#2b2b2c", color: "#f6f2ec" }}
            data-ocid="hero.primary_button"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section
      id="portfolio"
      className="marble-light py-24 md:py-32"
      data-ocid="gallery.section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
            <Diamond size={14} color="#c6a15a" />
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
          </div>
          <h2 className="font-playfair font-bold uppercase tracking-wider text-[#111111] text-[clamp(28px,4vw,42px)] mb-3">
            OUR WORK
          </h2>
          <p className="font-inter text-[13px] uppercase tracking-[0.2em] text-[#c6a15a] mb-4">
            Hamara Kaam
          </p>
          <p className="font-inter text-[15px] text-[#666666] max-w-lg mx-auto leading-relaxed">
            Installed Marble — Gujranwala
          </p>
        </motion.div>

        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          {/* Gold-framed image */}
          <div
            className="relative w-full max-w-4xl"
            style={{
              padding: "6px",
              background:
                "linear-gradient(135deg, #c6a15a 0%, #e8d5a3 40%, #c6a15a 60%, #a07830 100%)",
              borderRadius: "2px",
              boxShadow:
                "0 8px 48px rgba(0,0,0,0.18), 0 2px 16px rgba(198,161,90,0.18)",
            }}
          >
            {/* Inner frame */}
            <div
              style={{
                padding: "4px",
                background: "#f9f7f3",
                borderRadius: "1px",
              }}
            >
              <img
                src="/assets/uploads/whatsapp_image_2026-03-24_at_7.37.12_am-019d23f9-9058-770d-8556-f11357332727-1.jpeg"
                alt="Premium grey marble with checker border installed in Gujranwala"
                className="w-full block"
                style={{
                  display: "block",
                  objectFit: "cover",
                  maxHeight: "520px",
                  borderRadius: "1px",
                }}
              />
            </div>
          </div>

          {/* Caption */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className="h-px w-8"
                style={{ backgroundColor: "#c6a15a" }}
              />
              <span className="font-inter text-[11px] uppercase tracking-[0.22em] text-[#c6a15a]">
                Installation
              </span>
              <div
                className="h-px w-8"
                style={{ backgroundColor: "#c6a15a" }}
              />
            </div>
            <p className="font-playfair italic text-[17px] text-[#444444]">
              Premium grey marble with checker border — Installed in Gujranwala
            </p>
            <p className="font-inter text-[12px] uppercase tracking-[0.18em] text-[#aaaaaa] mt-2">
              Abdullah Marble Granite · Wholesale Dealer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StylesGallerySection() {
  const { data: backendStyles, isLoading } = useGetAllDesignStyles();
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const allStyles =
    backendStyles && backendStyles.length > 0 ? backendStyles : FALLBACK_STYLES;

  const filtered =
    activeFilter === "all"
      ? allStyles
      : allStyles.filter((s) => s.category === activeFilter);

  return (
    <section
      id="styles"
      className="marble-dark py-24 md:py-32"
      data-ocid="styles.section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#b58a4c" }} />
            <Diamond size={14} color="#c6a15a" />
            <div className="h-px w-10" style={{ backgroundColor: "#b58a4c" }} />
          </div>
          <h2 className="font-playfair font-bold uppercase tracking-wider text-marble-text text-[clamp(28px,4vw,42px)] mb-4">
            EXPLORE DESIGN STYLES
          </h2>
          <p className="font-inter text-[15px] text-[#888888] max-w-xl mx-auto leading-relaxed">
            Each template is a complete visual language — a cohesive system of
            typography, color, and space.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-14"
          role="tablist"
          aria-label="Filter design styles"
          data-ocid="styles.tab"
        >
          {FILTER_LABELS.map(({ key, label }) => (
            <button
              type="button"
              key={key}
              role="tab"
              aria-selected={activeFilter === key}
              onClick={() => setActiveFilter(key as Category | "all")}
              className={`font-inter text-[12px] uppercase tracking-[0.12em] px-4 py-2 rounded-sm border transition-all duration-200 ${
                activeFilter === key
                  ? "border-gold text-gold bg-[rgba(198,161,90,0.08)]"
                  : "border-[rgba(198,161,90,0.2)] text-[#888888] hover:border-[rgba(198,161,90,0.4)] hover:text-marble-text"
              }`}
              data-ocid="styles.tab"
            >
              {label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div
            className="flex items-center justify-center py-20 text-[#888888] font-inter text-sm tracking-widest uppercase"
            data-ocid="styles.loading_state"
          >
            <div className="flex gap-2 items-center">
              <div
                className="w-1 h-1 bg-gold rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-1 h-1 bg-gold rounded-full animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />
              <div
                className="w-1 h-1 bg-gold rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
              />
              <span className="ml-3">Curating styles…</span>
            </div>
          </div>
        )}

        {!isLoading && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.length === 0 ? (
                <div
                  className="col-span-3 text-center py-16 text-[#666666] font-inter text-sm"
                  data-ocid="styles.empty_state"
                >
                  No designs found for this category.
                </div>
              ) : (
                filtered.map((style, i) => (
                  <DesignCard
                    key={style.id}
                    style={style}
                    index={i}
                    isDark={i % 2 === 1}
                  />
                ))
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

function FeatureStrip() {
  const features = [
    {
      title: "Timeless Elegance",
      desc: "Every design style is built upon a foundation of enduring aesthetic principles, ensuring your digital presence never feels dated.",
      icon: <Crown size={22} color="#c6a15a" strokeWidth={1.5} />,
    },
    {
      title: "Refined Craft",
      desc: "Pixel-precise typography, mathematically balanced grids, and obsessive attention to detail in every element and interaction.",
      icon: <Diamond size={22} color="#c6a15a" strokeWidth={1.5} />,
    },
    {
      title: "Premium Quality",
      desc: "Each template is performance-optimized, accessibility-compliant, and tested across every device and screen density.",
      icon: <Gem size={22} color="#c6a15a" strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="process"
      className="marble-light py-24 md:py-28"
      data-ocid="features.section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
            <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-[#c6a15a]">
              Our Philosophy
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#c6a15a" }} />
          </div>
          <h2 className="font-playfair font-bold uppercase tracking-wider text-[#111111] text-[clamp(26px,3.5vw,38px)]">
            THE MARBLE COLLECTION
          </h2>
        </motion.div>

        <div className="gold-divider max-w-xs mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              data-ocid="features.card"
            >
              <div className="flex items-center justify-center mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(198,161,90,0.12) 0%, transparent 70%)",
                    border: "1px solid rgba(198,161,90,0.3)",
                  }}
                >
                  {f.icon}
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold uppercase tracking-wide text-[#111111] mb-3">
                {f.title}
              </h3>
              <div
                className="h-px w-8 mx-auto mb-4"
                style={{ backgroundColor: "#c6a15a" }}
              />
              <p className="font-inter text-[14px] leading-relaxed text-[#666666]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      id="contact"
      className="marble-dark py-16 md:py-20"
      data-ocid="footer.section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-1">
            <div className="font-playfair text-xl font-bold tracking-[0.12em] text-marble-text mb-1 leading-tight">
              ABDULLAH MARBLE
            </div>
            <div className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#c6a15a] mb-1">
              GRANITE
            </div>
            <div className="font-inter text-[10px] uppercase tracking-[0.15em] text-[#888888] mb-5">
              Wholesale Dealer — Gujranwala
            </div>
            <p className="font-inter text-[13px] leading-relaxed text-[#888888]">
              Gujranwala se kam qeemat per premium marble aur granite. Bulk
              orders welcome.
            </p>
          </div>

          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#c6a15a] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Portfolio", "Styles", "Process"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-inter text-[13px] text-[#888888] hover:text-marble-text transition-colors"
                    data-ocid="footer.link"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#c6a15a] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Marble Supply",
                "Granite Supply",
                "Wholesale Orders",
                "Custom Cutting",
              ].map((item) => (
                <li key={item}>
                  <span className="font-inter text-[13px] text-[#888888]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#c6a15a] mb-5">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm border border-[rgba(198,161,90,0.2)] text-[#888888] hover:text-[#c6a15a] hover:border-[rgba(198,161,90,0.5)] transition-all duration-200"
                  data-ocid="footer.link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <address className="not-italic space-y-3">
              <a
                href="tel:03423940564"
                className="font-inter text-[13px] text-[#888888] hover:text-[#c6a15a] transition-colors flex items-center gap-2"
              >
                <span className="shrink-0 text-[#c6a15a]">
                  <Phone size={13} strokeWidth={1.5} />
                </span>
                03423940564
              </a>
              <a
                href="tel:03266244882"
                className="font-inter text-[13px] text-[#888888] hover:text-[#c6a15a] transition-colors flex items-center gap-2"
              >
                <span className="shrink-0 text-[#c6a15a]">
                  <Phone size={13} strokeWidth={1.5} />
                </span>
                03266244882
              </a>
              <p className="font-inter text-[13px] text-[#888888] flex items-center gap-2">
                <span className="shrink-0 text-[#c6a15a]">
                  <Phone size={13} strokeWidth={1.5} />
                </span>
                0318 8194471
              </p>
            </address>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[12px] text-[#666666]">
            © {currentYear} Abdullah Marble Granite. All rights reserved.
          </p>
          <p className="font-inter text-[12px] text-[#555555]">
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6a15a] hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GallerySection />
        <StylesGallerySection />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
