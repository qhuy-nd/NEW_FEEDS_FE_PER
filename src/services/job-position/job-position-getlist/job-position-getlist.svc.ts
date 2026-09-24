import { RxAxiosCaller } from "../../api.svc";
import { API_JOB_POSITION_ROUTERS } from "../router";
import type { IJobPositionGetlistRequest, IJobPositionGetlistResponse } from "./job-position-getlist.type";

class JobPositionGetlistSvcCaller extends RxAxiosCaller<
  IJobPositionGetlistResponse["data"],
  IJobPositionGetlistRequest,
  IJobPositionGetlistResponse
> {
  constructor() {
    super(API_JOB_POSITION_ROUTERS.GET.JOB_POSITION_GETLIST, "GET", (raw) => raw.data);
  }
}

export const jobPositionGetlistSvcCaller = new JobPositionGetlistSvcCaller();
