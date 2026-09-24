import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_NOTIFY_SETTING_ROUTERS } from "../router";
import type { IGroupNotifySettingCreateOneRequest, IGroupNotifySettingCreateOneResponse } from "./group-notify-setting-create-one.type";

class GroupNotifySettingCreateOneSvcCaller extends RxAxiosCaller<
  IGroupNotifySettingCreateOneResponse["data"],
  IGroupNotifySettingCreateOneRequest,
  IGroupNotifySettingCreateOneResponse
> {
  constructor() {
    super(API_GROUP_NOTIFY_SETTING_ROUTERS.POST.GROUP_NOTIFY_SETTING_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupNotifySettingCreateOneSvcCaller = new GroupNotifySettingCreateOneSvcCaller();
