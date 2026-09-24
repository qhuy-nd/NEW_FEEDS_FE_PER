import { RxAxiosCaller } from "../../api.svc";
import { API_USER_COLLECTIONS_ROUTERS } from "../router";
import type { IUserCollectionsUpdateOneRequest, IUserCollectionsUpdateOneResponse } from "./user-collections-update-one.type";

class UserCollectionsUpdateOneSvcCaller extends RxAxiosCaller<
  IUserCollectionsUpdateOneResponse["data"],
  IUserCollectionsUpdateOneRequest,
  IUserCollectionsUpdateOneResponse
> {
  constructor() {
    super(API_USER_COLLECTIONS_ROUTERS.PUT.USER_COLLECTIONS_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const userCollectionsUpdateOneSvcCaller = new UserCollectionsUpdateOneSvcCaller();
