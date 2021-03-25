import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Weapon } from "@prisma/client";

// GET /api/inventory/armor/get-all
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Weapon[]>
): Promise<void> {
  const result = await prisma.weapon.findMany();
  res.json(result);
}
