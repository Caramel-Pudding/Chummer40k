import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Item } from "@prisma/client";

// POST /api/inventory/items/delete
// Required fields in body: id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Item>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: number } = req.body;

  const result = await prisma.item.delete({
    where: {
      id,
    },
  });
  res.json(result);
}
