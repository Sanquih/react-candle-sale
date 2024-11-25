"use client";
import React from "react";
import styles from "./HomeBtn.module.css";
import { useNavigate } from "react-router-dom";

export type HomeBtnProps = {
  // types...
};

const HomeBtn: React.FC<HomeBtnProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate("/")}
      className={styles.logo}
      src="/imgs/icon.png"
      alt="Icon"
    />
  );
};

export default HomeBtn;
