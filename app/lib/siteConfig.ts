export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface OpeningHours {
  day: Weekday;
  opens: string;
  closes: string;
}

export const siteConfig = {
  name: "In Touch Massasjeterapi",
  shortName: "In Touch",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  author: {
    name: "Mateusz Ropek",
    url: "https://www.linkedin.com/in/mateusz-ropek-45b782258/",
  },
  openingHours: [
    { day: "mon", opens: "09:00", closes: "20:00" },
    { day: "tue", opens: "09:00", closes: "20:00" },
    { day: "wed", opens: "09:00", closes: "20:00" },
    { day: "thu", opens: "09:00", closes: "20:00" },
    { day: "fri", opens: "09:00", closes: "20:00" },
    { day: "sat", opens: "09:00", closes: "20:00" },
    { day: "sun", opens: "10:00", closes: "20:00" },
  ] satisfies OpeningHours[],
};
