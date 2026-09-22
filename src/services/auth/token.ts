import { SSOCOOKIES } from "../../constants/cookies.const";
import { deleteTokenFromCookie, getAccessTokenFromCookie, setTokenInCookie } from "../../utils/app.utils";

export type TAuthTokens = {
  accessToken: string;
  refreshToken?: string;
}

export const AUTH_TOKEN_EVENT = "auth:token-change";

const notifyTokenChange = () => {
  window.dispatchEvent(new Event(AUTH_TOKEN_EVENT));
}

export const getStoredAuthTokens = (): TAuthTokens | null => {
  const accessToken = getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN);
  const refreshToken = getAccessTokenFromCookie(SSOCOOKIES.REFRESH_TOKEN);

  if (!accessToken) return null;

  return {
    accessToken,
    refreshToken: refreshToken ?? undefined,
  };
}

export const hasStoredAccessToken = () => {
  return Boolean(getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN));
}

export const saveAuthTokens = (tokens: TAuthTokens) => {
  setTokenInCookie(SSOCOOKIES.ACCESS_TOKEN, tokens.accessToken);

  if (tokens.refreshToken) {
    setTokenInCookie(SSOCOOKIES.REFRESH_TOKEN, tokens.refreshToken);
  }

  notifyTokenChange();
}

export const clearAuthTokens = () => {
  deleteTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN);
  deleteTokenFromCookie(SSOCOOKIES.REFRESH_TOKEN);
  notifyTokenChange();
}
