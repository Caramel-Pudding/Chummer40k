import { ItemType } from "@/redux/features/inventory/consts";

export const tableHeaders = {
  [ItemType.Weapons]: [
    "Name",
    "Class",
    "Range",
    "RoF",
    "Dam.",
    "Pen.",
    "Clip",
    "Rld.",
    "Spc.",
    "Wt.",
    "Av.",
    "Craf.",
  ],
  [ItemType.Armor]: ["Name", "Loc.", "AP", "Spc.", "Wt.", "Av.", "Craf."],
  [ItemType.Other]: ["Name", "Spc.", "Wt.", "Av.", "Craf."],
};
