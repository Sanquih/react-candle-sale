"use client";
import React from "react";
import styles from "./Stepper.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Step from "./Step/Step";

export type StepperProps = {
  // types...
};

const Stepper: React.FC<StepperProps> = ({}) => {
  const { pathname } = useLocation();
  const essence = useSelector((state: RootState) => state.essence);
  const size = useSelector((state: RootState) => state.size);
  const style = useSelector((state: RootState) => state.style);

  if (
    pathname === "/essence" ||
    pathname === "/size" ||
    pathname === "/style"
  ) {
    return (
      <div className={`${styles.stepper} row`}>
        <Step
          key="essence"
          img={essence.img}
          name={essence.name}
          ready={essence.ready}
          number="1"
		  current={pathname === "/essence"}
        >
          Esencia
        </Step>
        <Step
          key="size"
          img={size.img}
          name={size.name}
          ready={size.ready}
          number="2"
          backgroundSize="contain"
		  current={pathname === "/size"}
		  >
          Tamaño
        </Step>
        <Step
          key="style"
          img={style.img}
          name={style.name}
          ready={style.ready}
          number="3"
		  current={pathname === "/style"}
		  >
          Estilo
        </Step>
      </div>
    );
  }
  return null;
};

export default Stepper;
