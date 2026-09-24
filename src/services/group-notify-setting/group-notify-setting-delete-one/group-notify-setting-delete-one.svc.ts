import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_NOTIFY_SETTING_ROUTERS } from "../router";
import type { IGroupNotifySettingDeleteOneRequest, IGroupNotifySettingDeleteOneResponse } from "./group-notify-setting-delete-one.type";

class GroupNotifySettingDeleteOneSvcCaller extends RxAxiosCaller<
  IGroupNotifySettingDeleteOneResponse["data"],
  IGroupNotifySettingDeleteOneRequest,
  IGroupNotifySettingDeleteOneResponse
> {
  constructor() {
    super(API_GROUP_NOTIFY_SETTING_ROUTERS.DELETE.GROUP_NOTIFY_SETTING_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const groupNotifySettingDeleteOneSvcCaller = new GroupNotifySettingDeleteOneSvcCaller();
