// Podział pytań z messages/*.json (FaqPage.faqs) na kategorie, według ich id.
export const faqCategories = [
  { id: "booking", questionIds: ["1", "2", "3", "20", "21", "22"] },
  { id: "before", questionIds: ["4", "5", "6", "12"] },
  { id: "during", questionIds: ["7", "8", "9", "10", "11"] },
  { id: "health", questionIds: ["13", "14", "15", "16"] },
  { id: "after", questionIds: ["17", "18", "19"] },
] as const;

export type FaqCategoryId = (typeof faqCategories)[number]["id"];
