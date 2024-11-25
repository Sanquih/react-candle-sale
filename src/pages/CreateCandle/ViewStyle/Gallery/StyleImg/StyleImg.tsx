"use client";
import React from "react";
import styles from "./StyleImg.module.css";
import { Style } from "../../../../../models/style";

export type StyleImgProps = {
  onClick: () => void;
  style: Style;
  selected: boolean;
};

const StyleImg: React.FC<StyleImgProps> = ({ onClick, style, selected }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${style.img})` }}
      className={`${styles.img} ${selected ? `selected headShake` : ""}`}
    />
  );
};

export default StyleImg;
