export const queryKeys = {
  user: {
    all: ["user"] as const,
    profile: () => [...queryKeys.user.all, "profile"] as const,
    settings: () => [...queryKeys.user.all, "settings"] as const,
  },
  summary: {
    all: ["summary"] as const,
    list: () => [...queryKeys.summary.all, "list"] as const,
  },
} as const;
