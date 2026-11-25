import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpStatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  alignClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
}

const formatValue = (value: number, decimals: number) =>
  new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

export function CountUpStat({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.1,
  alignClassName = "",
  valueClassName = "",
  labelClassName = "",
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return () => controls.stop();
  }, [duration, inView, value]);

  return (
    <div ref={ref} className={alignClassName}>
      <p className={valueClassName}>
        {prefix}
        {formatValue(displayValue, decimals)}
        {suffix}
      </p>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}
