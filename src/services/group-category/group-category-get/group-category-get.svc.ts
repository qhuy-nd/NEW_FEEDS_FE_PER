import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_CATEGORY_ROUTERS } from "../router";
import type { IGroupCategoryGetRequest, IGroupCategoryGetResponse } from "./group-category-get.type";

class GroupCategoryGetSvcCaller extends RxAxiosCaller<
  IGroupCategoryGetResponse["data"],
  IGroupCategoryGetRequest,
  IGroupCategoryGetResponse
> {
  constructor() {
    super(API_GROUP_CATEGORY_ROUTERS.GET.GROUP_CATEGORY_GET, "GET", (raw) => raw.data);
  }
}

export const groupCategoryGetSvcCaller = new GroupCategoryGetSvcCaller();
