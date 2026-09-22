export const API_AUTH_ROUTERS = {
  GET: {
    SESSION: "auth/session",
    CSRF: "auth/csrf",
    ME: "auth/session",
    CHANGE_TENANT: "auth/change-tenant",
  },
  POST: {
    SIGNIN: "auth/signin",
    LOGIN: "auth/callback/credentials",
    CREDENTIALS_CALLBACK: "auth/callback/credentials",
    GOOGLE_CALLBACK: "auth/callback/google",
    REGISTER: "auth/register",
    REFRESH_TOKEN: "auth/refresh-token",
  }
}
