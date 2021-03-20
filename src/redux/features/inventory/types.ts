import { HitLocation } from "@/redux/features/vitals/consts";
import { WeaponClass, Avalibility, Craftsmanship } from "./consts";

export interface Weapon {
  name: string;
  class: WeaponClass;
  range: number;
  rateOfFire?: string;
  damage: string;
  penetration: number;
  clip?: number;
  reload?: string;
  special: string;
  weight: number;
  avalibility: Avalibility;
  craftsmanship: Craftsmanship;
}

export interface Armor {
  name: string;
  locations: HitLocation[];
  AP: number;
  special: string;
  weight: number;
  avalibility: Avalibility;
  craftsmanship: Craftsmanship;
}

export interface Items {
  name: string;
  special: string;
  weight: number;
  avalibility: Avalibility;
  craftsmanship: Craftsmanship;
}
