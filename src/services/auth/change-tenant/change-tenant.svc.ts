import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { IChangeTenantData, IChangeTenantRequest, IChangeTenantResponse } from "./change-tenant.type";

class ChangeTenantSvcCaller extends RxAxiosCaller<
  IChangeTenantData,
  IChangeTenantRequest,
  IChangeTenantResponse
> {
  constructor() {
    super(API_AUTH_ROUTERS.GET.CHANGE_TENANT, "GET", (raw) => ({
      accessToken: raw.data?.accessToken ?? raw.accessToken ?? raw.token ?? "",
      refreshToken: raw.data?.refreshToken ?? raw.refreshToken,
    }))
  }
}

export const changeTenantSvcCaller = new ChangeTenantSvcCaller();
