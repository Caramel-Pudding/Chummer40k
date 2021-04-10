import { ItemType } from "@/redux/features/inventory/consts";

export const tableHeaders = {
  [ItemType.Weapons]: [
    "Name",
    "Class",
    "Dam.",
    "Pen.",
    "Range",
    "RoF",
    "Clip",
    "Rld.",
    "Spc.",
    "Wt.",
    "Av.",
    "Craft.",
  ],
  [ItemType.Armor]: ["Name", "AP", "Loc.", "Spc.", "Wt.", "Av.", "Craft."],
  [ItemType.Items]: ["Name", "Spc.", "Wt.", "Av.", "Craft."],
};
