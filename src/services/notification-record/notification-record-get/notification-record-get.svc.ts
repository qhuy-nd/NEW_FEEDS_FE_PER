import { RxAxiosCaller } from "../../api.svc";
import { API_NOTIFICATION_RECORD_ROUTERS } from "../router";
import type { INotificationRecordGetRequest, INotificationRecordGetResponse } from "./notification-record-get.type";

class NotificationRecordGetSvcCaller extends RxAxiosCaller<
  INotificationRecordGetResponse["data"],
  INotificationRecordGetRequest,
  INotificationRecordGetResponse
> {
  constructor() {
    super(API_NOTIFICATION_RECORD_ROUTERS.GET.NOTIFICATION_RECORD_GET, "GET", (raw) => raw.data);
  }
}

export const notificationRecordGetSvcCaller = new NotificationRecordGetSvcCaller();
