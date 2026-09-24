import { RxAxiosCaller } from "../../api.svc";
import { API_SOCIAL_TAG_ROUTERS } from "../router";
import type { ISocialTagGetRequest, ISocialTagGetResponse } from "./social-tag-get.type";

class SocialTagGetSvcCaller extends RxAxiosCaller<
  ISocialTagGetResponse["data"],
  ISocialTagGetRequest,
  ISocialTagGetResponse
> {
  constructor() {
    super(API_SOCIAL_TAG_ROUTERS.GET.SOCIAL_TAG_GET, "GET", (raw) => raw.data);
  }
}

export const socialTagGetSvcCaller = new SocialTagGetSvcCaller();
