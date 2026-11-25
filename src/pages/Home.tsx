import { useCallback, useRef } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { CountUpStat } from "@/components/CountUpStat";
import { FaWhatsapp } from "react-icons/fa";
import { PropertyCard } from "@/components/PropertyCard";
import { CommercialCard } from "@/components/CommercialCard";
import { properties } from "@/data/properties";
import { commercials } from "@/data/commercial";
import { motion } from "framer-motion";
import {
  Phone, ChevronLeft, ChevronRight,
  ArrowRight, CheckCircle2, MapPin, TrendingUp, ShieldCheck, Zap,
  Home as HomeIcon, Building2, TreePine, Key, PieChart, BadgeCheck,
  Star, Flame,
} from "lucide-react";

const WHATSAPP = "https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals.";

const whatsappBenefits = [
  "Daily deal updates before they go public",
  "Hyderabad market insights & trends",
  "Early access to new project launches",
  "Expert Q&A from our community",
];

const callBenefits = [
  "1-on-1 personal consultation",
  "Tailored investment strategy",
  "Site visits & documentation help",
  "End-to-end buying support",
];

const featuredProperties = properties.slice(0, 6);
const homeStats = [
  { value: 700, suffix: "+", label: "RERA Verified Projects" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Deals Closed" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const services = [
  { icon: HomeIcon, title: "Residential", desc: "Apartments, villas & plots for every budget" },
  { icon: Building2, title: "Commercial", desc: "Office spaces, retail & showrooms with best ROI" },
  { icon: TreePine, title: "Plots & Villas", desc: "Premium land & villa communities in Hyderabad" },
  { icon: Key, title: "Rental Services", desc: "Find verified tenants or rentals with zero hassle" },
  { icon: PieChart, title: "Fractional Investment", desc: "Start investing with smaller capital, bigger returns" },
  { icon: BadgeCheck, title: "No Brokerage", desc: "Zero brokerage on select verified properties" },
];

const newLaunches = [
  {
    id: 1,
    name: "Godrej Brooklyn(EOI & OTP)",
    location: "KPHB-HITEC City, Hyderabad",
    price: "₹2.1Cr onwards",
    possession: "Dec 2030",
    badge: "Pre-Launch",
    type: "3 & 4 BHK Ultra-Luxury Homes",
  },
  {
    id: 2,
    name: "Godrej Kukatpally's Crown Jewel(EOI & OTP)",
    location: "Kukatpally (KPHB), Hyderabad",
    price: "₹2.2Cr onwards",
    possession: "Dec 2031",
    badge: "Pre-Launch",
    type: "3 & 4 BHK Luxury Residences",
  },
  {
    id: 3,
    name: "Prestige Golden Grove(EOI & OTP)",
    location: "Tellapur, Hyderabad",
    price: "₹1.1Cr onwards",
    possession: "June 2031",
    badge: "New Launch",
    type: "2, 3 & 4 BHK Luxury Apartments",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPrev = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }, []);
  const scrollNext = useCallback(() => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }, []);

  const commercialScrollRef = useRef<HTMLDivElement>(null);
  const scrollCommercialPrev = useCallback(() => {
    commercialScrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }, []);
  const scrollCommercialNext = useCallback(() => {
    commercialScrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="FirstDoor | Premium Real Estate Expert in Hyderabad"
        description="Get early access to Hyderabad's best real estate deals. Trusted local expert with verified property opportunities in Gachibowli, Jubilee Hills, Hitech City and more."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#0c1f33]">
        <div className="absolute inset-0">
          <img src="/color.jpeg" alt="" aria-hidden className="w-full h-full object-cover object-center" />
          {/* Gradient overlays to ensure text and buttons are fully visible without spoiling the right side of the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f33]/95 via-[#0c1f33]/50 to-transparent sm:from-[#0c1f33]/95 sm:via-[#0c1f33]/50 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f33]/90 via-[#0c1f33]/20 to-transparent sm:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="min-h-[100dvh] pt-24 pb-16 sm:pt-28 sm:pb-20 flex items-center">

            {/* Left: Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 sm:space-y-8 max-w-2xl"
            >
              {/*
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/60 bg-white/8 border border-white/12 px-3 py-1.5 rounded-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse shrink-0" />
                  <span className="hidden sm:inline">Hyderabad's Trusted Real Estate Partner</span>
                  <span className="sm:hidden">Hyderabad Real Estate</span>
                </span>
              </motion.div>
              */}

              <motion.h1
                variants={fadeUp}
                className="fluid-display font-bold text-white"
              >
                Get Early Access to{" "}
                <span className="text-white/55 italic">Hyderabad's Best 700+ RERA Verified</span>{" "}
                Real Estate Projects
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                We connect serious buyers and investors with verified opportunities before they hit the public market. Direct access. Expert guidance.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-sm sm:text-base hover:bg-[#25D366]/90 transition-all shadow-lg shadow-black/20"
                  data-testid="button-hero-whatsapp"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <FaWhatsapp className="w-6 h-6 lg:w-6 lg:h-6 shrink-0" />
                  WhatsApp
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel: 8008113094"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
                  data-testid="button-hero-call"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Call Now
                </a>
              </motion.div>

              {/*
              <motion.p variants={fadeUp} className="text-white/35 text-xs flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <ShieldCheck className="w-3.5 h-3.5" /> Trusted local expert · Verified opportunities
              </motion.p>
              */}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS / SOCIAL PROOF BAR ── */}
      <section className="py-8 sm:py-10 bg-[#0c1f33]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {homeStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="text-center sm:text-left"
              >
                <CountUpStat
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  label={s.label}
                  valueClassName="text-2xl sm:text-3xl font-bold text-white"
                  labelClassName="mt-1 text-xs leading-tight text-white/45 sm:text-sm"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm font-medium text-foreground/45 whitespace-nowrap" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Areas</p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {homeAreas.map((area) => (
                <Link
                  href="/properties"
                  key={area}
                  className="flex-none flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-border text-xs sm:text-sm font-medium text-foreground/60 hover:text-primary hover:border-primary/40 transition-all whitespace-nowrap shadow-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ── COMMERCIAL PROPERTIES ── */}
      <section className="py-12 sm:py-20 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #0c1f33 0%, #112a46 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500/10 translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Premium Listings
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Commercial Spaces
              </h2>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>High-yield commercial properties and premium office spaces</p>
            </motion.div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={scrollCommercialPrev}
                className="flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:border-amber-400 hover:text-amber-400 sm:rounded-2xl"
                aria-label="Previous Commercial"
                data-testid="button-commercial-prev"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={scrollCommercialNext}
                className="flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:border-amber-400 hover:text-amber-400 sm:rounded-2xl"
                aria-label="Next Commercial"
                data-testid="button-commercial-next"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div
            ref={commercialScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-5"
          >
            {commercials.slice(0, 10).map((property, i) => (
              <div key={`comm-${i}`} className="pointer-events-auto flex-none snap-start select-text w-[78vw] sm:w-[300px] lg:w-[340px]">
                <CommercialCard property={property} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <a
              href="tel: 8008113094"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-amber-400 text-[#0c1f33] font-bold text-sm sm:text-base hover:bg-amber-300 transition-all shadow-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Enquire Commercial
              <Phone className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Featured Properties
              </h2>
              <p className="text-foreground/45 text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Handpicked opportunities from our exclusive network</p>
            </motion.div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={scrollPrev}
                className="flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-white transition-all hover:border-primary hover:text-primary sm:rounded-2xl"
                aria-label="Previous"
                data-testid="button-carousel-prev"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-white transition-all hover:border-primary hover:text-primary sm:rounded-2xl"
                aria-label="Next"
                data-testid="button-carousel-next"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-5"
          >
            {featuredProperties.map((property, i) => (
              <div key={property.id} className="pointer-events-auto flex-none snap-start select-text w-[78vw] sm:w-[300px] lg:w-[340px]">
                <PropertyCard property={property} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-foreground text-white font-semibold text-sm sm:text-base hover:bg-foreground/90 transition-all shadow-sm"
              data-testid="button-view-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              View All Properties
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT RETURNS HIGHLIGHT ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0c2a4a 50%, #0e3060 100%)" }}
          >
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-500/10 -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primary/15 translate-y-1/2 -translate-x-1/4 blur-2xl" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Main hook */}
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 bg-white/8 border border-white/15 px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <TrendingUp className="w-3.5 h-3.5" />
                    Investment Returns
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.1]">
                    Invest <span className="text-primary">₹1 Crore</span>
                    <br />
                    <span className="text-white/60 text-2xl sm:text-3xl">earn</span>{" "}
                    <span className="text-[#25D366]">₹75,000/month</span>
                  </h2>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Rental income from prime Hyderabad commercial and residential properties. Verified ROI. Expert-selected portfolio.
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-lg"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    data-testid="button-investment-cta"
                  >
                    Explore Investment Options
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Right: Returns breakdown */}
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Guaranteed Annual Returns", value: "6–15%", sub: "On select properties" },
                    { label: "Monthly Rental Income", value: "₹75K+", sub: "Per ₹1 Cr invested" },
                    { label: "RERA Verified Projects", value: "700+", sub: "Across Hyderabad" },
                  ].map(({ label, value, sub }) => (
                    <div key={label} className="flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/6 border border-white/10">
                      <div>
                        <p className="text-white/45 text-xs font-medium mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</p>
                        <p className="text-xs text-white/25" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{sub}</p>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Services Overview
            </h2>
            <p className="text-foreground/50 text-sm sm:text-base max-w-sm sm:max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              From finding your first home to building an investment portfolio — we cover it all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
              >
                <Link
                  href="/services"
                  className="group flex items-start gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all block"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">{title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-primary shrink-0 ml-auto mt-0.5 transition-all group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl border border-border bg-white text-foreground font-semibold text-sm sm:text-base hover:border-primary/40 hover:text-primary transition-all shadow-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="button-view-services"
            >
              View All Services
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEW LAUNCHES ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Flame className="w-3 h-3" />
                Just Launched
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                New Launches
              </h2>
              <p className="text-foreground/45 text-sm mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Be first. Pre-launch prices. Limited slots.</p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#25D366]/90 transition-colors shrink-0"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FaWhatsapp className="w-4 h-4 shrink-0" />
              Get Early Access
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {newLaunches.map((launch, i) => (
              <motion.div
                key={launch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.99 }}
                className="group relative bg-white rounded-2xl border border-border p-5 sm:p-6 hover:shadow-md hover:border-primary/20 transition-all"
              >
                {/* Badge */}
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${launch.badge === "Pre-Launch" ? "bg-purple-50 text-purple-600 border border-purple-100" : "bg-orange-50 text-orange-600 border border-orange-100"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <Star className="w-2.5 h-2.5" />
                  {launch.badge}
                </span>

                <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 leading-tight">{launch.name}</h3>
                <p className="text-xs text-foreground/45 flex items-center gap-1 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <MapPin className="w-3 h-3 shrink-0" />
                  {launch.location}
                </p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/45" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Type</span>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">{launch.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/45" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Starting Price</span>
                    <span className="font-bold text-primary">{launch.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/45" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Possession</span>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">{launch.possession}</span>
                  </div>
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#25D366]/90 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  data-testid={`button-launch-${launch.id}`}
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" />
                  Get Early Access
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile WhatsApp CTA */}
          <div className="sm:hidden mt-6 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#25D366]/90 transition-colors w-full justify-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FaWhatsapp className="w-4 h-4 shrink-0" />
              Get Early Access to All Launches
            </a>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS ── */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Two Ways to Get Started
            </h2>
            <p className="text-foreground/50 text-sm sm:text-base max-w-sm sm:max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Whether you want real-time updates or personal guidance, we have a path for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-5">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Join Our WhatsApp</h3>
                <p className="text-white/45 text-sm mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get deal updates and market insights without missing a beat.</p>
                <ul className="space-y-2.5 mb-6">
                  {whatsappBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-white/70 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#25D366]/90 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                  data-testid="button-whatsapp-card"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" />
                  Join Community Now
                </a>
              </div>
            </motion.div>

            {/* Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/4 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Call Us Directly</h3>
                <p className="text-foreground/50 text-sm mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Get personalized guidance tailored to your investment goals.</p>
                <ul className="space-y-2.5 mb-6">
                  {callBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-foreground/65 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel: 8008113094"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center sm:justify-start"
                  data-testid="button-call-card"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Call  8008113094
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP COMMUNITY CALLOUT ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden p-8 sm:p-12 md:p-16"
            style={{ background: "linear-gradient(135deg, #0a2012 0%, #0d3a1f 50%, #0f4a28 100%)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#25D366]/10 -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#25D366]/8 translate-y-1/2 -translate-x-1/4 blur-2xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-6">
                  <FaWhatsapp className="w-7 h-7 text-[#25D366]" />
                </div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#25D366]/70 mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Community For Real Estate Updates
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Join Our WhatsApp Community
                </h2>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  500+ smart investors and buyers already inside. Get real deals before they go public — for free.
                </p>
                <a
                  href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base hover:bg-[#25D366]/90 transition-all shadow-lg shadow-black/20 w-full sm:w-auto justify-center"
                  data-testid="button-community-cta"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <FaWhatsapp className="w-5 h-5 shrink-0" />
                  Join Community — It's Free
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Daily deal updates before they go public",
                  "Hyderabad market insights & trends",
                  "Early access to new project launches",
                  "Expert Q&A — get answers from Experts",
                  "Unbiased advice, no pressure selling",
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/6 border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span className="text-white/70 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY FIRSTDOOR ── */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/about.jpg"
                  alt="Hyderabad real estate expert - FirstDoor"
                  className="w-full h-56 sm:h-80 lg:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-lg">
                    <p className="text-xs text-foreground/45 font-medium mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Why Choose FirstDoor?</p>
                    <p className="text-sm sm:text-base font-bold text-foreground">The Easiest Method to Find Your Property in Hyderabad</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Our Edge
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Your Insider Edge in Hyderabad Real Estate
                </h2>
              </div>

              <p className="text-foreground/50 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Finding the right property isn't just about searching listings — it's about who you know. We leverage our deep local network to bring you opportunities others miss.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Zap, title: "Early Access", desc: "Pre-launch prices before public listings" },
                  { icon: ShieldCheck, title: "Verified Listings", desc: "Every property is RERA-verified and scrutinised" },
                  { icon: TrendingUp, title: "Market Intelligence", desc: "Real-time insights on Hyderabad's hottest micro-markets" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-white transition-colors">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">{title}</p>
                      <p className="text-xs sm:text-sm text-foreground/45 mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-10 md:p-14 text-center overflow-hidden shadow-xl"
            style={{ background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 bg-white/8 border border-white/12 px-3 py-1.5 rounded-full mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse shrink-0" />
                Limited Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Don't miss the next big opportunity in Hyderabad real estate
              </h2>
              <p className="text-white/45 text-sm sm:text-base mb-8 max-w-md mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Join hundreds of smart investors who get notified before properties hit the public market.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#25D366]/90 transition-all shadow-lg shadow-black/20 w-full sm:w-auto justify-center"
                  data-testid="button-cta-whatsapp"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Join WhatsApp Community
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel: 8008113094"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
                  data-testid="button-cta-call"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
