import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Armor } from "@prisma/client";

// POST /api/inventory/armor/create
// Required fields in body: name, special, weight, avalibility, AP, locations
// Optional fields in body:
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Armor>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, special, weight, avalibility, AP, locations }: Armor = req.body;

  const result = await prisma.armor.create({
    data: {
      name,
      special,
      weight,
      avalibility,
      AP,
      locations,
    },
  });
  res.json(result);
}
