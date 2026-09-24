import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MENU_ITEM_ROUTERS } from "../router";
import type { IGroupMenuItemGetRequest, IGroupMenuItemGetResponse } from "./group-menu-item-get.type";

class GroupMenuItemGetSvcCaller extends RxAxiosCaller<
  IGroupMenuItemGetResponse["data"],
  IGroupMenuItemGetRequest,
  IGroupMenuItemGetResponse
> {
  constructor() {
    super(API_GROUP_MENU_ITEM_ROUTERS.GET.GROUP_MENU_ITEM_GET, "GET", (raw) => raw.data);
  }
}

export const groupMenuItemGetSvcCaller = new GroupMenuItemGetSvcCaller();
