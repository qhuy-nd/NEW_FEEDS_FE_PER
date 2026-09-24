import { RxAxiosCaller } from "../../api.svc";
import { API_SOCIAL_EVENT_REGISTRATION_ROUTERS } from "../router";
import type { ISocialEventRegistrationGetlistRequest, ISocialEventRegistrationGetlistResponse } from "./social-event-registration-getlist.type";

class SocialEventRegistrationGetlistSvcCaller extends RxAxiosCaller<
  ISocialEventRegistrationGetlistResponse["data"],
  ISocialEventRegistrationGetlistRequest,
  ISocialEventRegistrationGetlistResponse
> {
  constructor() {
    super(API_SOCIAL_EVENT_REGISTRATION_ROUTERS.GET.SOCIAL_EVENT_REGISTRATION_GETLIST, "GET", (raw) => raw.data);
  }
}

export const socialEventRegistrationGetlistSvcCaller = new SocialEventRegistrationGetlistSvcCaller();
