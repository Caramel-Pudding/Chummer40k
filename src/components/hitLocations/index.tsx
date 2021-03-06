import React, { FC, memo } from "react";
import Image from "next/image";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Race } from "@/redux/features/descriptors/consts";

import { HitLocation, xPositions, yPositions } from "./consts";
import { HitBox } from "./subComponents/hitBox";
import styles from "./hitLocations.module.css";

export const HitLocations: FC = memo(() => {
  const race = useAppSelector((state) => state.descriptors.race.name);

  return (
    <section className={styles.hitLocationsWrapper}>
      <Image
        alt="Anatomy"
        height={300}
        src={
          race === Race.ChaosSpaceMarine
            ? "/images/astartesAnatomy.png"
            : "/images/humanAnatomy.jpg"
        }
        width={175}
      />
      <HitBox
        location={HitLocation.Head}
        position={classnames(xPositions.center, yPositions.top)}
      />
      <HitBox
        location={HitLocation.LeftArm}
        position={classnames(xPositions.left, yPositions.center)}
      />
      <HitBox
        location={HitLocation.Torso}
        position={classnames(xPositions.center, yPositions.center)}
      />
      <HitBox
        location={HitLocation.RightArm}
        position={classnames(xPositions.right, yPositions.center)}
      />
      <HitBox
        location={HitLocation.LeftLeg}
        position={classnames(xPositions.left, yPositions.bottom)}
      />
      <HitBox
        location={HitLocation.RightLeg}
        position={classnames(xPositions.right, yPositions.bottom)}
      />
    </section>
  );
});
