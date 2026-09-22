export interface INextAuthSessionUser {
  id?: string;
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  accessToken?: string;
  token?: string;
  refreshToken?: string;
}

export interface INextAuthSession {
  user?: INextAuthSessionUser;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
  expires?: Date | string;
}
