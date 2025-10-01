export const CATS = ["tous", "flash", "grosse pièces", "autre"] as const;
export type Cat = (typeof CATS)[number];
