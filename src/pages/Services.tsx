import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Phone, ArrowRight, CheckCircle2,
  Home as HomeIcon, Building2, TreePine, Key, PieChart, BadgeCheck,
  FileText, TrendingUp, Users, ShieldCheck,
} from "lucide-react";

const WHATSAPP = "https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Services() {
  return (
    <>
      <SEO
        title="Services | FirstDoor Real Estate Hyderabad"
        description="Your complete real estate partner in Hyderabad. Residential, commercial, rental, investment, fractional ownership, and Expert services by FirstDoor."
      />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden" style={{ background: "#0c1f33" }}>
        <div className="absolute inset-0">
          <img src="/color.jpeg" alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, rgba(7,22,37,0.95) 0%, rgba(12,31,51,0.85) 50%, rgba(12,31,51,0.5) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/65 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Our Services
              </span>
              <h1 className="fluid-display font-bold text-white mb-4 sm:mb-5 leading-tight">
                Your Complete Real Estate Partner in Hyderabad
              </h1>
              <p className="text-white/60 text-sm sm:text-lg max-w-xl mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                From finding your first home to building a high-yield investment portfolio — we handle every step with expertise, transparency, and zero pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8008113094"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-lg"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  data-testid="button-services-call"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  Call for Consultation
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  data-testid="button-services-whatsapp"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative max-w-2xl mx-auto lg:ml-auto lg:mr-0 w-full"
            >
              <div className="rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/services.png"
                  alt="Our Services"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-10 sm:space-y-16">

        {/* ── 1. RESIDENTIAL ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div variants={fadeUp}>
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
              <HomeIcon className="w-6 h-6 text-primary" />
            </div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Residential
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Residential Services</h2>
            <p className="text-foreground/55 text-sm sm:text-base leading-relaxed mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Whether you're buying your first flat or upgrading to a villa, we match you with RERA-verified properties that fit your budget and lifestyle — without the broker games.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {["Apartments (1–5 BHK)", "Villas & Independent Houses", "Gated Community Plots", "Ready to Move & Under Construction", "RERA Verified Projects", "All Budget Ranges"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/65" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="button-find-home"
            >
              Find a Home
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border">
            <div className="space-y-4">
              {[
                { icon: HomeIcon, title: "Buy a Home", desc: "Access exclusive pre-launch and verified ready-to-move listings." },
                { icon: ShieldCheck, title: "RERA Compliance", desc: "Every listing is checked against TSRERA for full legal protection." },
                { icon: Users, title: "Expert Matchmaking", desc: "We shortlist based on your exact budget, location, and timeline." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border">
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{title}</p>
                    <p className="text-xs text-foreground/50 mt-0.5 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── 2. COMMERCIAL ⭐ HIGHLIGHTED ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/30"
          style={{ background: "linear-gradient(135deg, #0c1f33 0%, #1a3a5c 100%)" }}
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 -translate-y-1/3 translate-x-1/3 blur-3xl" />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl sm:rounded-3xl pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-10 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary/80 bg-primary/15 border border-primary/25 px-3 py-1 rounded-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Commercial — Best ROI
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Commercial Services</h2>
              </div>
            </div>

            <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Hyderabad's commercial Real Estate is one of India's fastest-growing investment segments. We connect you with the best-yielding office spaces, retail shops, showrooms, and warehouses — all with ROI-focused selection.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {["Office Spaces", "Retail Shops", "Showrooms", "Warehouses"].map((item) => (
                <div key={item} className="flex items-center gap-2 p-3.5 rounded-xl bg-white/8 border border-white/12 text-sm text-white/70" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-5 rounded-2xl bg-white/8 border border-white/12 mb-8">
              <div>
                <p className="text-white/45 text-xs font-medium mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Expected ROI on Commercial Properties</p>
                <p className="text-2xl sm:text-3xl font-bold text-white">6–15% <span className="text-base font-medium text-white/50">annually</span></p>
              </div>
              <p className="text-white/40 text-xs max-w-[180px] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Best commercial ROI in Hyderabad — expert-selected properties only</p>
            </div>

            <a
              href="tel:8008113094"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all shadow-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="button-commercial-consultation"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Get Commercial Consultation
            </a>
          </div>
        </motion.div>

        {/* ── 3. RENTAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center">
              <Key className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1 rounded-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Rental
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-1">Rental Services</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Owners */}
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>For Property Owners</p>
              <h3 className="text-lg font-bold text-foreground mb-3">List & Earn</h3>
              <p className="text-foreground/55 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                List your property with us and find verified, quality tenants fast. We manage viewings, paperwork, and tenant vetting — hands-free for you.
              </p>
              <ul className="space-y-2 mb-6">
                {["List your property", "Find verified tenants", "Rental agreement support", "Ongoing rental management"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/65" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:8008113094"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all w-full justify-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="button-owner-rental"
              >
                <Phone className="w-4 h-4 shrink-0" />
                List My Property
              </a>
            </div>

            {/* Tenants */}
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/35 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>For Tenants</p>
              <h3 className="text-lg font-bold text-foreground mb-3">Find & Move In</h3>
              <p className="text-foreground/55 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Find a verified rental that fits your budget in Hyderabad's best areas. Expert guidance on select properties. Quick possession.
              </p>
              <ul className="space-y-2 mb-6">
                {["Verified rental listings", "Expert Guidance", "Quick possession", "Transparent rental terms"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/65" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:8008113094"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all w-full justify-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="button-tenant-find"
              >
                <Key className="w-4 h-4 shrink-0" />
                Find a Rental
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── 4. INVESTMENT & ROI ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Investment & ROI
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Investment & ROI Services</h2>
              <p className="text-foreground/55 text-sm sm:text-base leading-relaxed mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Build wealth through smart Real Estate investments in Hyderabad. Whether you're investing ₹50L or ₹5Cr, we structure the right opportunity for your goals.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Fractional investment opportunities",
                  "Landlord portfolio management",
                  "High-yield commercial properties",
                  "Pre-launch investment deals",
                  "Exit strategy planning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/65" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#25D366]/90 transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="button-investment-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                Discuss Investment Options
              </a>
            </div>

            {/* Callout card */}
            <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8" style={{ background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Returns Example</span>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">₹75K</p>
                <p className="text-white/45 text-sm mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>per month from ₹1 Crore invested</p>
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {[
                    { label: "Annual Returns", value: "6–15%" },
                    { label: "Type", value: "Rental + Appreciation" },
                    { label: "Investment Horizon", value: "3–7 Years" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-sm">
                      <span className="text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
                      <span className="font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>



        {/* ── 6. EXPERT GUIDANCE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border">
            <div className="space-y-3">
              {[
                { icon: FileText, title: "Legal Paperwork & Registration", desc: "We handle all documentation — sale deed, registration, stamp duty, and more." },
                { icon: ShieldCheck, title: "RERA Compliance Checks", desc: "Verify builder credibility and project status through official TSRERA portals." },
                { icon: PieChart, title: "Home Loan Assistance", desc: "We connect you with lenders and help negotiate the best rates for your budget." },
                { icon: Users, title: "End-to-End Support", desc: "From property search all the way to key handover — we're with you throughout." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-border">
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{title}</p>
                    <p className="text-xs text-foreground/50 mt-0.5 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Expert Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Documentation & Guidance</h2>
            <p className="text-foreground/55 text-sm sm:text-base leading-relaxed mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Most buyers fear paperwork. We don't let that stop you. We manage every document, every approval, every registration — from first visit to final handover.
            </p>
            <p className="text-foreground/55 text-sm leading-relaxed mb-8 italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              "We handle everything from search to registration."
            </p>
            <a
              href="tel:8008113094"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="button-guidance-call"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Talk to an Expert
            </a>
          </div>
        </motion.div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)" }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service fits you?
            </h2>
            <p className="text-white/45 text-sm sm:text-base mb-8 max-w-md mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Let's talk. We'll understand your goals and guide you to the right service — no pressure, no pitch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:8008113094"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary/90 transition-all w-full sm:w-auto justify-center shadow-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="button-bottom-call"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                Call Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-semibold text-sm sm:text-base hover:bg-[#25D366]/90 transition-all w-full sm:w-auto justify-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="button-bottom-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}
