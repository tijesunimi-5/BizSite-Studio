"use client";
import { useSearchParams } from "next/navigation";

export interface DemoData {
  brand: string;
  city: string;
  service: string;
  instagram: string;
  isPersonalized: boolean;
}

export const useDemoPreview = (defaults: Partial<DemoData>): DemoData => {
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand") || defaults.brand || "Your Brand";
  const city = searchParams.get("city") || defaults.city || "Your City";
  const service =
    searchParams.get("service") || defaults.service || "Main Service";
  const instagram =
    searchParams.get("instagram") || defaults.instagram || "instagram_handle";

  // If at least brand is in URL, we consider it personalized
  const isPersonalized = searchParams.has("brand");

  return { brand, city, service, instagram, isPersonalized };
};
