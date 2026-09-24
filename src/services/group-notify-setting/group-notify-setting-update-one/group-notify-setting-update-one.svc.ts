import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_NOTIFY_SETTING_ROUTERS } from "../router";
import type { IGroupNotifySettingUpdateOneRequest, IGroupNotifySettingUpdateOneResponse } from "./group-notify-setting-update-one.type";

class GroupNotifySettingUpdateOneSvcCaller extends RxAxiosCaller<
  IGroupNotifySettingUpdateOneResponse["data"],
  IGroupNotifySettingUpdateOneRequest,
  IGroupNotifySettingUpdateOneResponse
> {
  constructor() {
    super(API_GROUP_NOTIFY_SETTING_ROUTERS.PUT.GROUP_NOTIFY_SETTING_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const groupNotifySettingUpdateOneSvcCaller = new GroupNotifySettingUpdateOneSvcCaller();
