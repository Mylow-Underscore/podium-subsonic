import { z } from "zod";

export const env = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default("Podium Subsonic"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
}).parse({}); // Pass an empty object to satisfy .parse()

export const APP_NAME = env.NEXT_PUBLIC_APP_NAME;
