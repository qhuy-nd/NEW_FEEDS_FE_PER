import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_CATEGORY_ROUTERS } from "../router";
import type { IGroupCategoryUpdateOneRequest, IGroupCategoryUpdateOneResponse } from "./group-category-update-one.type";

class GroupCategoryUpdateOneSvcCaller extends RxAxiosCaller<
  IGroupCategoryUpdateOneResponse["data"],
  IGroupCategoryUpdateOneRequest,
  IGroupCategoryUpdateOneResponse
> {
  constructor() {
    super(API_GROUP_CATEGORY_ROUTERS.PUT.GROUP_CATEGORY_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const groupCategoryUpdateOneSvcCaller = new GroupCategoryUpdateOneSvcCaller();
