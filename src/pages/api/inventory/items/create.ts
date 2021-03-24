import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Prisma } from "@prisma/client";

// POST /api/inventory/weapons/create
// Required fields in body: name, special, weight, avalibility
// Optional fields in body:
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Prisma.ItemCreateInput>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    name,
    special,
    weight,
    avalibility,
  }: Prisma.ItemCreateInput = req.body;

  const result = await prisma.item.create({
    data: {
      name,
      special,
      weight,
      avalibility,
    },
  });
  res.json(result);
}
