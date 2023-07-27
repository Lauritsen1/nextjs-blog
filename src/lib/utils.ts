import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateInitials = (
  firstName: string | null | undefined,
  lastName: string | null | undefined
) => {
  const firstInitial = (firstName ?? '').charAt(0).toUpperCase()
  const lastInitial = (lastName ?? '').charAt(0).toUpperCase()

  return firstInitial + lastInitial
}
