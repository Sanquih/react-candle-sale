"use client";
import React from "react";
import styles from "./ShoppingCartBtn.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";

export type ShoppingCartBtnProps = {
  // types...
};

const ShoppingCartBtn: React.FC<ShoppingCartBtnProps> = ({}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const candles = useSelector((state: RootState) => state.candles);
  
  if (pathname !== "/shoppingcar") {
    return (
      <div className={`${styles.shopping_cart} row`}>
        {candles.length > 0 ? (
          <div className={`${styles.shoppingcarOn} row`}>{candles.length}</div>
        ) : null}
        <img
          onClick={() => navigate("/shoppingcar")}
          src="/imgs/shopping_cart.png"
          alt="Icon"
        />
      </div>
    );
  }
  return null;
};

export default ShoppingCartBtn;
