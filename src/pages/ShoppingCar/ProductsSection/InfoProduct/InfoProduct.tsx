"use client";
import React from "react";
import styles from "./InfoProduct.module.css";

export type InfoProductProps = {
  img: string;
  essenceName: string;
  sizeName: string;
  styleName: string;
};

const InfoProduct: React.FC<InfoProductProps> = ({
  img,
  essenceName,
  sizeName,
  styleName,
}) => {
  const movil = window.innerWidth < 500;

  return (
    <>
      {movil ? null : (
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      <div className={`col ${styles.info}`}>
        <p className="mini">
          {movil ? null : <b>Esencia:</b>} {essenceName}
        </p>
        <p className="mini">
          {movil ? null : <b>Tamaño:</b>} {sizeName}
        </p>
        <p className="mini">
          {movil ? null : <b>Estilo:</b>} {styleName}
        </p>
      </div>
    </>
  );
};

export default InfoProduct;
