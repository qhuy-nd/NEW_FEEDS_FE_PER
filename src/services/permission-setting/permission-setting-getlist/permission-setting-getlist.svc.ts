import { RxAxiosCaller } from "../../api.svc";
import { API_PERMISSION_SETTING_ROUTERS } from "../router";
import type { IPermissionSettingGetlistRequest, IPermissionSettingGetlistResponse } from "./permission-setting-getlist.type";

class PermissionSettingGetlistSvcCaller extends RxAxiosCaller<
  IPermissionSettingGetlistResponse["data"],
  IPermissionSettingGetlistRequest,
  IPermissionSettingGetlistResponse
> {
  constructor() {
    super(API_PERMISSION_SETTING_ROUTERS.GET.PERMISSION_SETTING_GETLIST, "GET", (raw) => raw.data);
  }
}

export const permissionSettingGetlistSvcCaller = new PermissionSettingGetlistSvcCaller();
