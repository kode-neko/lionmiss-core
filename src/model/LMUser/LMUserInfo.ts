import { LMMeasures } from "../LMMeasures";
import { LMAddress } from "../LMAddress";

type LMUserInfo = {
  username: string;
  avatar: string;
  lang: string;
  currency: string;
  measures: LMMeasures;
  email: string;
  addresses: LMAddress[];
};

export { LMUserInfo };
