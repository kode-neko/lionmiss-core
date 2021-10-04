import { LMCart } from "./LMCart";

type LMShipping = {
  id: string;
  initDate: Date;
  finishDate: Date;
  priceShipping: number;
  shippingMethod: string;
  paymentMethod: string;
  cart: LMCart;
};

export { LMShipping };
