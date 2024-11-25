"use client";
import React from "react";
import styles from "./SizesSection.module.css";
import { Size } from "../../../../models/size";
import { SizesImg } from "./SizesImg";

export type SizesSectionProps = {
  currentSize: Size;
  onMouseEnter: (s: Size) => void;
  onClick: (s: Size) => void;
  sizes: Size[]
};

const SizesSection: React.FC<SizesSectionProps> = ({
  currentSize,
  onMouseEnter,
  onClick,
  sizes
}) => {
  const sortedSizes = sizes.sort((a, b) => b.height - a.height);

  return (
    <div className={`${styles.sizes} row`}>
      {sortedSizes.map((s, i) => (
        <SizesImg
          key={s.id}
          size={s}
          selected={s.id == currentSize.id}
          onMouseEnter={() => onMouseEnter(s)}
          onClick={() => onClick(s)}
          index={i}
        />
      ))}
    </div>
  );
};

export default SizesSection;
