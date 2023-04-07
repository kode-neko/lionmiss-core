import { LMCart } from "../LMCart";
import { LMUserInfo } from "./LMUserInfo";

type LMUser = {
  _id?: string;
  cart?: LMCart;
  user: LMUserInfo;
  favProducts: string[];
};

export { LMUser };
