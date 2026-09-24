import { RxAxiosCaller } from "../../api.svc";
import { API_DEPARTMENT_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class DepartmentGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_DEPARTMENT_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const departmentGetlistSvcCaller = new DepartmentGetlistSvcCaller();
