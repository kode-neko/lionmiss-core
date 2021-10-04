import { LMCart } from "../LMCart";
import { LMUser } from "./LMUser";

type LMUserInfo = {
  cart: LMCart;
  user: LMUser;
  favProducts: string[];
};

export { LMUserInfo };
