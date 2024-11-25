"use client";
import React from "react";
import styles from "./ContentModalStyle.module.css";
import { Style } from "../../../../models/style";
import { MyButton } from "../../../../components/MyButton";

export type ContentModalStyleProps = {
  currentStyle: Style;
  onClick: () => void;
};

const ContentModalStyle: React.FC<ContentModalStyleProps> = ({
  currentStyle,
  onClick,
}) => {
  return (
    <>
      <div
        className={styles.img_modal}
        style={{ backgroundImage: `url(${currentStyle.img})` }}
      />
      <h1 className={styles.h1}>{currentStyle.name}</h1>
      <p className={styles.p}>{currentStyle.info}</p>
      <MyButton onClick={onClick}>Seleccionar</MyButton>
    </>
  );
};

export default ContentModalStyle;
