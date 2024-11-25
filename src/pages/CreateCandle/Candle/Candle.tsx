"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  pushCandle
} from "../../../store/features/canldesSlice";
import { AddCandleSection } from "./AddCandleSection";
import styles from "./Candle.module.css";
import { CurrentCandleSection } from "./CurrentCandleSection";

export type CandleProps = {
  // types...
};

const Candle: React.FC<CandleProps> = ({}) => {
  const currentCandle = useSelector((state: RootState) => state.currentCandle);
  const dispach: AppDispatch = useDispatch();

  const handlePush = (amount: number) => {
    dispach(pushCandle({ ...currentCandle, amount: amount }));
  };

  return (
    <div className={`row viewDetails h100 w100`}>
      <div className={`${styles.candle} content row w100 h100`}>
        <CurrentCandleSection />
        <div className="division"></div>
        <AddCandleSection
          amount={currentCandle.amount}
          handlePush={handlePush}
        />
      </div>
    </div>
  );
};

export default Candle;
