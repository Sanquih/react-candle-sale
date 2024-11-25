import { Essence } from "./essence";
import { Size } from "./size";
import { Style } from "./style";

export type Candle = {
  id: string;
  essence: Essence;
  size: Size;
  style: Style;
};
