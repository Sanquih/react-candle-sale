"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Essence } from "../../../models/essence";
import { AppDispatch, RootState } from "../../../store";
import { editEssenceCandle } from "../../../store/features/currentCandleSlice";
import { selectEssence } from "../../../store/features/essenceSlice";
import { EssencesSection } from "./EssencesSection";
import { InfoSection } from "./InfoSection";
import styles from "./ViewEssence.module.css";
import useGetData from "../../../hooks/useGetData";
import { Loader } from "../../../components/Loader";

export type ViewEssenceProps = {
  // types...
};

const ViewEssence: React.FC<ViewEssenceProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const essence = useSelector((state: RootState) => state.essence);
  const dispatch: AppDispatch = useDispatch();

  const { loading, data: essences } = useGetData<Essence>("essences");

  const [currentEssence, setCurrentEssence] = useState<Essence>(essence);

  const handleSelectEssence = (e: Essence) => {
    dispatch(selectEssence(e));
    dispatch(editEssenceCandle(e));
    switch (location.state?.from) {
      case "shoppingcar":
        navigate(`/shoppingcar`, { state: { from: "essence" } });
        break;
      case "candle":
        navigate(`/candle`, { state: { from: "essence" } });
        break;
      default:
        navigate(`/size`, { state: { from: "essence" } });
        break;
    }
  };

  return (
    <div className={`w100 h100 row`}>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`${styles.viewessence} ${
            !loading ? `page-transition` : ""
          } content row w100 h100`}
        >
          <InfoSection
            currentEssence={currentEssence}
            onClick={() => {
              handleSelectEssence(currentEssence);
            }}
          />
          <EssencesSection
            essences={essences}
            currentEssence={currentEssence}
            onMouseEnter={(e) => setCurrentEssence(e)}
            onClick={(e) => handleSelectEssence(e)}
          />
        </div>
      )}
    </div>
  );
};

export default ViewEssence;
