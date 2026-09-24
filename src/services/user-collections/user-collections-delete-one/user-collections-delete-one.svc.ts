import { RxAxiosCaller } from "../../api.svc";
import { API_USER_COLLECTIONS_ROUTERS } from "../router";
import type { IUserCollectionsDeleteOneRequest, IUserCollectionsDeleteOneResponse } from "./user-collections-delete-one.type";

class UserCollectionsDeleteOneSvcCaller extends RxAxiosCaller<
  IUserCollectionsDeleteOneResponse["data"],
  IUserCollectionsDeleteOneRequest,
  IUserCollectionsDeleteOneResponse
> {
  constructor() {
    super(API_USER_COLLECTIONS_ROUTERS.DELETE.USER_COLLECTIONS_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const userCollectionsDeleteOneSvcCaller = new UserCollectionsDeleteOneSvcCaller();
