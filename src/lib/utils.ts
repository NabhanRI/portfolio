import { clsx, type ClassValue } from "clsx";

/**
 * Utility helper to conditionally merge class names
 */
export function cn(...inputs: ClassValue[]) {
   return clsx(inputs);
}