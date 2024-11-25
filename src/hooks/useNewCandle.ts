import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { essences } from "../data/essences";
import { sizes } from "../data/sizes";
import { styles } from "../data/styles";
import { AppDispatch } from "../store";
import { setCurrentCandle } from "../store/features/currentCandleSlice";
import { newEssenceById } from "../store/features/essenceSlice";
import { newtSizeById } from "../store/features/sizeSlice";
import { newStyleById } from "../store/features/styleSlice";
import { Candle } from "../models/candle";

export default function useNewCandle() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const createNewCandle = () => {
    const currentCandle: Candle = {
      id: generateId(),
      essence: essences[0],
      size: sizes[0],
      style: styles[0],
    };
    dispatch(setCurrentCandle({ ...currentCandle, amount: 1 }));
    dispatch(
      newEssenceById({
        essenceId: currentCandle.essence.id,
      })
    );
    dispatch(
      newtSizeById({
        sizeId: currentCandle.size.id,
      })
    );
    dispatch(
      newStyleById({
        styleId: currentCandle.style.id,
      })
    );

    navigate(`/essence`, { state: { from: "home" } });
  };

  return { createNewCandle };
}

const generateId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36);
  return `${timestamp}-${random}`;
};
