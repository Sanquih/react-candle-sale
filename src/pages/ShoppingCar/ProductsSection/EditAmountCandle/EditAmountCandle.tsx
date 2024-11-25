"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input } from "../../../../components/Input";
import { Candle } from "../../../../models/candle";
import { amountSchema, schemaType } from "../../../../schemas/amountSchema";
import styles from "./EditAmountCandle.module.css";
import { editAmountCandle } from "../../../../store/features/canldesSlice";

export type EditAmountCandleProps = {
  candle: Candle & { amount: number };
};

const EditAmountCandle: React.FC<EditAmountCandleProps> = ({ candle }) => {
  const methods = useForm<schemaType>({
    resolver: zodResolver(amountSchema),
    defaultValues: { amount: candle.amount },
  });
  const { watch, trigger } = methods;

  const dispatch = useDispatch();

  const editAmount = (data: schemaType) => {
    dispatch(editAmountCandle({ id: candle.id, amount: data.amount }));
  };

  React.useEffect(() => {
    const subscription = watch(() => {
      trigger().then((valid) => {
        if (valid) {
          methods.handleSubmit(editAmount)();
        }
      });
    });
    return () => subscription.unsubscribe();
  }, [watch, methods, trigger]);

  return (
    <div className={styles.editamountcandle}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(editAmount)} className="col">
          <Input
            name="amount"
            type="number"
            btnType="submit"
            className="mini"
            color="var(--light)"
          >
            <b>Cantidad:</b>
          </Input>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditAmountCandle;
