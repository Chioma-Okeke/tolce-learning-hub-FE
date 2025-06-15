import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const splitSentence = (sentence: string, symbol: string) => {
    const [topic, rest] = sentence.split(symbol)
    return {topic, rest}
}
