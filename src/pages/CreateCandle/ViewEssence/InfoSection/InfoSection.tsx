"use client";
import React from "react";
import styles from "./InfoSection.module.css";
import { Essence } from "../../../../models/essence";
import { MyButton } from "../../../../components/MyButton";

export type InfoSectionProps = {
  currentEssence: Essence;
  onClick: () => void;
};

const InfoSection: React.FC<InfoSectionProps> = ({
  currentEssence,
  onClick,
}) => {
  return (
    <div className={`${styles.content} col h100`}>
      <h1>{currentEssence.name}</h1>
      <img src={currentEssence.img} alt={currentEssence.name} />
      <p className={styles.special}>{currentEssence.info}</p>
      {window.innerWidth < 500 ? (
        <MyButton onClick={onClick} className={styles.btn}>
          Seleccionar
        </MyButton>
      ) : null}
    </div>
  );
};

export default InfoSection;
