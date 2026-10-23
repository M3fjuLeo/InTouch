// Oferta zgodna z systemem rezerwacji Timma. Teksty zabiegów są w messages/*.json (OfferPage.services).

export type ServiceCategory = "firstTime" | "fullBody" | "focused" | "pregnancy";
export type ServiceBadge = "recommended" | "mostChosen";

export interface Service {
  id: string;
  category: ServiceCategory;
  duration: number;
  consultation?: number;
  price: number;
  badge?: ServiceBadge;
}

export const serviceCategories: ServiceCategory[] = [
  "firstTime",
  "fullBody",
  "focused",
  "pregnancy",
];

export const services: Service[] = [
  { id: "start-deep-unwind", category: "firstTime", duration: 75, consultation: 15, price: 1595, badge: "recommended" },
  { id: "start-here", category: "firstTime", duration: 50, consultation: 15, price: 1095 },
  { id: "deep-unwind", category: "fullBody", duration: 75, price: 1595, badge: "mostChosen" },
  { id: "total-immersion", category: "fullBody", duration: 100, price: 1895 },
  { id: "tailored", category: "fullBody", duration: 50, price: 1095 },
  { id: "drop-shoulders", category: "focused", duration: 50, price: 1095 },
  { id: "quiet-mind", category: "focused", duration: 50, price: 1095 },
  { id: "focus", category: "focused", duration: 25, price: 595 },
  { id: "pregnancy-deep-unwind", category: "pregnancy", duration: 75, price: 1595 },
  { id: "pregnancy", category: "pregnancy", duration: 50, price: 1095 },
];

// Zabiegi wyróżnione w sekcji na stronie głównej.
export const featuredServices = [
  { id: "start-here", image: "/images/services/start-here.jpg" },
  { id: "deep-unwind", image: "/images/services/deep-unwind.jpg" },
  { id: "drop-shoulders", image: "/images/services/drop-shoulders.jpg" },
  { id: "pregnancy", image: "/images/services/pregnancy.jpg" },
];

export function getService(id: string): Service {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}

export function formatPrice(price: number): string {
  return `${new Intl.NumberFormat("nb-NO").format(price)} kr`;
}
