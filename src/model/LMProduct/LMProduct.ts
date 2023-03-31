import { LMProductProps } from "../LMProduct";
import { LMColor } from "../LMEnum";
import { LMImg } from "../LMImg";

type LMProduct = {
  _id?: string;
  name: string;
  price: number;
  description: string;
  details: LMProductProps[];
  colors: LMColor[];
  unds: number;
  imgs: LMImg[];
};

export { LMProduct };
