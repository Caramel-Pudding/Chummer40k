import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Armor } from "@prisma/client";

// POST /api/inventory/armor/delete
// Required fields in body: id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Armor>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: number } = req.body;

  const result = await prisma.armor.delete({
    where: {
      id,
    },
  });
  res.json(result);
}
