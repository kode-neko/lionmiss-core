import { LMCartProduct } from "./LMCartProduct";
import { LMPromo } from "../LMPromo";

type LMCart = {
  _id?: string;
  products: LMCartProduct[];
  promo?: LMPromo;
  taxes: number;
};

export { LMCart };
