"use client";
import React from "react";
import styles from "./CardInfo.module.css";

export type CardInfoProps = {
  onClick: () => void;
  img: string;
  name: string;
  info: string;
};

const CardInfo: React.FC<CardInfoProps> = ({ onClick, img, name, info }) => {
  return (
    <div onClick={onClick} className={`row ${styles.cardInfo}`}>
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={`${styles.content} col`}>
        <h1>{name}</h1>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default CardInfo;
