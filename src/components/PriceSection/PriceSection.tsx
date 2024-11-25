"use client";
import React from "react";
import styles from "./PriceSection.module.css";

type className = "" | "mini" | "special";
type flex = "col" | "row";

export type PriceSectionProps = {
  className?: className;
  flex?: flex;
  color?: string;
  details: { unitPrice: number; amount: number };
  showDetails?: boolean;
};

const PriceSection: React.FC<PriceSectionProps> = ({
  className = "",
  flex = "col",
  color = "",
  details,
  showDetails = false,
}) => {
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <div className={`${styles.price} ${flex}`} style={{ color: color }}>
      <p className={className}>
        <b>Precio:</b>
        {flex === "row" ? "\u00A0" : ""}
      </p>
      {showDetails && (
        <div className={`${styles.details} ${flex}`}>
          <p className={className}>${formatNumber(details.unitPrice)}</p>
          <p className={className}>x{formatNumber(details.amount)}</p>
          <div className={styles.hr} style={{ backgroundColor: color }} />
          {flex === "row" ? <p>=</p> : null}
        </div>
      )}
      <p className={className}>${formatNumber(details.unitPrice * details.amount)}</p>
    </div>
  );
};

export default PriceSection;
