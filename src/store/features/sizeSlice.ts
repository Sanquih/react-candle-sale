import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Size } from "../../models/size";
import { sizes } from "../../data/sizes";

const initialState: Size & { ready: boolean } = {} as Size & {
  ready: false;
};

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    selectSize: (state, action: PayloadAction<Size>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.height = action.payload.height;
      state.diameter = action.payload.diameter;
      state.weight = action.payload.weight;
      state.liveTime = action.payload.liveTime;
      state.img = action.payload.img;
      state.price = action.payload.price;
      state.ready = true;
    },
    newtSizeById: (state, action: PayloadAction<{ sizeId: number }>) => {
      const size = sizes.find((e) => e.id === action.payload.sizeId);
      if (!size) return;
      state.id = action.payload.sizeId;
      state.name = size.name;
      state.img = size.img;
      state.height = size.height;
      state.diameter = size.diameter;
      state.weight = size.weight;
      state.liveTime = size.liveTime;
      state.price = size.price;
      state.ready = false;
    },
  },
});

export const { selectSize, newtSizeById } = sizeSlice.actions;
export default sizeSlice.reducer;
