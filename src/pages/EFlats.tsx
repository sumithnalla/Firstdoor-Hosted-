import { SEO } from "@/components/seo";
import { CheckCircle2, Home, BarChart3, ShieldCheck, Smartphone, Target, Users, Briefcase, Baby, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EFlats() {
  return (
    <>
      <SEO
        title="E-Flats Investment | FirstDoor Real Estate"
        description="E-FLAT is a future-ready real estate investment framework designed to convert property ownership into a structured wealth strategy."
      />

      {/* Hero / Header */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden" style={{ background: "#0c1f33" }}>
        <div className="absolute inset-0">
          <img src="/img1.png" alt="" aria-hidden className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f33]/95 via-[#0c1f33]/50 to-transparent sm:from-[#0c1f33]/95 sm:via-[#0c1f33]/50 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f33]/90 via-[#0c1f33]/20 to-transparent sm:hidden" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl py-12">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
             >
               <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full mb-6">
                 Electronic Flat Investment Model
               </span>
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                 What is <span className="text-emerald-400">E-FLAT</span>?
               </h1>
               <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                 E-FLAT is a future-ready real estate investment framework designed to convert property ownership into a structured wealth strategy.
               </p>
               <a
                  href="https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-base hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
               >
                  Discuss E-Flat Options <ArrowRight className="w-5 h-5" />
               </a>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white relative -mt-10 z-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Home, title: "Real Estate Ownership" },
              { icon: BarChart3, title: "Financial Planning" },
              { icon: ShieldCheck, title: "Protection & Risk Cover" },
              { icon: Smartphone, title: "Digital Execution" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center hover:shadow-lg hover:border-emerald-100 transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different & Ideal For */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why E-FLAT is Different</h2>
                <ul className="space-y-4">
                  {[
                    "No emotional or random property buying",
                    "Ownership aligned with life goals",
                    "Protection for income and family",
                    "Predictable, long-term wealth creation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="font-medium text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ideal For</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "First-time home buyers", icon: Target },
                    { title: "Working professionals", icon: Users },
                    { title: "Business owners investing surplus", icon: Briefcase },
                    { title: "Parents planning long-term", icon: Baby }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground/80 text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="inline-block bg-primary text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg">
                E-FLAT turns a flat into a financial strategy, not just a purchase.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-[3rem] transform rotate-3 scale-105" />
              <img 
                src="/img2.png" 
                alt="E-Flat Strategy" 
                className="relative rounded-[3rem] w-full h-[600px] object-cover shadow-2xl border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The E-Flat Advantage (Existing Component Kept for Value) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Smarter Returns, Zero Maintenance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The "E-Flat" Investment Concept
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Are you considering buying a flat purely for rental income? Let's look at an alternative financial strategy—the E-Flat—designed to give you higher, tax-free returns without the hassles of property maintenance, tenant management, or high home loan interest.
              </p>
            </div>

            {/* Premium Comparison Table */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent blur-3xl -z-10" />
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <thead>
                      <tr>
                        <th className="py-6 px-6 sm:px-8 font-bold text-foreground/50 text-xs uppercase tracking-widest bg-white border-b border-gray-100">Financial Factor</th>
                        <th className="py-6 px-6 sm:px-8 font-bold text-foreground text-sm uppercase tracking-wider bg-gray-50/50 border-b border-gray-100">Traditional 2 BHK Flat</th>
                        <th className="py-6 px-6 sm:px-8 font-bold text-white text-sm uppercase tracking-wider bg-emerald-600 border-b border-emerald-700 shadow-inner">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                            The E-Flat Advantage
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="group transition-colors">
                        <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">Investment Outlay</td>
                        <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">Rs. 50 Lakh (+ Registration)</td>
                        <td className="py-5 px-6 sm:px-8 font-bold text-emerald-700 bg-emerald-50 border-b border-emerald-100">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            Rs. 5 Lakh / year for 10 years
                          </div>
                        </td>
                      </tr>
                      <tr className="group transition-colors">
                        <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">The Debt Trap</td>
                        <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">Loan interest balloons cost to ~Rs. 75 Lakh</td>
                        <td className="py-5 px-6 sm:px-8 font-bold text-emerald-700 bg-emerald-50 border-b border-emerald-100">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 opacity-0" />
                            Zero Debt (Funded annually)
                          </div>
                        </td>
                      </tr>
                      <tr className="group transition-colors">
                        <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">Net Rental Income</td>
                        <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">Rs. 2.16 Lakh / year (Post 30% tax)</td>
                        <td className="py-5 px-6 sm:px-8 font-bold text-emerald-700 bg-emerald-50 border-b border-emerald-100">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 opacity-0" />
                            Rs. 3.52 Lakh / year (100% Tax-Free)
                          </div>
                        </td>
                      </tr>
                      <tr className="group transition-colors">
                        <td className="py-5 px-6 sm:px-8 font-semibold text-foreground">Maintenance</td>
                        <td className="py-5 px-6 sm:px-8 text-muted-foreground bg-gray-50/30">High (Wear & tear, society fees)</td>
                        <td className="py-5 px-6 sm:px-8 font-bold text-emerald-700 bg-emerald-50 rounded-br-2xl">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 opacity-0" />
                            Zero (No physical property to manage)
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Key Financial Benefits Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-8 border border-emerald-100">
                <h3 className="font-bold text-xl text-emerald-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  Key Financial Benefits
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <strong className="block text-base text-foreground">Early Cash Bonuses</strong>
                      <span className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Receive a cash bonus of Rs. 2.03 Lakh between the 7th and 9th year.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <strong className="block text-base text-foreground">Lifelong Income</strong>
                      <span className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>From 10th year onward, get guaranteed income + cash bonus of Rs. 3.52 Lakh annually, tax-free up to 99th year.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <strong className="block text-base text-foreground">Massive Life Cover</strong>
                      <span className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Secures family with increasing Sum Assured starting at Rs. 75 Lakh (avg 5% increase/yr).</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-border flex flex-col justify-center">
                <h3 className="font-bold text-xl text-foreground mb-6">Generational Wealth Transfer</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Death Benefit (at age 90)</p>
                    <p className="text-2xl sm:text-3xl font-bold text-emerald-600">~ Rs. 9,27,66,750/-</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-border shadow-sm relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Maturity Benefit (at age 100)</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">~ Rs. 23,91,91,813/-</p>
                    <p className="text-sm text-emerald-600 font-bold mt-2 inline-flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-4 h-4" /> 100% Tax-Free
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto">
                (Disclaimer: This section outlines a life insurance and savings product comparison. Please refer to the official Benefit Illustration (BI) for exact terms, conditions, and return charts.)
              </p>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground font-medium">More Than Advice. A Long-Term Partnership.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "Personalized Financial Roadmaps",
              "Protection + Wealth Strategy Together",
              "Ethical & Transparent Guidance",
              "One-Stop Financial Solution",
              "Relationship-Driven Approach"
            ].map((item, idx) => (
              <span key={idx} className="bg-white text-emerald-800 font-semibold px-6 py-3 rounded-full border border-gray-200 shadow-sm flex items-center gap-2 hover:border-emerald-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <div className="bg-gray-900 rounded-[3rem] p-8 sm:p-16 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                  We Don’t Sell Products.<br/>
                  <span className="text-emerald-400">We Design Financial Futures.</span>
                </h3>
                <p className="text-gray-300 text-lg mb-8">At Arihant Investment, we combine:</p>
                <ul className="space-y-4 text-white">
                  {[
                    "Protection-first planning",
                    "Asset creation through real estate",
                    "Disciplined long-term investing",
                    "Family-focused financial thinking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                      <span className="font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl">
                <p className="text-2xl text-white font-medium italic leading-relaxed">
                  "So your income, family goals, and assets remain protected—through every phase of life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">A simple, 5-step process to secure your future.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "1️⃣", title: "Understand", desc: "Understand your family & financial goals." },
                { step: "2️⃣", title: "Identify Risks", desc: "Identify risks and future gaps." },
                { step: "3️⃣", title: "Design Strategy", desc: "Design E-FLAT, Secure Child, and Protection strategy." },
                { step: "4️⃣", title: "Implement", desc: "Implement with complete hand-holding." },
                { step: "5️⃣", title: "Review", desc: "Review, optimise, and realign periodically." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm text-center relative hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-5xl mb-6">{item.step}</div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5 text-center">
           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Ready to start your structured wealth strategy?</h2>
           <a
              href="https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              Discuss E-Flat Options Now
            </a>
        </div>
      </section>
    </>
  );
}
