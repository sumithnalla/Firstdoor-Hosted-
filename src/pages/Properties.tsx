import { useEffect, useMemo, useState } from "react";
import { SEO } from "@/components/seo";
import { PropertyCard } from "@/components/PropertyCard";
import { availablePropertyTypes, availableStages, properties, PropertyType } from "@/data/properties";
import { Search, SlidersHorizontal, X, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CommercialCard } from "@/components/CommercialCard";
import { commercials } from "@/data/commercial";

const BUDGET_OPTIONS = [
  { label: "All Budgets", value: "ALL" },
  { label: "Under \u20B950L", value: "0-50L" },
  { label: "\u20B950L - \u20B970L", value: "50-70L" },
  { label: "\u20B970L - \u20B91Cr", value: "70L-1Cr" },
  { label: "\u20B91Cr - \u20B91.5Cr", value: "1Cr-1.5Cr" },
  { label: "Above \u20B91.5Cr", value: "1.5Cr+" },
];

const BHK_OPTIONS = ["ALL", "1", "2", "3", "4", "5", "6"];
const ITEMS_PER_PAGE = 9;
const PROPERTY_LABELS: Record<PropertyType, string> = {
  APARTMENTS: "Apartments",
  VILLAS: "Villas",
  PLOT: "Plots",
  PENTHOUSE: "Penthouses",
};

type Tab = "ALL" | PropertyType;

const STAGES = ["ALL", ...availableStages];
const TABS: { label: string; value: Tab }[] = [{ label: "All Properties", value: "ALL" }].concat(
  availablePropertyTypes.map((type) => ({
    label: PROPERTY_LABELS[type],
    value: type,
  })),
);

