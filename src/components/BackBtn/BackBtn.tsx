"use client";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./BackBtn.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export type BackBtnProps = {
  to: string;
  from: string;
};

const BackBtn: React.FC<BackBtnProps> = ({ to, from }) => {
  const navigate = useNavigate();

  const back = () => navigate(`/${to}`, { state: { from: from } });

  return ReactDOM.createPortal(
    <div className={`${styles.volver} row`} onClick={back}>
      <IoMdArrowRoundBack />
      <p>Volver</p>
    </div>,
    document.body
  );
};

export default BackBtn;
