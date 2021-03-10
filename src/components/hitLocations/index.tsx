import React, { FC, memo } from "react";
import Image from "next/image";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Race } from "@/redux/features/descriptors/consts";

import { HitLocation } from "@/redux/features/vitals/consts";
import { xPositions, yPositions } from "./consts";
import { HitBox } from "./subComponents/hitBox";
import styles from "./styles.module.css";

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
        xPosition={xPositions.center}
        yLocation={yPositions.top}
      />
      <HitBox
        location={HitLocation.LeftArm}
        xPosition={xPositions.left}
        yLocation={yPositions.center}
      />
      <HitBox
        location={HitLocation.Torso}
        xPosition={xPositions.center}
        yLocation={yPositions.center}
      />
      <HitBox
        location={HitLocation.RightArm}
        xPosition={xPositions.right}
        yLocation={yPositions.center}
      />
      <HitBox
        location={HitLocation.LeftLeg}
        xPosition={xPositions.left}
        yLocation={yPositions.bottom}
      />
      <HitBox
        location={HitLocation.RightLeg}
        xPosition={xPositions.right}
        yLocation={yPositions.bottom}
      />
    </section>
  );
});
