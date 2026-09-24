import { RxAxiosCaller } from "../../api.svc";
import { API_USER_NOTE_ROUTERS } from "../router";
import type { IUserNoteCreateOneRequest, IUserNoteCreateOneResponse } from "./user-note-create-one.type";

class UserNoteCreateOneSvcCaller extends RxAxiosCaller<
  IUserNoteCreateOneResponse["data"],
  IUserNoteCreateOneRequest,
  IUserNoteCreateOneResponse
> {
  constructor() {
    super(API_USER_NOTE_ROUTERS.POST.USER_NOTE_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const userNoteCreateOneSvcCaller = new UserNoteCreateOneSvcCaller();
