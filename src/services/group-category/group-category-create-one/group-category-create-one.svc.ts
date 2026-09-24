import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_CATEGORY_ROUTERS } from "../router";
import type { IGroupCategoryCreateOneRequest, IGroupCategoryCreateOneResponse } from "./group-category-create-one.type";

class GroupCategoryCreateOneSvcCaller extends RxAxiosCaller<
  IGroupCategoryCreateOneResponse["data"],
  IGroupCategoryCreateOneRequest,
  IGroupCategoryCreateOneResponse
> {
  constructor() {
    super(API_GROUP_CATEGORY_ROUTERS.POST.GROUP_CATEGORY_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupCategoryCreateOneSvcCaller = new GroupCategoryCreateOneSvcCaller();
