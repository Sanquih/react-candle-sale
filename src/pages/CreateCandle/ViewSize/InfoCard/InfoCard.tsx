"use client";
import React from "react";
import styles from "./InfoCard.module.css";
import { RxCircleBackslash, RxLineHeight, RxTimer } from "react-icons/rx";
import { LiaWeightSolid } from "react-icons/lia";
import { MyButton } from "../../../../components/MyButton";
import { Size } from "../../../../models/size";

export type InfoCardProps = {
  currentSize: Size;
  onClick: () => void;
};

const InfoCard: React.FC<InfoCardProps> = ({ currentSize, onClick }) => {
  return (
    <div className={styles.infos}>
      <h1>{currentSize.name}</h1>
      <div className={`${styles.info} col`}>
        <div className="row">
          <RxLineHeight />
          <p>
            <b>Altura:</b> {currentSize.height} cm
          </p>
        </div>
        <div className="row">
          <RxCircleBackslash />
          <p>
            <b>Diametro:</b> {currentSize.diameter} cm
          </p>
        </div>
        <div className="row">
          <LiaWeightSolid />
          <p>
            <b>Peso:</b> {currentSize.weight} gr
          </p>
        </div>
        <div className="row">
          <RxTimer />
          <p>
            <b>Tiempo de vida:</b> {currentSize.liveTime} horas
          </p>
        </div>
        {window.innerWidth < 500 ? (
          <MyButton
            onClick={onClick}
            className={styles.btn}
          >
            Seleccionar
          </MyButton>
        ) : null}
      </div>
    </div>
  );
};

export default InfoCard;
