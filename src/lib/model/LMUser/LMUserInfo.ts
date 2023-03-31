import { LMCart } from "../LMCart";
import { LMUser } from "./LMUser";

type LMUserInfo = {
  _id?: string;
  cart?: LMCart;
  user: LMUser;
  favProducts: string[];
};

export { LMUserInfo };
