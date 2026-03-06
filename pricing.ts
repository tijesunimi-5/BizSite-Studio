// utils/pricing.ts
export type Currency = "USD" | "NGN";

export const PRICING_DATA = {
  starter: { USD: 79, NGN: 60000 },
  pro: { USD: 149, NGN: 120000 },
  premium: { USD: 299, NGN: 250000 },
};

export const formatPrice = (amount: number, currency: Currency) => {
  return new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
};
