import { RxAxiosCaller } from "../../api.svc";
import { API_CATEGORIES_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class CategoriesGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_CATEGORIES_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const categoriesGetlistSvcCaller = new CategoriesGetlistSvcCaller();
