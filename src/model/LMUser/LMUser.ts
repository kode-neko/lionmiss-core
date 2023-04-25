import { LMUserInfo } from "./LMUserInfo";

type LMUser = {
  _id?: string;
  username: string;
  pass: string;
  userInfo: LMUserInfo;
};

export { LMUser };
