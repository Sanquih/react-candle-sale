"use client";
import React from "react";
import styles from "./EssencesSection.module.css";
import { MiniCard } from "./MiniCard";
import { Essence } from "../../../../models/essence";

export type EssencesSectionProps = {
  onMouseEnter: (e: Essence) => void;
  onClick: (e: Essence) => void;
  currentEssence: Essence;
  essences: Essence[];
};

const EssencesSection: React.FC<EssencesSectionProps> = ({
  onMouseEnter,
  onClick,
  currentEssence,
  essences,
}) => {
  return (
    <div className={styles.essences}>
      {essences.map((e) => (
        <MiniCard
          key={e.id}
          onMouseEnter={() => onMouseEnter(e)}
          onClick={() => onClick(e)}
          selected={currentEssence.id == e.id}
          essence={e}
        />
      ))}
    </div>
  );
};

export default EssencesSection;
