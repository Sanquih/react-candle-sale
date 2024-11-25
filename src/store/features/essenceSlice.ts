import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Essence } from "../../models/essence";
import { essences } from "../../data/essences";

const initialState: Essence & { ready: boolean } = {} as Essence & {
  ready: false;
};

const essenceSlice = createSlice({
  name: "essence",
  initialState,
  reducers: {
    selectEssence: (state, action: PayloadAction<Essence>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.info = action.payload.info;
      state.img = action.payload.img;
      state.icon = action.payload.icon;
      state.price = action.payload.price;
      state.ready = true;
    },
    newEssenceById: (state, action: PayloadAction<{ essenceId: number }>) => {
      const essence = essences.find((e) => e.id === action.payload.essenceId);
      if (!essence) return;
      state.id = action.payload.essenceId;
      state.name = essence.name;
      state.info = essence.info;
      state.img = essence.img;
      state.icon = essence.icon;
      state.price = essence.price;
      state.ready = false;
      return state;
    },
  },
});

export const { selectEssence, newEssenceById } = essenceSlice.actions;
export default essenceSlice.reducer;
