"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa6";
import styles from "./Input.module.css";

type type = "text" | "number";
type btnType = "button" | "submit";
type className = "" | "mini";

export type InputProps = {
  name: string;
  children: React.ReactNode;
  type?: type;
  btnType?: btnType;
  min?: string;
  max?: string;
  className?: className;
  color?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  children,
  type = "text",
  min = "1",
  max = "100",
  btnType = "button",
  className = "",
  color = "",
}) => {
  const { register, formState, getFieldState, setValue, getValues } =
    useFormContext();
  const { error } = getFieldState(name, formState);

  const handleIncrement = () => {
    const currentValue = getValues(name) || 0; // Obtiene el valor actual
    const maxValue = max ? parseFloat(max) : Infinity; // Máximo permitido
    const newValue = Math.min(currentValue + 1, maxValue); // Incrementa sin exceder el máximo
    setValue(name, newValue); // Actualiza el valor en el formulario
  };

  const handleDecrement = () => {
    const currentValue = getValues(name) || 0; // Obtiene el valor actual
    const minValue = min ? parseFloat(min) : -Infinity; // Mínimo permitido
    const newValue = Math.max(currentValue - 1, minValue); // Decrementa sin exceder el mínimo
    setValue(name, newValue); // Actualiza el valor en el formulario
  };

  return (
    <div className={`${styles.input} ${styles.gap} ${styles[className]} col`}>
      <label htmlFor={name} className={className} style={{ color: color }}>
        {children}
      </label>
      {type === "number" ? (
        <div className={`${styles.numberInput} ${styles[className]}`}>
          <button
            type={btnType}
            onClick={handleDecrement}
            className={`${styles.decrement} row`}
          >
            <FaMinus />
          </button>
          <input
            className={`${className} ${styles[className]}`}
            {...register(name)}
            id={name}
            type="number"
          />
          <button
            type={btnType}
            onClick={handleIncrement}
            className={`${styles.increment} row`}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <input
          className={className}
          {...register(name)}
          id={name}
          type={type}
        />
      )}
      {error?.message && (
        <div className={`text-danger ${className}`} style={{ color: color }}>
          {error?.message}
        </div>
      )}
    </div>
  );
};

export default Input;
