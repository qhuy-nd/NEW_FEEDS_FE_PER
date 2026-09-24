import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_CATEGORY_ROUTERS } from "../router";
import type { IGroupCategoryDeleteOneRequest, IGroupCategoryDeleteOneResponse } from "./group-category-delete-one.type";

class GroupCategoryDeleteOneSvcCaller extends RxAxiosCaller<
  IGroupCategoryDeleteOneResponse["data"],
  IGroupCategoryDeleteOneRequest,
  IGroupCategoryDeleteOneResponse
> {
  constructor() {
    super(API_GROUP_CATEGORY_ROUTERS.DELETE.GROUP_CATEGORY_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const groupCategoryDeleteOneSvcCaller = new GroupCategoryDeleteOneSvcCaller();
