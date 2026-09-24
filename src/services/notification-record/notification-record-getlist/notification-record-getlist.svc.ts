import { RxAxiosCaller } from "../../api.svc";
import { API_NOTIFICATION_RECORD_ROUTERS } from "../router";
import type { INotificationRecordGetlistRequest, INotificationRecordGetlistResponse } from "./notification-record-getlist.type";

class NotificationRecordGetlistSvcCaller extends RxAxiosCaller<
  INotificationRecordGetlistResponse["data"],
  INotificationRecordGetlistRequest,
  INotificationRecordGetlistResponse
> {
  constructor() {
    super(API_NOTIFICATION_RECORD_ROUTERS.GET.NOTIFICATION_RECORD_GETLIST, "GET", (raw) => raw.data);
  }
}

export const notificationRecordGetlistSvcCaller = new NotificationRecordGetlistSvcCaller();
