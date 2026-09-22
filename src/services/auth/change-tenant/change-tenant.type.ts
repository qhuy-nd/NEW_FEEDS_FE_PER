import type { TAuthTokens } from "../token";

export type IChangeTenantRequest = undefined;

export type IChangeTenantData = TAuthTokens;

export type IChangeTenantResponse = {
  data?: Partial<TAuthTokens>;
  accessToken?: string;
  token?: string;
  refreshToken?: string;
}
