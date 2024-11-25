import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Candle } from "../../models/candle";

const initialState: (Candle & { amount: number })[] = [];

const canldesSlice = createSlice({
  name: "candles",
  initialState,
  reducers: {
    pushCandle: (state, action: PayloadAction<Candle & { amount: number }>) => {
      const index = state.findIndex(
        (candle) =>
          candle.id === action.payload.id ||
          (candle.essence.id === action.payload.essence.id &&
            candle.size.id === action.payload.size.id &&
            candle.style.id === action.payload.style.id)
      );
      if (index == -1) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
    },
    removeCandleById: (state, action: PayloadAction<string>) => {
      return state.filter((candle) => candle.id !== action.payload);
    },
    editCandle: (state, action: PayloadAction<Candle & { amount: number }>) => {
      const index = state.findIndex(
        (candle) => candle.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    editAmountCandle: (
      state,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const index = state.findIndex(
        (candle) => candle.id === action.payload.id
      );
      if (index !== -1) {
        state[index].amount = action.payload.amount;
      }
    },
  },
});

export const { pushCandle, removeCandleById, editCandle, editAmountCandle } =
  canldesSlice.actions;
export default canldesSlice.reducer;
