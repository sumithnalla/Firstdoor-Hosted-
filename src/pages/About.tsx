import { SEO } from "@/components/seo";
import { CountUpStat } from "@/components/CountUpStat";
import { Link } from "wouter";
import {
  Phone,
  Target,
  Shield,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Building2,
  Key,
} from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals.";

const coreServices = [
  {
    icon: TrendingUp,
    title: "Expert Property Consulting",
    desc: "Investment advisory, detailed market analysis, and accurate property valuation to help buyers and investors.",
  },
  {
    icon: Building2,
    title: "Premier Channel Partnerships",
    desc: "Project marketing and exclusive deals for Real Estate developers to optimize investments and drive sales.",
  },
  {
    icon: Key,
    title: "Residential Property Solutions",
    desc: "Assisting clients in finding tailored homes, focusing on secure gated communities and prime neighborhoods.",
  },
  {
    icon: Shield,
    title: "End-to-End Real Estate Support",
    desc: "From finding a property to legal documentation, home loan guidance, resale, and rental services.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About FirstDoor | Trusted Property Consulting"
        description="FirstDoor is a trusted property consulting partner for developers and Real Estate firms, collaborating with 700+ RERA Verified Projects across Hyderabad."
      />

      {/* Hero */}
      <section
        className="relative pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden"
        style={{ background: "#0c1f33" }}
      >
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-18"
          />
          <img
            src="/company.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(108deg, rgba(7,22,37,0.92) 0%, rgba(12,31,51,0.78) 48%, rgba(12,31,51,0.38) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/65 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                About FirstDoor
              </span>

              <h1 className="fluid-display font-bold text-white mb-4 sm:mb-5 max-w-2xl leading-tight">
                Trusted Property Consulting in Hyderabad
              </h1>
              <p
                className="text-white/60 text-sm sm:text-lg max-w-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Partner with us to access 700+ exclusive RERA Verified Real Estate projects and strategic investment opportunities backed by expert market insights.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 max-w-2xl">
                {[
                  "Market Insights",
                  "Project Feasibility",
                  "Strategic Sales",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-white/75 backdrop-blur-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative max-w-2xl mx-auto lg:ml-auto lg:mr-0 w-full"
            >
              <div className="rounded-[2rem] border border-white/20 bg-white/8 p-2 sm:p-2 shadow-2xl backdrop-blur-md overflow-hidden">
                <img src="/developers.png" alt="Developers and FirstDoor" className="w-full h-auto rounded-[1.75rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-8 sm:py-10 bg-[#0c1f33]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { value: 700, suffix: "+", label: "Premium Projects" },
              { value: 7, suffix: "+", label: "Years Experience" },
              { value: 200, suffix: "+", label: "Deals Closed" },
              { value: 95, suffix: "%", label: "Client Satisfaction" },
            ].map((s, i) => (
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-8 sm:mt-12 pb-16 sm:pb-24">
        {/* Core Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-border p-6 sm:p-8 md:p-12 mb-6 sm:mb-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-5">
              <div>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-3 py-1.5 rounded-full mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Our Story
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  FirstDoor
                </h2>
                <p
                  className="text-primary font-semibold text-sm sm:text-base mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Trusted Property Experts
                </p>
              </div>
              <p
                className="text-foreground/55 leading-relaxed text-sm sm:text-base"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                FirstDoor is a trusted property consulting partner for developers and Real Estate firms, collaborating with 700+ RERA Verified  Projects across Hyderabad. We offer in-depth market insights, project feasibility analysis, and strategic sales support to help our partners drive growth, optimize investments, and connect with the right clientele in prime locations.
              </p>
              <p
                className="text-foreground/55 leading-relaxed text-sm sm:text-base"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                As an established consulting firm and channel partner, we act as a bridge between developers and homebuyers, specializing in prime Real Estate and gated communities.
              </p>
            </div>

            {/* Core Services */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6">
                Core Services
              </h3>
              <div className="grid gap-4">
                {coreServices.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-border"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">{service.title}</h4>
                      <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-10 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-3xl">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white/40 mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Our Track Record
            </h2>
            <p
              className="text-white/50 text-base sm:text-lg leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              "We boast a 95% client satisfaction rate with over 1,200 successful deals closed, drawing on a decade of expertise in the property consulting domain to deliver unparalleled value to our clients."
            </p>
            <p
              className="text-white/30 text-sm mt-3 sm:mt-4 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Users className="w-4 h-4" /> — FirstDoor Team
            </p>
          </div>
        </motion.div>

        {/* Areas we cover */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-10 border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
            Areas We Cover
          </h2>
          <p
            className="text-foreground/45 text-xs sm:text-sm mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            We have the deepest market knowledge in these Hyderabad
            micro-markets:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Gachibowli",
              "Hitech City",
              "Kondapur",
              "Madhapur",
              "Banjara Hills",
              "Jubilee Hills",
              "Narsingi",
              "Nallagandla",
              "Mokila",
              "Tellapur",
              "Tukkuguda",
              "Vikarabad",
              "Kollur",
              "Future City",
              "Shamshabad",
              "Osman Nagar",
              "Neopolis",
              "North Hyderabad",
              "South Hyderabad",
              "East Hyderabad",
              "West Hyderabad",
              "Financial District",
            ].map((area) => (
              <Link
                href="/properties"
                key={area}
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-border text-xs sm:text-sm font-medium text-foreground/60 hover:text-primary hover:border-primary/40 transition-all shadow-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 md:p-10 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Connect with FirstDoor?
          </h2>
          <p
            className="text-foreground/45 mb-6 max-w-sm sm:max-w-xl mx-auto text-sm sm:text-base"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Whether you are looking for the perfect home or want to optimize your project's sales, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <a
              href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-sm"
              data-testid="button-about-whatsapp"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              Join Our Community
            </a>
            <a
              href="tel: 8008113094"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-border text-foreground font-semibold text-sm sm:text-base hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all"
              data-testid="button-about-call"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              Call 8008113094
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
