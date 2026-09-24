import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MENU_ITEM_ROUTERS } from "../router";
import type { IGroupMenuItemCreateOneRequest, IGroupMenuItemCreateOneResponse } from "./group-menu-item-create-one.type";

class GroupMenuItemCreateOneSvcCaller extends RxAxiosCaller<
  IGroupMenuItemCreateOneResponse["data"],
  IGroupMenuItemCreateOneRequest,
  IGroupMenuItemCreateOneResponse
> {
  constructor() {
    super(API_GROUP_MENU_ITEM_ROUTERS.POST.GROUP_MENU_ITEM_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupMenuItemCreateOneSvcCaller = new GroupMenuItemCreateOneSvcCaller();
