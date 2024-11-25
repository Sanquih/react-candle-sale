"use client";
import React from "react";
import styles from "./Step.module.css";

type backgroundSize = "cover" | "contain";

export type StepProps = {
  children: string;
  name: string;
  img: string;
  ready: boolean;
  number: string;
  backgroundSize?: backgroundSize;
  current: boolean;
};

const Step: React.FC<StepProps> = ({
  children,
  name,
  img,
  ready,
  number,
  backgroundSize = "cover",
  current,
}) => {
  return (
    <div className={`${styles.step} ${current ? "selected headShake" : ""}`}>
      <div className={`row ${styles.step} ${ready ? "ready" : ""}`}>
        <div
          className={`${styles.img} row`}
          style={
            ready
              ? {
                  backgroundImage: `url(${img})`,
                  backgroundSize: backgroundSize,
                }
              : {}
          }
        >
          {!ready ? number : null}
        </div>
        <div className="col">
          <h1 className="mini">{children}</h1>
          <p className="mini">{ready ? name : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
