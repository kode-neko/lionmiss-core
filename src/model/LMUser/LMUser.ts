import { LMUserInfo } from "./LMUserInfo";

type LMUser = {
  _id?: string;
  username: LMUserInfo;
  pass: string;
  salt: string;
  userInfo: LMUserInfo;
};

export { LMUser };
