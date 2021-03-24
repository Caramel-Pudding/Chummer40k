import { ItemType } from "@/redux/features/inventory/consts";

export const apiBaseRoute = "api";

export const buildApiRoute = (routeParts: string[]): string =>
  [apiBaseRoute, ...routeParts].join("/");

export const buildInventoryRoute = (itemType: ItemType): string =>
  `inventory/${itemType}`;

export enum ApiActions {
  Create = "create",
  GetAll = "get-all",
  Delete = "delete",
}
