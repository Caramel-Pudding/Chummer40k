import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Item } from "@prisma/client";

// POST /api/inventory/weapons/create
// Required fields in body: name, special, weight, avalibility
// Optional fields in body:
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
): Promise<void> {
  const result = await prisma.item.findMany();
  res.json(result);
}
