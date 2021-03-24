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
    "Craft.",
  ],
  [ItemType.Armor]: ["Name", "Loc.", "AP", "Spc.", "Wt.", "Av.", "Craft."],
  [ItemType.Items]: ["Name", "Spc.", "Wt.", "Av.", "Craft."],
};
