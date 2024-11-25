import { configureStore } from "@reduxjs/toolkit";
import essenceReducer from "./features/essenceSlice";
import sizeReducer from "./features/sizeSlice";
import styleReducer from "./features/styleSlice";
import canldesSlice from "./features/canldesSlice";
import currentCandleSlice from "./features/currentCandleSlice";

const store = configureStore({
  reducer: {
    essence: essenceReducer,
    size: sizeReducer,
    style: styleReducer,
    candles: canldesSlice,
    currentCandle: currentCandleSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
