"use client";
import React, { useState } from "react";
import styles from "./ViewStyle.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { Style } from "../../../models/style";
import { selectStyle } from "../../../store/features/styleSlice";
import { BackBtn } from "../../../components/BackBtn";
import { Gallery } from "./Gallery";
import { Modal } from "../../../components/Modal";
import { ContentModalStyle } from "./ContentModalStyle";
import { editStyleCandle } from "../../../store/features/currentCandleSlice";
import useGetData from "../../../hooks/useGetData";
import { Loader } from "../../../components/Loader";

export type ViewStyleProps = {
  // types...
};

const ViewStyle: React.FC<ViewStyleProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const style = useSelector((state: RootState) => state.style);
  const dispatch: AppDispatch = useDispatch();

  const [currentStyle, setCurrentStyle] = useState<Style>(style);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { loading, data: myStyles } = useGetData<Style>("styles");

  const handlecurrentStyle = (s: Style) => {
    setCurrentStyle(s);
    setIsVisible(true);
  };

  const handleSelectStyle = () => {
    dispatch(selectStyle(currentStyle));
    dispatch(editStyleCandle(currentStyle));
    switch (location.state?.from) {
      case "shoppingcar":
        navigate(`/shoppingcar`, { state: { from: "style" } });
        break;
      default:
        navigate(`/candle`, { state: { from: "style" } });
        break;
    }
  };

  return (
    <div className={`${styles.viewStyle} w100 h100 col`}>
      {loading ? (
        <Loader />
      ) : (
        <div className={`w100 h100 col ${!loading ? `page-transition` : ""}`}>
          <BackBtn to={location.state?.from} from="style" />
          <Gallery
            myStyles={myStyles}
            onClick={(s) => handlecurrentStyle(s)}
            currentStyle={currentStyle}
          />
        </div>
      )}
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ContentModalStyle
          currentStyle={currentStyle}
          onClick={handleSelectStyle}
        />
      </Modal>
    </div>
  );
};

export default ViewStyle;
