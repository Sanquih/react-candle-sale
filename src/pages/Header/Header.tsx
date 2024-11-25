"use client";
import React from "react";
import styles from "./Header.module.css";
import { ShoppingCartBtn } from "./ShoppingCartBtn";
import { Stepper } from "./Stepper";
import { HomeBtn } from "./HomeBtn";

export type HeaderProps = {
  // types...
};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={`${styles.header} row`}>
      <HomeBtn />
      <Stepper />
      <ShoppingCartBtn />
    </div>
  );
};

export default Header;
