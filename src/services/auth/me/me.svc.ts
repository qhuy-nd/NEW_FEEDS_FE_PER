import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { INextAuthSession } from "../session/session.type";
import type { IMeRequest, IMeResponse } from "./me.type";

class MeSvcCaller extends RxAxiosCaller<
  IMeResponse,
  IMeRequest,
  INextAuthSession
> {
  constructor() {
    super(API_AUTH_ROUTERS.GET.ME, "GET", (raw) => ({
      id: raw.user?._id ?? raw.user?.id ?? "",
      username: raw.user?.username ?? raw.user?.name ?? raw.user?.email ?? "",
      email: raw.user?.email ?? "",
    }))
  }
}

export const meSvcCaller = new MeSvcCaller();
