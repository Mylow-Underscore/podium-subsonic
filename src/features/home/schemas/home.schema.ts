import { z } from "zod";

export const HomeSchema = z.object({
  title: z.string(),
  description: z.string(),
  heroMessage: z.string(),
  ctaText: z.string(),
});

export type HomeData = z.infer<typeof HomeSchema>;