export default function Properties() {
  const [activeTab, setActiveTab] = useState<Tab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("ALL");
  const [bhkFilter, setBhkFilter] = useState("ALL");
  const [stageFilter, setStageFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const isPlot = activeTab === "PLOT";
  const isAll = activeTab === "ALL";
  const showAdvancedFilters = !isAll && !isPlot;
  const showBudgetFilter = showAdvancedFilters;

  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return properties.filter((property) => {
      if (activeTab !== "ALL" && property.type !== activeTab) return false;
      if (query && !property.name.toLowerCase().includes(query) && !property.location.toLowerCase().includes(query)) return false;

      if (showBudgetFilter && budgetFilter !== "ALL") {
        const priceValue = property.priceValue;
        if (priceValue === null) return false;
        if (budgetFilter === "0-50L" && priceValue > 50) return false;
        if (budgetFilter === "50-70L" && (priceValue <= 50 || priceValue > 70)) return false;
        if (budgetFilter === "70L-1Cr" && (priceValue <= 70 || priceValue > 100)) return false;
        if (budgetFilter === "1Cr-1.5Cr" && (priceValue <= 100 || priceValue > 150)) return false;
        if (budgetFilter === "1.5Cr+" && priceValue <= 150) return false;
      }

      if (!isPlot && !isAll && bhkFilter !== "ALL" && !property.bhk.includes(bhkFilter)) return false;
      if (!isPlot && !isAll && stageFilter !== "ALL" && property.stage !== stageFilter) return false;
      return true;
    });
  }, [activeTab, bhkFilter, budgetFilter, isAll, isPlot, searchQuery, showBudgetFilter, stageFilter]);

  const [mainView, setMainView] = useState<"PROPERTIES" | "COMMERCIAL">("PROPERTIES");

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeTab, searchQuery, budgetFilter, bhkFilter, stageFilter, mainView]);

  const visibleProperties = filtered.slice(0, visibleCount);
  const hasMoreProperties = visibleCount < filtered.length;

  const clearFilters = () => {
    setSearchQuery("");
    setBudgetFilter("ALL");
    setBhkFilter("ALL");
    setStageFilter("ALL");
  };

  const hasFilters =
    Boolean(searchQuery) ||
    (showBudgetFilter && budgetFilter !== "ALL") ||
    (showAdvancedFilters && bhkFilter !== "ALL") ||
    (showAdvancedFilters && stageFilter !== "ALL");

  return (
    <>
      <SEO
        title="Properties in Hyderabad | FirstDoor Real Estate"
        description="Browse real client property listings in Hyderabad. Find apartments, villas, and plots across Neopolis, Financial District, Kokapet, Tellapur and more."
      />

      {/* Hero / Filter header */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-12 relative overflow-hidden" style={{ background: "#0c1f33" }}>
        <div className="absolute inset-0">
          <img src="/properties.jpg" alt="" aria-hidden className="w-full h-full object-cover opacity-28" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, rgba(7,22,37,0.92) 0%, rgba(12,31,51,0.78) 48%, rgba(12,31,51,0.35) 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="fluid-display font-bold text-white mb-3">
                Discover Your Next Property
              </h1>
              <p className="text-white/60 text-base sm:text-lg max-w-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Explore real client inventory across Hyderabad's fastest-moving micro-markets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative max-w-xl mx-auto lg:ml-auto lg:mr-0 w-full"
            >
              <div className="rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <img src="/properties.jpg" alt="Premium property showcase in Hyderabad" className="w-full h-[280px] sm:h-[340px] object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Search bar */}
          <div className="relative max-w-xl z-10 mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="search"
              placeholder="Search by project name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/14 border border-white/20 text-white placeholder:text-white/45 text-sm outline-none focus:ring-2 focus:ring-white/25 focus:border-white/35 transition-all backdrop-blur-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="input-search"
            />
          </div>
          
          {/* Main View Tabs */}
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide z-10 relative">
            {[
              { id: "PROPERTIES", label: "Properties" },
              { id: "COMMERCIAL", label: "Commercial" },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setMainView(view.id as any)}
                className={`whitespace-nowrap px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  mainView === view.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8 sm:mt-12">
        {mainView === "PROPERTIES" ? (
          <>
            {/* Floating filter card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-border p-3 sm:p-4 mb-5 sm:mb-7">
              {/* Type Tabs */}
              <div className={`flex flex-wrap gap-2 ${showAdvancedFilters ? "mb-4 sm:mb-5" : ""}`}>
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setBudgetFilter("ALL");
                  setBhkFilter("ALL");
                  setStageFilter("ALL");
                }}
                className={`tap-target min-h-11 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.value
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-50 text-foreground/60 hover:bg-gray-100 hover:text-foreground"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid={`tab-${tab.value.toLowerCase()}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Filters */}
          <AnimatePresence mode="wait">
            {showAdvancedFilters && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Budget</label>
                  <select
                    value={budgetFilter}
                    onChange={(e) => setBudgetFilter(e.target.value)}
                    className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all cursor-pointer"
                    data-testid="select-budget"
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">BHK</label>
                  <div className="flex gap-2 flex-wrap">
                    {BHK_OPTIONS.map((bhk) => (
                      <button
                        key={bhk}
                        onClick={() => setBhkFilter(bhk)}
                        className={`tap-target min-h-11 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                          bhkFilter === bhk
                            ? "bg-primary text-white"
                            : "bg-gray-50 text-foreground/60 hover:bg-gray-100"
                        }`}
                        data-testid={`filter-bhk-${bhk}`}
                      >
                        {bhk === "ALL" ? "Any" : `${bhk} BHK`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stage</label>
                  <div className="flex gap-2 flex-wrap">
                    {STAGES.map((stage) => (
                      <button
                        key={stage}
                        onClick={() => setStageFilter(stage)}
                        className={`tap-target min-h-11 px-3.5 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                          stageFilter === stage
                            ? "bg-primary text-white"
                            : "bg-gray-50 text-foreground/60 hover:bg-gray-100"
                        }`}
                        data-testid={`filter-stage-${stage.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {stage === "ALL" ? "All Stages" : stage}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={clearFilters}
                  disabled={!hasFilters}
                  className={`tap-target ml-auto flex min-h-11 items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    hasFilters
                      ? "text-foreground/70 hover:text-foreground hover:bg-gray-100 cursor-pointer"
                      : "text-muted-foreground/40 cursor-not-allowed"
                  }`}
                  data-testid="button-clear-filters"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{Math.min(visibleCount, filtered.length)}</span> of <span className="font-semibold text-foreground">{filtered.length}</span> {filtered.length === 1 ? "property" : "properties"}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Sorted by relevance
          </div>
        </div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeTab + budgetFilter + bhkFilter + stageFilter + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </div>

              {hasMoreProperties && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() =>
                      setVisibleCount((count) =>
                        Math.min(count + ITEMS_PER_PAGE, filtered.length),
                      )
                    }
                    className="tap-target min-h-11 rounded-2xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
                    data-testid="button-load-more-properties"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Load More
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 mb-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground text-sm mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-2xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-8 sm:py-12"
          >
            {/* The Investor's Compass */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  The Investor's Compass
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Invest in Commercial Real Estate?
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  A high-level educational guide to help you choose between residential and commercial assets. Commercial property is a strategic choice for serious investors seeking predictable, long-term cash flow and portfolio diversification.
                </p>
              </div>

              {/* Premium Comparison Table */}
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl -z-10" />
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <thead>
                        <tr>
                          <th className="py-6 px-6 sm:px-8 font-bold text-foreground/50 text-xs uppercase tracking-widest bg-white border-b border-gray-100">Investment Feature</th>
                          <th className="py-6 px-6 sm:px-8 font-bold text-foreground text-sm uppercase tracking-wider bg-gray-50/50 border-b border-gray-100">Residential Property</th>
                          <th className="py-6 px-6 sm:px-8 font-bold text-white text-sm uppercase tracking-wider bg-primary border-b border-primary/20 shadow-inner">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                              Commercial Property
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="group transition-colors">
                          <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">Rental Yields</td>
                          <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">3–5% typically</td>
                          <td className="py-5 px-6 sm:px-8 font-bold text-primary bg-primary/5 border-b border-primary/10">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                              6–10% higher returns
                            </div>
                          </td>
                        </tr>
                        <tr className="group transition-colors">
                          <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">Lease Terms</td>
                          <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">11 months – 1 year</td>
                          <td className="py-5 px-6 sm:px-8 font-bold text-primary bg-primary/5 border-b border-primary/10">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary shrink-0 opacity-0" />
                              3–10 years (Long term)
                            </div>
                          </td>
                        </tr>
                        <tr className="group transition-colors">
                          <td className="py-5 px-6 sm:px-8 font-semibold text-foreground border-b border-gray-50">Tenant Stability</td>
                          <td className="py-5 px-6 sm:px-8 text-muted-foreground border-b border-gray-50 bg-gray-50/30">Lower (Frequent changes)</td>
                          <td className="py-5 px-6 sm:px-8 font-bold text-primary bg-primary/5 border-b border-primary/10">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary shrink-0 opacity-0" />
                              Higher (Business tenants)
                            </div>
                          </td>
                        </tr>
                        <tr className="group transition-colors">
                          <td className="py-5 px-6 sm:px-8 font-semibold text-foreground">Market Sensitivity</td>
                          <td className="py-5 px-6 sm:px-8 text-muted-foreground bg-gray-50/30">High (Consumer-driven)</td>
                          <td className="py-5 px-6 sm:px-8 font-bold text-primary bg-primary/5 rounded-br-2xl">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary shrink-0 opacity-0" />
                              Low (Resilient asset class)
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Performance Portfolio Gallery */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">High-Performance Portfolio</h3>
                  <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Premium commercial spaces across Hyderabad</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercials.map((property, index) => (
                  <CommercialCard key={`comm-page-${index}`} property={property} index={index} />
                ))}
              </div>
            </div>

            {/* Market Growth & Connectivity Hub */}
            <div className="bg-[#0c1f33] rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Market Growth & Connectivity</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Building trust is critical in commercial real estate. Our expertise in the Hyderabad market ensures you invest in locations poised for immense growth.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-white/10 p-2 rounded-lg"><Building2 className="w-4 h-4 text-primary" /></div>
                      <div>
                        <strong className="block text-sm">Strategic Locations</strong>
                        <span className="text-white/60 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Proximity to major IT corridors and business hubs like Neopolis.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-white/10 p-2 rounded-lg"><TrendingUp className="w-4 h-4 text-primary" /></div>
                      <div>
                        <strong className="block text-sm">Market Trends</strong>
                        <span className="text-white/60 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ongoing infrastructure projects validating high appreciation potential.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-white/10 p-2 rounded-lg"><ShieldCheck className="w-4 h-4 text-primary" /></div>
                      <div>
                        <strong className="block text-sm">Verified Social Proof</strong>
                        <span className="text-white/60 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Track record of successful commercial deals in the region.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <img src="/color.jpeg" alt="Hyderabad Commercial Real Estate" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </div>
    </>
  );
}
