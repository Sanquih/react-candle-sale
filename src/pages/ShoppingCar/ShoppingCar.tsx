"use client";
import React from "react";
import { ProductsSection } from "./ProductsSection";
import { ResumeSection } from "./ResumeSection";
import styles from "./ShoppingCar.module.css";

export type ShoppingCarProps = {
  // types...
};

const ShoppingCar: React.FC<ShoppingCarProps> = ({}) => {

  return (
    <div className={`${styles.shoppingcar} content row w100 h100`}>
      <ProductsSection />
      <ResumeSection />
    </div>
  );
};

export default ShoppingCar;
