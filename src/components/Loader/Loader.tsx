"use client";
import React from "react";
import styles from "./Loader.module.css";

export type LoaderProps = {
  // types...
};

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className={`${styles.loader} col`}>
      <img src="/imgs/loader1.png" alt="loader" />
    </div>
  );
};

export default Loader;
