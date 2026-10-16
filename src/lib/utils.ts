import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional logic via clsx.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
