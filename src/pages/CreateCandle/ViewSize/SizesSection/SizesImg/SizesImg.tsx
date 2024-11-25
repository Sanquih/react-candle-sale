"use client";
import React from "react";
import styles from "./SizesImg.module.css";
import { Size } from "../../../../../models/size";
import { sizes } from "../../../../../data/sizes";

export type SizesImgProps = {
  size: Size;
  selected: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  index: number;
};

const SizesImg: React.FC<SizesImgProps> = ({
  size,
  selected,
  onMouseEnter,
  onClick,
  index,
}) => {
  return (
    <div
      key={size.id}
      className={`${styles.size} col ${selected ? `${styles.selected}` : ""}`}
    >
      <img
        onMouseEnter={onMouseEnter}
        onClick={window.innerWidth < 500 ? () => {} : onClick}
        src={size.img}
        alt={size.name}
        height={`${(90 / sizes.length) * (sizes.length - index)}%`}
        className={selected ? `headShake` : ""}
      />
    </div>
  );
};

export default SizesImg;
