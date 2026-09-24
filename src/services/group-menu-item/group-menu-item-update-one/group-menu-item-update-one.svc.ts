import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MENU_ITEM_ROUTERS } from "../router";
import type { IGroupMenuItemUpdateOneRequest, IGroupMenuItemUpdateOneResponse } from "./group-menu-item-update-one.type";

class GroupMenuItemUpdateOneSvcCaller extends RxAxiosCaller<
  IGroupMenuItemUpdateOneResponse["data"],
  IGroupMenuItemUpdateOneRequest,
  IGroupMenuItemUpdateOneResponse
> {
  constructor() {
    super(API_GROUP_MENU_ITEM_ROUTERS.PUT.GROUP_MENU_ITEM_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const groupMenuItemUpdateOneSvcCaller = new GroupMenuItemUpdateOneSvcCaller();
