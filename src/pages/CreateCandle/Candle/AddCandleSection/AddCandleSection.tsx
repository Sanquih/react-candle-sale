"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import styles from "./AddCandleSection.module.css";
import { amountSchema, schemaType } from "../../../../schemas/amountSchema";
import { useDispatch } from "react-redux";
import { editAmountCandle } from "../../../../store/features/currentCandleSlice";
import { useNavigate } from "react-router-dom";
import useNewCandle from "../../../../hooks/useNewCandle";
import { MyButton } from "../../../../components/MyButton";

export type AddCandleSectionProps = {
  amount: number;
  handlePush: (amount: number) => void;
};

const AddCandleSection: React.FC<AddCandleSectionProps> = ({
  amount,
  handlePush,
}) => {
  const { createNewCandle } = useNewCandle();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const methods = useForm<schemaType>({
    resolver: zodResolver(amountSchema),
    defaultValues: { amount: amount },
  });

  const addToCart = (data: schemaType) => {
    dispatch(editAmountCandle(data.amount));
    handlePush(data.amount);
    navigate(`/shoppingcar`, { state: { from: "candle" } });
  };

  return (
    <div className={`${styles.addcandlesection} col`}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(addToCart)} className="col">
          <Input movilRow="movilRow" name="amount" type="number" >
            <b>Cantidad:</b>
          </Input>
          <div className={`${styles.buttons} col`}>
            <MyButton type="submit">Agregar al carrito</MyButton>
            <MyButton onClick={createNewCandle}>Crear nueva</MyButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddCandleSection;
