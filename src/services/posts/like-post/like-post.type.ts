import type { TApiResult } from "../../type";

export type ILikePostResponse = TApiResult<{
  success: boolean;
  message?: string;
}>

export interface ILikePostRequest {
  id: string;
}
