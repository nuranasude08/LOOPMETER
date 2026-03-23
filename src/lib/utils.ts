import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'deposit' | 'reward' | 'donation';
  icon: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  cost: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export interface Machine {
  id: string;
  name: string;
  address: string;
  distance: string;
  status: 'available' | 'full' | 'maintenance';
  fillLevels: {
    plastic: number;
    metal: number;
    paper: number;
    glass: number;
  };
  lat: number;
  lng: number;
}
