import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_NOTIFY_SETTING_ROUTERS } from "../router";
import type { IGroupNotifySettingGetlistRequest, IGroupNotifySettingGetlistResponse } from "./group-notify-setting-getlist.type";

class GroupNotifySettingGetlistSvcCaller extends RxAxiosCaller<
  IGroupNotifySettingGetlistResponse["data"],
  IGroupNotifySettingGetlistRequest,
  IGroupNotifySettingGetlistResponse
> {
  constructor() {
    super(API_GROUP_NOTIFY_SETTING_ROUTERS.GET.GROUP_NOTIFY_SETTING_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupNotifySettingGetlistSvcCaller = new GroupNotifySettingGetlistSvcCaller();
