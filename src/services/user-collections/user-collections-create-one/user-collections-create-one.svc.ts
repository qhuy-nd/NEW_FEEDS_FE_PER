import { RxAxiosCaller } from "../../api.svc";
import { API_USER_COLLECTIONS_ROUTERS } from "../router";
import type { IUserCollectionsCreateOneRequest, IUserCollectionsCreateOneResponse } from "./user-collections-create-one.type";

class UserCollectionsCreateOneSvcCaller extends RxAxiosCaller<
  IUserCollectionsCreateOneResponse["data"],
  IUserCollectionsCreateOneRequest,
  IUserCollectionsCreateOneResponse
> {
  constructor() {
    super(API_USER_COLLECTIONS_ROUTERS.POST.USER_COLLECTIONS_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const userCollectionsCreateOneSvcCaller = new UserCollectionsCreateOneSvcCaller();
