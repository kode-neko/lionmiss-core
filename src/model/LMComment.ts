import { LMMeasures } from "./LMMeasures";
import { LMUser } from "./LMUser";
import { LMImg } from "./LMImg";

type LMComment = {
  _id?: string;
  comment: string;
  date: Date;
  ratting: number;
  measures: LMMeasures;
  user: LMUser;
  imgs: LMImg[];
};

export { LMComment };
