import { RxAxiosCaller } from "../../api.svc";
import { API_CATEGORIES_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class CategoriesGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_CATEGORIES_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const categoriesGetSvcCaller = new CategoriesGetSvcCaller();
