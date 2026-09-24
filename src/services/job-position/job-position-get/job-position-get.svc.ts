import { RxAxiosCaller } from "../../api.svc";
import { API_JOB_POSITION_ROUTERS } from "../router";
import type { IJobPositionGetRequest, IJobPositionGetResponse } from "./job-position-get.type";

class JobPositionGetSvcCaller extends RxAxiosCaller<
  IJobPositionGetResponse["data"],
  IJobPositionGetRequest,
  IJobPositionGetResponse
> {
  constructor() {
    super(API_JOB_POSITION_ROUTERS.GET.JOB_POSITION_GET, "GET", (raw) => raw.data);
  }
}

export const jobPositionGetSvcCaller = new JobPositionGetSvcCaller();
