"use client";
import React from "react";
import styles from "./ProductsSection.module.css";
import { Candle } from "../../../models/candle";
import { InfoProduct } from "./InfoProduct";
import { EditAmountCandle } from "./EditAmountCandle";
import { BtnSection } from "./BtnSection";
import { PriceSection } from "../../../components/PriceSection";
import { useDispatch, useSelector } from "react-redux";
import { removeCandleById } from "../../../store/features/canldesSlice";
import { setCurrentCandle } from "../../../store/features/currentCandleSlice";
import { useNavigate } from "react-router-dom";
import useNewCandle from "../../../hooks/useNewCandle";
import { MyButton } from "../../../components/MyButton";
import { FaPlus } from "react-icons/fa6";
import { RootState } from "../../../store";

export type ProductsSectionProps = {};

const ProductsSection: React.FC<ProductsSectionProps> = ({}) => {
  const candles = useSelector((state: RootState) => state.candles);
  const { createNewCandle } = useNewCandle();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditCandle = (currentCandle: Candle & { amount: number }) => {
    dispatch(setCurrentCandle(currentCandle));
    navigate("/candle", { state: { form: "shoppingcar" } });
  };

  return (
    <div className={`${styles.productsSection} col`}>
      {candles.length < 1 ? (
        <p className={`${styles.void} special`}>Carrito vacío...</p>
      ) : (
        candles.map((candle) => (
          <div key={candle.id} className={`${styles.card} row`}>
            <InfoProduct
              img={candle.style.img}
              essenceName={candle.essence.name}
              sizeName={candle.size.name}
              styleName={candle.style.name}
            />
            <div className="division"></div>
            <EditAmountCandle candle={candle} />
            <BtnSection
              removeCandle={() => dispatch(removeCandleById(candle.id))}
              editCandle={() => handleEditCandle(candle)}
            />
            <PriceSection
              className="mini"
              color="var(--light)"
              showDetails={true}
              details={{
                unitPrice:
                  candle.essence.price + candle.style.price + candle.size.price,
                amount: candle.amount,
              }}
            />
          </div>
        ))
      )}
      <MyButton onClick={createNewCandle}>
        <FaPlus />
        {"\u00A0"} Agregar
      </MyButton>
    </div>
  );
};

export default ProductsSection;
