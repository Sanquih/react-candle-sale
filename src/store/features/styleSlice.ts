import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Style } from "../../models/style";
import { styles } from "../../data/styles";

const initialState: Style & { ready: boolean } = {} as Style & {
  ready: false;
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    selectStyle: (state, action: PayloadAction<Style>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.info = action.payload.info;
      state.img = action.payload.img;
      state.price = action.payload.price;
      state.ready = true;
    },
    newStyleById: (state, action: PayloadAction<{ styleId: number }>) => {
      const style = styles.find((e) => e.id === action.payload.styleId);
      if (!style) return;
      state.id = action.payload.styleId;
      state.name = style.name;
      state.info = style.info;
      state.img = style.img;
      state.price = style.price;
      state.ready = false;
    },
  },
});

export const { selectStyle, newStyleById } = styleSlice.actions;
export default styleSlice.reducer;
