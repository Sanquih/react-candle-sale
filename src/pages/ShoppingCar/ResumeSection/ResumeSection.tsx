"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MyButton } from "../../../components/MyButton";
import { PriceSection } from "../../../components/PriceSection";
import useSendMessage from "../../../hooks/useSendMessage";
import { ListProducts } from "./ListProducts";
import styles from "./ResumeSection.module.css";

export type ResumeSectionProps = {
  // type...
};

const ResumeSection: React.FC<ResumeSectionProps> = ({}) => {
  const { candles, finalPrice, sendMessage } = useSendMessage();

  return (
    <div className={`${styles.resumeSection} col`}>
      <h1>Reumen de compra</h1>
      <ListProducts candles={candles} />
      <PriceSection
        color="var(--dark)"
        className="special"
        flex="row"
        details={{
          unitPrice: finalPrice,
          amount: 1,
        }}
      />

      {candles.length < 1 ? null : (
        <MyButton onClick={sendMessage}>
          <FaShoppingCart />
          {"\u00A0"} Comprar
        </MyButton>
      )}
    </div>
  );
};

export default ResumeSection;
