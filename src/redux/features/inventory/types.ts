import { Item, Weapon, Armor } from "@prisma/client";

export type InventoryItem = Item & Weapon & Armor;
