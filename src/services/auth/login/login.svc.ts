import { RxAxiosCaller } from "../../api.svc";
import type { TApiRequestConfig } from "../../type";
import { nextAuthAxiosInstance } from "../../axios-instance";
import { API_AUTH_ROUTERS } from "../router";
import { csrfSvcCaller } from "../csrf/csrf.svc";
import { sessionSvcCaller } from "../session/session.svc";
import type { INextAuthSession } from "../session/session.type";
import type {
  IRequestLogin,
  IResponseCredentialsCallback,
  IResponseLogin
} from "./login.type";

class LoginSvcCaller extends RxAxiosCaller<
  IResponseLogin["data"],
  IRequestLogin,
  IResponseLogin
> {
  constructor() {
    super(API_AUTH_ROUTERS.POST.CREDENTIALS_CALLBACK, "POST", (raw) => raw.data, {
      instance: nextAuthAxiosInstance,
    })
  }

  private getCallbackUrl(): string {
    return typeof window === "undefined" ? "/" : window.location.origin;
  }

  private parseSessionTokens(session: INextAuthSession): IResponseLogin["data"] {
    return {
      accessToken: session.accessToken ?? session.user?.accessToken ?? session.user?.token ?? "",
      refreshToken: session.refreshToken ?? session.user?.refreshToken ?? "",
    }
  }

  override async execute(
    variables: IRequestLogin,
    config?: TApiRequestConfig,
  ): Promise<IResponseLogin["data"]> {
    this.setResult({ status: "loading" });

    try {
      const csrf = await csrfSvcCaller.execute(undefined, { toast: false });
      const body = new URLSearchParams({
        csrfToken: csrf.csrfToken,
        email: variables.email,
        password: variables.password,
        callbackUrl: this.getCallbackUrl(),
        json: "true",
      });

      const callback = await nextAuthAxiosInstance.post<IResponseCredentialsCallback>(
        API_AUTH_ROUTERS.POST.CREDENTIALS_CALLBACK,
        body,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      if (callback.data.error) {
        throw new Error(callback.data.error);
      }

      const session = await sessionSvcCaller.execute(undefined, { toast: false });
      const tokens = this.parseSessionTokens(session);

      if (!tokens.accessToken) {
        throw new Error("No access token returned from NextAuth session");
      }

      this.setSuccessResult(tokens, undefined, config?.toast);
      return tokens;
    } catch (error) {
      this.setErrorResult(error, config?.toast, "Error login");
      throw error;
    }
  }
}

export const loginSvcCaller = new LoginSvcCaller();
