import { useState } from "react";
import { SEO } from "@/components/seo";
import {
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals.";

const communityBenefits = [
  "Daily deal updates before they go public",
  "Hyderabad market insights and trends",
  "Early access to new project launches",
  "Unbiased advice with no pressure selling",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => formData.append(key, value as string));

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw2eA6pAy00LYwYFjPMOQeaw8LsXRQwVPB-PfHVbixt7mJkogED92ab2QRAG3pgyK4/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });
      // Due to no-cors, fetch succeeds if the request was dispatched successfully. 
      // If it throws, there was a network error.
      setSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed", error);
      setSubmitError("Failed to send. Refresh or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact FirstDoor | Real Estate Expert in Hyderabad"
        description="Get in touch with FirstDoor. Call, email or join our WhatsApp community for early access to Hyderabad's best property deals."
      />

      {/* Hero */}
      <section
        className="pt-24 sm:pt-28 pb-10 sm:pb-12 relative overflow-hidden"
        style={{ background: "#0c1f33" }}
      >
        <div className="absolute inset-0">
          <img
            src="/contact.webp"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(108deg, rgba(7,22,37,0.92) 0%, rgba(12,31,51,0.78) 48%, rgba(12,31,51,0.35) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/65 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Get In Touch
              </span>
              <h1 className="fluid-display font-bold text-white mb-3 sm:mb-4 leading-tight max-w-2xl">
                Let's Find Your Perfect Property
              </h1>
              <p
                className="text-white/60 text-sm sm:text-lg max-w-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Call, email, or join our WhatsApp updates to get Hyderabad
                property opportunities before they hit the wider market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative max-w-xl mx-auto lg:ml-auto lg:mr-0 w-full"
            >
              <div className="rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/contact.webp"
                  alt="Luxury property contact section visual"
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-8 sm:mt-12 pb-16 sm:pb-24 relative z-20">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Two Big Cards: Call + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Call Card */}
              <a
                href="tel: 8008113094"
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                data-testid="link-contact-phone"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs text-foreground/40 font-medium mb-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Call for Direct Consultation
                  </p>
                  <p className="font-bold text-foreground text-base">
                    8008113094
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#25D366] hover:bg-[#25D366]/90 transition-all group"
                data-testid="link-contact-whatsapp"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs text-white/60 font-medium mb-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Message to Book a Free Audit
                  </p>
                  <p className="font-bold text-white text-base">
                    WhatsApp Us
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Email + contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:info@firstdoor.in"
                className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4 transition-all hover:border-primary/30 hover:bg-primary/8 sm:col-span-2"
                data-testid="link-contact-email"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs font-medium text-foreground/40"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Email Us
                  </p>
                  <p className="truncate text-base font-bold text-foreground">
                    info@firstdoor.in
                  </p>
                  <p
                    className="mt-0.5 text-xs text-foreground/45"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Share your requirement and we will respond within a few
                    hours.
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p
                    className="text-xs text-foreground/40 font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Location
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p
                    className="text-xs text-foreground/40 font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Office Address
                  </p>
                  <p className="font-bold text-foreground text-sm leading-relaxed mt-0.5">
                    5th Floor, Cowork Zone, Kavuri Hills,<br />
                    Madhapur, Hyderabad, Telangana 500033
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0c1f33 0%, #183558 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-4">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Join Our WhatsApp Community
                </h2>
                <p
                  className="text-white/45 text-sm mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Get daily deal updates, Hyderabad market insights, early
                  access to launches, and unbiased advice directly on WhatsApp.
                </p>
                <ul className="space-y-2 mb-5">
                  {communityBenefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-white/60 text-xs sm:text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full min-h-11 py-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#25D366]/90 transition-colors shadow-lg shadow-black/20 text-sm"
                  data-testid="button-join-whatsapp"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" />
                  Join WhatsApp Community
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl border border-border"
          >
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">
              Send Us a Message
            </h2>
            <p
              className="text-foreground/45 text-xs sm:text-sm mb-5 sm:mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Tell us what you're looking for and we'll get back to you within a
              few hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 sm:py-16 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p
                  className="text-foreground/45 text-sm mb-5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  We'll reach out within a few hours. For quicker response, call
                  or WhatsApp us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="tel: 8008113094"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <Phone className="w-4 h-4 shrink-0" /> Call Now
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-medium"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <FaWhatsapp className="w-4 h-4 shrink-0" /> Join WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-testid="form-contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1.5 block"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1.5 block"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit mobile"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1.5 block"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1.5 block"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    I'm Interested In
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, interest: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all cursor-pointer"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    data-testid="select-interest"
                  >
                    <option value="">Select property type</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Villas">Villas</option>
                    <option value="Plots">Plots</option>
                    <option value="Penthouses">Penthouses</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1.5 block"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us what you're looking for — budget, location, timeline..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    data-testid="textarea-message"
                  />
                </div>

                {submitError && (
                  <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm text-center font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-foreground text-white font-bold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all shadow-sm text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                  data-testid="button-submit-form"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin shrink-0" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" />
                      Send Message
                    </>
                  )}
                </button>

                <p
                  className="text-xs text-foreground/35 text-center"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Or call us directly:{" "}
                  <a
                    href="tel: 8008113094"
                    className="text-primary font-medium hover:underline"
                  >
                    8008113094
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
