"use client";
import React from "react";
import styles from "./ListProducts.module.css";
import { Candle } from "../../../../models/candle";

export type ListProductsProps = {
  candles: (Candle & { amount: number })[];
};

const ListProducts: React.FC<ListProductsProps> = ({candles}) => {
  return (
    <ol className={styles.listproducts}>
      {candles.map((candle) => (
        <li className="mini">
          {`${candle.essence.name} - ${candle.size.name} - ${candle.style.name}`}
          <b>{` x ${candle.amount}`}</b>
        </li>
      ))}
    </ol>
  );
};

export default ListProducts;
