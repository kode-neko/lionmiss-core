import { LMUserInfo } from "./LMUserInfo";

type LMUser = {
  _id?: string;
  username: string;
  pass: string;
  salt: string;
  userInfo: LMUserInfo;
};

export { LMUser };
