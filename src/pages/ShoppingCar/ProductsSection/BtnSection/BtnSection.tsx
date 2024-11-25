"use client";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MyButton } from "../../../../components/MyButton";
import styles from "./BtnSection.module.css";

export type BtnSectionProps = {
  removeCandle: () => void;
  editCandle: () => void;
};

const BtnSection: React.FC<BtnSectionProps> = ({
  removeCandle,
  editCandle,
}) => {
  return (
    <div className={`${styles.btns} col`}>
      <MyButton className={styles.btn} onClick={removeCandle}>
        <AiFillDelete />
      </MyButton>
      <MyButton className={styles.btn} onClick={editCandle}>
        <AiFillEdit />
      </MyButton>
    </div>
  );
};

export default BtnSection;
