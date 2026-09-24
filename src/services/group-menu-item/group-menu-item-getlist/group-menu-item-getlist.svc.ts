import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MENU_ITEM_ROUTERS } from "../router";
import type { IGroupMenuItemGetlistRequest, IGroupMenuItemGetlistResponse } from "./group-menu-item-getlist.type";

class GroupMenuItemGetlistSvcCaller extends RxAxiosCaller<
  IGroupMenuItemGetlistResponse["data"],
  IGroupMenuItemGetlistRequest,
  IGroupMenuItemGetlistResponse
> {
  constructor() {
    super(API_GROUP_MENU_ITEM_ROUTERS.GET.GROUP_MENU_ITEM_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupMenuItemGetlistSvcCaller = new GroupMenuItemGetlistSvcCaller();
