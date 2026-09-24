import { RxAxiosCaller } from "../../api.svc";
import { API_USER_COLLECTIONS_ROUTERS } from "../router";
import type { IUserCollectionsGetRequest, IUserCollectionsGetResponse } from "./user-collections-get.type";

class UserCollectionsGetSvcCaller extends RxAxiosCaller<
  IUserCollectionsGetResponse["data"],
  IUserCollectionsGetRequest,
  IUserCollectionsGetResponse
> {
  constructor() {
    super(API_USER_COLLECTIONS_ROUTERS.GET.USER_COLLECTIONS_GET, "GET", (raw) => raw.data);
  }
}

export const userCollectionsGetSvcCaller = new UserCollectionsGetSvcCaller();
