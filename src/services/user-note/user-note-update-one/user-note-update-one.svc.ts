import { RxAxiosCaller } from "../../api.svc";
import { API_USER_NOTE_ROUTERS } from "../router";
import type { IUserNoteUpdateOneRequest, IUserNoteUpdateOneResponse } from "./user-note-update-one.type";

class UserNoteUpdateOneSvcCaller extends RxAxiosCaller<
  IUserNoteUpdateOneResponse["data"],
  IUserNoteUpdateOneRequest,
  IUserNoteUpdateOneResponse
> {
  constructor() {
    super(API_USER_NOTE_ROUTERS.PUT.USER_NOTE_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const userNoteUpdateOneSvcCaller = new UserNoteUpdateOneSvcCaller();
