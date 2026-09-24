import { RxAxiosCaller } from "../../api.svc";
import { API_PERMISSION_SETTING_ROUTERS } from "../router";
import type { IPermissionSettingGetRequest, IPermissionSettingGetResponse } from "./permission-setting-get.type";

class PermissionSettingGetSvcCaller extends RxAxiosCaller<
  IPermissionSettingGetResponse["data"],
  IPermissionSettingGetRequest,
  IPermissionSettingGetResponse
> {
  constructor() {
    super(API_PERMISSION_SETTING_ROUTERS.GET.PERMISSION_SETTING_GET, "GET", (raw) => raw.data);
  }
}

export const permissionSettingGetSvcCaller = new PermissionSettingGetSvcCaller();
