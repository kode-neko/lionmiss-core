import { LMMeasures } from "../LMMeasures";
import { LMAddress } from "../LMAddress";

type LMUser = {
  username: string;
  avatar: string;
  lang: string;
  currency: string;
  measures: LMMeasures;
  email: string;
  addresses: LMAddress[];
};

export { LMUser };
