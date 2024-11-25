"use client";
import React from "react";
import styles from "./MyButton.module.css";

type button = "button" | "submit";

export type MyButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: button;
};

const MyButton: React.FC<MyButtonProps> = ({
  onClick = () => {},
  children,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${styles.btn} headShake row`}
    >
      {children}
    </button>
  );
};

export default MyButton;
