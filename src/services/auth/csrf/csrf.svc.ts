import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { IResponseCsrf } from "./csrf.type";

class CsrfSvcCaller extends RxAxiosCaller<
  IResponseCsrf,
  undefined,
  IResponseCsrf
> {
  constructor() {
    super(API_AUTH_ROUTERS.GET.CSRF, "GET", (raw) => raw)
  }
}

export const csrfSvcCaller = new CsrfSvcCaller();
