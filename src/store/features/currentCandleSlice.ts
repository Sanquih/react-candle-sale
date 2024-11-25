import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Candle } from "../../models/candle";
import { Essence } from "../../models/essence";
import { Size } from "../../models/size";
import { Style } from "../../models/style";

const initialState: Candle & { amount: number } = {
  id: "0",
  essence: {} as Essence,
  size: {} as Size,
  style: {} as Style,
  amount: 0,
};

const currentCandleSlice = createSlice({
  name: "currentCandle",
  initialState,
  reducers: {
    setCurrentCandle: (
      state,
      action: PayloadAction<Candle & { amount: number }>
    ) => {
      state.id = action.payload.id;
      state.essence = action.payload.essence;
      state.size = action.payload.size;
      state.style = action.payload.style;
      state.amount = action.payload.amount;
    },
    editEssenceCandle: (state, action: PayloadAction<Essence>) => {
      state.essence = action.payload;
    },
    editSizeCandle: (state, action: PayloadAction<Size>) => {
      state.size = action.payload;
    },
    editStyleCandle: (state, action: PayloadAction<Style>) => {
      state.style = action.payload;
    },
    editAmountCandle: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const {
  setCurrentCandle,
  editEssenceCandle,
  editSizeCandle,
  editStyleCandle,
  editAmountCandle,
} = currentCandleSlice.actions;
export default currentCandleSlice.reducer;
