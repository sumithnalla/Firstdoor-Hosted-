import { Property } from "@/data/properties";
import { MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const typeColors: Record<string, string> = {
  APARTMENTS: "bg-blue-500",
  VILLAS: "bg-emerald-500",
  PLOT: "bg-amber-500",
  PENTHOUSE: "bg-purple-500",
};

const stageColors: Record<string, string> = {
  "Ready to Move": "bg-green-100 text-green-700",
  "Under Construction": "bg-orange-100 text-orange-700",
  "Newly Launched": "bg-blue-100 text-blue-700",
};

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.99 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      data-testid={`card-property-${property.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 sm:h-56">
        <img
          src={property.image}
          alt={`${property.name} - ${property.type} in ${property.location}, Hyderabad`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Type badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold text-white ${typeColors[property.type] || "bg-primary"}`}>
            {property.type}
          </span>
          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[property.stage] || "bg-gray-100 text-gray-600"}`}>
            {property.stage}
          </span>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-primary/70" />
          <span>{property.location}, Hyderabad</span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors">
          {property.name}
        </h3>

        {/* Details row */}
        {property.bhk !== "-" && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 shrink-0" />
              {property.bhk} BHK
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 shrink-0" />
              {property.size}
            </span>
          </div>
        )}
        {property.bhk === "-" && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 shrink-0" />
              {property.size}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-4" />

        {/* Price & Possession */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">Starting Price</p>
            <p className="text-xl font-bold text-primary">{property.price}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-0.5">Possession</p>
            <p className="text-sm font-semibold text-foreground">{property.possession}</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="tel: 8008113094"
          className="tap-target mt-4 flex min-h-11 items-center justify-center gap-2 w-full py-2.5 rounded-2xl border border-primary/20 text-primary text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group/btn"
          data-testid={`button-enquire-${property.id}`}
        >
          Enquire Now
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
