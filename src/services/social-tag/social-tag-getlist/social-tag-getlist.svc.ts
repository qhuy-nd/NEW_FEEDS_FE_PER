import { RxAxiosCaller } from "../../api.svc";
import { API_SOCIAL_TAG_ROUTERS } from "../router";
import type { ISocialTagGetlistRequest, ISocialTagGetlistResponse } from "./social-tag-getlist.type";

class SocialTagGetlistSvcCaller extends RxAxiosCaller<
  ISocialTagGetlistResponse["data"],
  ISocialTagGetlistRequest,
  ISocialTagGetlistResponse
> {
  constructor() {
    super(API_SOCIAL_TAG_ROUTERS.GET.SOCIAL_TAG_GETLIST, "GET", (raw) => raw.data);
  }
}

export const socialTagGetlistSvcCaller = new SocialTagGetlistSvcCaller();
