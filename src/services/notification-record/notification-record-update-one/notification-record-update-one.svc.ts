import { RxAxiosCaller } from "../../api.svc";
import { API_NOTIFICATION_RECORD_ROUTERS } from "../router";
import type { INotificationRecordUpdateOneRequest, INotificationRecordUpdateOneResponse } from "./notification-record-update-one.type";

class NotificationRecordUpdateOneSvcCaller extends RxAxiosCaller<
  INotificationRecordUpdateOneResponse["data"],
  INotificationRecordUpdateOneRequest,
  INotificationRecordUpdateOneResponse
> {
  constructor() {
    super(API_NOTIFICATION_RECORD_ROUTERS.PUT.NOTIFICATION_RECORD_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const notificationRecordUpdateOneSvcCaller = new NotificationRecordUpdateOneSvcCaller();
