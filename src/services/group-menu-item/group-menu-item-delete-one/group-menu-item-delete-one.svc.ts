import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MENU_ITEM_ROUTERS } from "../router";
import type { IGroupMenuItemDeleteOneRequest, IGroupMenuItemDeleteOneResponse } from "./group-menu-item-delete-one.type";

class GroupMenuItemDeleteOneSvcCaller extends RxAxiosCaller<
  IGroupMenuItemDeleteOneResponse["data"],
  IGroupMenuItemDeleteOneRequest,
  IGroupMenuItemDeleteOneResponse
> {
  constructor() {
    super(API_GROUP_MENU_ITEM_ROUTERS.DELETE.GROUP_MENU_ITEM_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const groupMenuItemDeleteOneSvcCaller = new GroupMenuItemDeleteOneSvcCaller();
