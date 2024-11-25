"use client";
import React from "react";
import styles from "./Gallery.module.css";
import { Style } from "../../../../models/style";
import { StyleImg } from "./StyleImg";

export type GalleryProps = {
  onClick: (s: Style) => void;
  currentStyle: Style;
  myStyles: Style[]
};

const Gallery: React.FC<GalleryProps> = ({ onClick, currentStyle, myStyles }) => {
  return (
    <div className={styles.viewstyle}>
      {myStyles.map((s) => (
        <StyleImg
          key={s.id}
          onClick={() => onClick(s)}
          selected={s.id == currentStyle.id}
          style={s}
        />
      ))}
    </div>
  );
};

export default Gallery;
