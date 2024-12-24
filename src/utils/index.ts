import clsx from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const wait = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms))

export const cn = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(...inputs))
}
