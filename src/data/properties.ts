import rawProperties, { RawPropertyRecord } from "./newdetails";

export type PropertyType = "APARTMENTS" | "VILLAS" | "PLOT" | "PENTHOUSE";
export type PropertyStage = "Under Construction" | "Ready to Move" | "Newly Launched";

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  bhk: string;
  size: string;
  price: string;
  priceValue: number | null; // in Lakhs when known
  possession: string;
  stage: PropertyStage;
  image: string;
  totalUnits?: string;
  floors?: string;
  usp?: string;
  plotType?: string;
  areaInfo?: string;
}

const PROPERTY_TYPE_MAP = {
  APARTMENTS: "APARTMENTS",
  VILLAS: "VILLAS",
  PLOTS: "PLOT",
} as const;

const LOCATION_FIXES: Record<string, string> = {
  Hitech: "Hitech City",
  Kandkukur: "Kandukur",
  Nanakramgua: "Nanakramguda",
  "Osman Ngr/Tellapur": "Osman Nagar/Tellapur",
};

const extractNumbers = (value: string): number[] =>
  (value.match(/\d+(?:\.\d+)?/g) ?? []).map(Number);

const normalizeText = (value: string) =>
  value
    .replace(/Ã¢â€šÂ¹/g, "\u20B9")
    .replace(/â‚¹/g, "\u20B9")
    .replace(/\s+/g, " ")
    .trim();

const normalizeBhk = (record: RawPropertyRecord) => {
  if (record.type === "PLOTS") {
    return "-";
  }

  const rawBhk = normalizeText(record.bhk ?? "-");
  return rawBhk
    .replace(/bhk/gi, "")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*&\s*/g, " & ")
    .replace(/\s{2,}/g, " ")
    .trim();
};

const normalizeLocation = (location: string) => LOCATION_FIXES[location] ?? location;

const normalizeStage = (record: RawPropertyRecord): PropertyStage => {
  if (/\blaunch(?:ed)?\b/i.test(record.possession) || /\bjust launched\b/i.test(record.usp ?? "")) {
    return "Newly Launched";
  }

  return record.stage;
};

const parsePriceFromLabel = (price: string) => {
  const croreMatch = price.match(/(\d+(?:\.\d+)?)\s*cr\b/i);
  if (croreMatch) {
    return Math.round(Number(croreMatch[1]) * 100);
  }

  const lakhMatch = price.match(/(\d+(?:\.\d+)?)\s*l\b/i);
  if (lakhMatch) {
    return Math.round(Number(lakhMatch[1]));
  }

  return null;
};

const estimatePlotPriceValue = (record: RawPropertyRecord) => {
  const [plotSize] = extractNumbers(record.size);
  const [rate] = extractNumbers(record.price);

  if (!plotSize || !rate) {
    return null;
  }

  const normalizedRate = rate < 1000 ? rate * 1000 : rate;
  return Math.round((plotSize * normalizedRate) / 100000);
};

const estimateVillaPriceValue = (record: RawPropertyRecord) => {
  const parentheticalMatch = record.price.match(/\((\d+(?:\.\d+)?)\)/);
  if (parentheticalMatch) {
    const totalInCrores = Number(parentheticalMatch[1]);
    if (totalInCrores > 0 && totalInCrores <= 25) {
      return Math.round(totalInCrores * 100);
    }
  }

  const [rate] = extractNumbers(record.price);
  const sizeValues = extractNumbers(record.size);
  const builtUpArea = sizeValues[1] ?? sizeValues[0];

  if (!rate || !builtUpArea) {
    return null;
  }

  const normalizedRate = rate < 1000 ? rate * 1000 : rate;
  return Math.round((builtUpArea * normalizedRate) / 100000);
};

const derivePriceValue = (record: RawPropertyRecord, type: PropertyType, priceLabel: string) => {
  if (typeof record.priceValue === "number" && Number.isFinite(record.priceValue)) {
    return record.priceValue;
  }

  const parsedLabelValue = parsePriceFromLabel(priceLabel);
  if (parsedLabelValue !== null) {
    return parsedLabelValue;
  }

  const [firstNumber] = extractNumbers(priceLabel);

  if (type === "APARTMENTS" && firstNumber && firstNumber <= 25) {
    return Math.round(firstNumber * 100);
  }

  if (type === "PLOT") {
    return estimatePlotPriceValue(record);
  }

  if (type === "VILLAS") {
    const villaValue = estimateVillaPriceValue(record);
    if (villaValue !== null) {
      return villaValue;
    }

    if (firstNumber && firstNumber <= 25) {
      return Math.round(firstNumber * 100);
    }
  }

  return null;
};

const normalizeProperty = (record: RawPropertyRecord): Property => {
  const type = PROPERTY_TYPE_MAP[record.type];
  const price = normalizeText(record.price);

  return {
    id: record.id,
    name: normalizeText(record.name),
    type,
    location: normalizeLocation(normalizeText(record.location)),
    bhk: normalizeBhk(record),
    size: normalizeText(record.size),
    price,
    priceValue: derivePriceValue(record, type, price),
    possession: normalizeText(record.possession),
    stage: normalizeStage(record),
    image: record.image,
    totalUnits: record.totalUnits,
    floors: record.floors,
    usp: record.usp,
    plotType: record.plotType,
    areaInfo: record.areaInfo,
  };
};

export const properties: Property[] = rawProperties.map(normalizeProperty);

export const availablePropertyTypes: PropertyType[] = Array.from(
  new Set(properties.map((property) => property.type)),
);
export const availableStages: PropertyStage[] = Array.from(
  new Set(properties.map((property) => property.stage)),
);
