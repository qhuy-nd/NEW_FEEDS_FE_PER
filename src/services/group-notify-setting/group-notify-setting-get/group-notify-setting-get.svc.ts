import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_NOTIFY_SETTING_ROUTERS } from "../router";
import type { IGroupNotifySettingGetRequest, IGroupNotifySettingGetResponse } from "./group-notify-setting-get.type";

class GroupNotifySettingGetSvcCaller extends RxAxiosCaller<
  IGroupNotifySettingGetResponse["data"],
  IGroupNotifySettingGetRequest,
  IGroupNotifySettingGetResponse
> {
  constructor() {
    super(API_GROUP_NOTIFY_SETTING_ROUTERS.GET.GROUP_NOTIFY_SETTING_GET, "GET", (raw) => raw.data);
  }
}

export const groupNotifySettingGetSvcCaller = new GroupNotifySettingGetSvcCaller();
