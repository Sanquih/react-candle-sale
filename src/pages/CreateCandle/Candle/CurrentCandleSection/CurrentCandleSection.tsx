"use client";
import React from "react";
import styles from "./CurrentCandleSection.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "./CardInfo";

export type CurrentCandleSectionProps = {
  //type...
};

const CurrentCandleSection: React.FC<CurrentCandleSectionProps> = ({}) => {
  const navigate = useNavigate();

  const essence = useSelector((state: RootState) => state.essence);
  const size = useSelector((state: RootState) => state.size);
  const style = useSelector((state: RootState) => state.style);

  return (
    <div className={`${styles.currentcandlesection} col`}>
      <CardInfo
        key="essence"
        onClick={() => navigate(`/essence`, { state: { from: "candle" } })}
        img={essence.img}
        name={essence.name}
        info={essence.info}
      />
      <CardInfo
        key="size"
        onClick={() => navigate(`/size`, { state: { from: "candle" } })}
        img={size.img}
        name={size.name}
        info={`${size.height}cm de altura, ${size.diameter}cm de diametro, pesa ${size.weight}gr y tiene un tiempo de vida de ${size.liveTime} horas.`}
      />
      <CardInfo
        key="style"
        onClick={() => navigate(`/style`, { state: { from: "candle" } })}
        img={style.img}
        name={style.name}
        info={style.info}
      />
    </div>
  );
};

export default CurrentCandleSection;
