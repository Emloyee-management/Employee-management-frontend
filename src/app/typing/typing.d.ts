declare interface ILoginInfo {
  userInfo: IUserInfo;
  scopeId: number;
  token: String;
}

declare interface IUserInfo {
  id: number;
  userName: String;
  email: String;
  password: String;
  personId: number;
  createDate: String;
  modificationDate: String;
}
