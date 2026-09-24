import { RxAxiosCaller } from "../../api.svc";
import { API_SOCIAL_EVENT_REGISTRATION_ROUTERS } from "../router";
import type { ISocialEventRegistrationGetRequest, ISocialEventRegistrationGetResponse } from "./social-event-registration-get.type";

class SocialEventRegistrationGetSvcCaller extends RxAxiosCaller<
  ISocialEventRegistrationGetResponse["data"],
  ISocialEventRegistrationGetRequest,
  ISocialEventRegistrationGetResponse
> {
  constructor() {
    super(API_SOCIAL_EVENT_REGISTRATION_ROUTERS.GET.SOCIAL_EVENT_REGISTRATION_GET, "GET", (raw) => raw.data);
  }
}

export const socialEventRegistrationGetSvcCaller = new SocialEventRegistrationGetSvcCaller();
