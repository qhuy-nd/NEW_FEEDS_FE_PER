import { RxAxiosCaller } from "../../api.svc";
import { API_DEPARTMENT_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class DepartmentGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_DEPARTMENT_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const departmentGetSvcCaller = new DepartmentGetSvcCaller();
