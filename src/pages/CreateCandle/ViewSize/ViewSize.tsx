"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Size } from "../../../models/size";
import { AppDispatch, RootState } from "../../../store";
import { selectSize } from "../../../store/features/sizeSlice";
import styles from "./ViewSize.module.css";
import { BackBtn } from "../../../components/BackBtn";
import { InfoCard } from "./InfoCard";
import { SizesSection } from "./SizesSection";
import { editSizeCandle } from "../../../store/features/currentCandleSlice";
import useGetData from "../../../hooks/useGetData";
import { Loader } from "../../../components/Loader";

export type ViewSizeProps = {
  // types...
};

const ViewSize: React.FC<ViewSizeProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const size = useSelector((state: RootState) => state.size);

  const dispatch: AppDispatch = useDispatch();

  const { loading, data: sizes } = useGetData<Size>("sizes");

  const [currentSize, setCurrentSize] = useState<Size>(size);

  const handleSelectSize = (s: Size) => {
    dispatch(selectSize(s));
    dispatch(editSizeCandle(s));
    switch (location.state?.from) {
      case "shoppingcar":
        navigate(`/shoppingcar`, { state: { from: "size" } });
        break;
      case "candle":
        navigate(`/candle`, { state: { from: "size" } });
        break;
      default:
        navigate(`/style`, { state: { from: "size" } });
        break;
    }
  };

  return (
    <div className={`${styles.viewsize} w100 h100 col`}>
      {loading ? (
        <Loader />
      ) : (
        <div className={`w100 h100 col ${!loading ? `page-transition` : ""}`}>
          <BackBtn
            to={
              location.state?.from == "style" ? "essence" : location.state?.from
            }
            from="size"
          />
          <InfoCard
            currentSize={currentSize}
            onClick={() => {
              handleSelectSize(currentSize);
            }}
          />
          <SizesSection
            sizes={sizes}
            currentSize={currentSize}
            onMouseEnter={(s) => setCurrentSize(s)}
            onClick={(s) => handleSelectSize(s)}
          />
        </div>
      )}
    </div>
  );
};

export default ViewSize;
