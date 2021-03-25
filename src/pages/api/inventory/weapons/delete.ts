import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Weapon } from "@prisma/client";

// POST /api/inventory/weapons/delete
// Required fields in body: id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Weapon>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: number } = req.body;

  const result = await prisma.weapon.delete({
    where: {
      id,
    },
  });
  res.json(result);
}
