import { LMMeasures } from "../LMMeasures";
import { LMAddress } from "../LMAddress";
import { LMCart } from "..";

type LMUserInfo = {
  cart?: LMCart;
  favProducts: string[];
  avatar: string;
  lang: string;
  currency: string;
  measures: LMMeasures;
  email: string;
  addresses: LMAddress[];
};

export { LMUserInfo };
