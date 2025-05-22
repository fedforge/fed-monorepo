// packages/utils/routes.ts
export const FED_TABS = ["cargo", "learn", "me", "reports", "status", "tools"] as const;
export type FEDTab = typeof FED_TABS[number];
