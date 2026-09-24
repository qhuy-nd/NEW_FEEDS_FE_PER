import { RxAxiosCaller } from "../../api.svc";
import { API_USER_NOTE_ROUTERS } from "../router";
import type { IUserNoteGetRequest, IUserNoteGetResponse } from "./user-note-get.type";

class UserNoteGetSvcCaller extends RxAxiosCaller<
  IUserNoteGetResponse["data"],
  IUserNoteGetRequest,
  IUserNoteGetResponse
> {
  constructor() {
    super(API_USER_NOTE_ROUTERS.GET.USER_NOTE_GET, "GET", (raw) => raw.data);
  }
}

export const userNoteGetSvcCaller = new UserNoteGetSvcCaller();
