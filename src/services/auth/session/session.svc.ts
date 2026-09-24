import { RxAxiosCaller } from "../../api.svc";
import { nextAuthAxiosInstance } from "../../axios-instance";
import { API_AUTH_ROUTERS } from "../router";
import type { INextAuthSession } from "./session.type";

class SessionSvcCaller extends RxAxiosCaller<
  INextAuthSession,
  undefined,
  INextAuthSession
> {
  constructor() {
    super(API_AUTH_ROUTERS.GET.SESSION, "GET", (raw) => raw, {
      instance: nextAuthAxiosInstance,
    })
  }
}

export const sessionSvcCaller = new SessionSvcCaller();
