import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_CATEGORY_ROUTERS } from "../router";
import type { IGroupCategoryGetlistRequest, IGroupCategoryGetlistResponse } from "./group-category-getlist.type";

class GroupCategoryGetlistSvcCaller extends RxAxiosCaller<
  IGroupCategoryGetlistResponse["data"],
  IGroupCategoryGetlistRequest,
  IGroupCategoryGetlistResponse
> {
  constructor() {
    super(API_GROUP_CATEGORY_ROUTERS.GET.GROUP_CATEGORY_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupCategoryGetlistSvcCaller = new GroupCategoryGetlistSvcCaller();
