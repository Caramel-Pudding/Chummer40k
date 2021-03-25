import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";
import { Prisma, Weapon } from "@prisma/client";

// POST /api/inventory/weapons/create
// Required fields in body: name, special, weight, avalibility, weaponClass, damage, damageType, penetration, range, rateOfFire, reload
// Optional fields in body:
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Weapon>
): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    name,
    special,
    weight,
    avalibility,
    weaponClass,
    damage,
    damageType,
    penetration,
    range,
    rateOfFire,
    reload,
  }: Prisma.WeaponCreateInput = req.body;

  const result = await prisma.weapon.create({
    data: {
      name,
      special,
      weight,
      avalibility,
      weaponClass,
      damage,
      damageType,
      penetration,
      range,
      rateOfFire,
      reload,
    },
  });
  res.json(result);
}
