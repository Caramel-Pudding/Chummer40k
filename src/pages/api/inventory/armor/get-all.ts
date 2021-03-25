import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Armor } from "@prisma/client";

// GET /api/inventory/armor/get-all
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Armor[]>
): Promise<void> {
  const result = await prisma.armor.findMany();
  res.json(result);
}
