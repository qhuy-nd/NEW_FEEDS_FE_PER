import { RxAxiosCaller } from "../../api.svc";
import { API_USER_NOTE_ROUTERS } from "../router";
import type { IUserNoteDeleteOneRequest, IUserNoteDeleteOneResponse } from "./user-note-delete-one.type";

class UserNoteDeleteOneSvcCaller extends RxAxiosCaller<
  IUserNoteDeleteOneResponse["data"],
  IUserNoteDeleteOneRequest,
  IUserNoteDeleteOneResponse
> {
  constructor() {
    super(API_USER_NOTE_ROUTERS.DELETE.USER_NOTE_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const userNoteDeleteOneSvcCaller = new UserNoteDeleteOneSvcCaller();
