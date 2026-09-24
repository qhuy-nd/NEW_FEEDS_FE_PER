import { RxAxiosCaller } from "../../api.svc";
import { API_USER_NOTE_ROUTERS } from "../router";
import type { IUserNoteGetlistRequest, IUserNoteGetlistResponse } from "./user-note-getlist.type";

class UserNoteGetlistSvcCaller extends RxAxiosCaller<
  IUserNoteGetlistResponse["data"],
  IUserNoteGetlistRequest,
  IUserNoteGetlistResponse
> {
  constructor() {
    super(API_USER_NOTE_ROUTERS.GET.USER_NOTE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userNoteGetlistSvcCaller = new UserNoteGetlistSvcCaller();
