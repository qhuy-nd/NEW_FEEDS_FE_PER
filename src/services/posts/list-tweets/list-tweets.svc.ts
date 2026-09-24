import { RxAxiosCaller } from "../../api.svc";
import { API_POST_ROUTERS } from "../router";
import { IListTweetsParamsRequest, IListTweetsResponse } from "./list-tweets.type";

class ListTweetsCaller extends RxAxiosCaller<
  IListTweetsResponse,
  IListTweetsParamsRequest['params'],
  IListTweetsResponse> {
  constructor() {
    super(API_POST_ROUTERS.GET.LIST, "GET", (raw) => raw)
  }
}

export const listTweetsCaller = new ListTweetsCaller()
