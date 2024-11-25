"use client";
import React from "react";
import styles from "./CloseBtn.module.css";
import { IoMdClose } from "react-icons/io";

export type CloseBtnProps = {
  onClick: () => void;
};

const CloseBtn: React.FC<CloseBtnProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={`${styles.close} row`}>
      <IoMdClose size={30} />
    </div>
  );
};

export default CloseBtn;
