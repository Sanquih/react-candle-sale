"use client";
import React from "react";
import styles from "./MiniCard.module.css";
import { Essence } from "../../../../../models/essence";

export type MiniCardProps = {
  onMouseEnter: () => void;
  onClick: () => void;
  selected: boolean;
  essence: Essence;
};

const MiniCard: React.FC<MiniCardProps> = ({
  onMouseEnter,
  onClick,
  selected,
  essence,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={window.innerWidth < 500 ? () => {} : onClick}
      className={`${selected ? `selected headShake` : ""} ${
        styles.essence
      } row w100`}
    >
      <p>{essence.name}</p>
      <div className={`${styles.img} row`}>
        <img src={essence.icon} alt={essence.name} />
      </div>
    </div>
  );
};

export default MiniCard;
