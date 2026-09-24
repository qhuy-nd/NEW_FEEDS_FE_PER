import { RxAxiosCaller } from "../../api.svc";
import { API_USER_COLLECTIONS_ROUTERS } from "../router";
import type { IUserCollectionsGetlistRequest, IUserCollectionsGetlistResponse } from "./user-collections-getlist.type";

class UserCollectionsGetlistSvcCaller extends RxAxiosCaller<
  IUserCollectionsGetlistResponse["data"],
  IUserCollectionsGetlistRequest,
  IUserCollectionsGetlistResponse
> {
  constructor() {
    super(API_USER_COLLECTIONS_ROUTERS.GET.USER_COLLECTIONS_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userCollectionsGetlistSvcCaller = new UserCollectionsGetlistSvcCaller();
