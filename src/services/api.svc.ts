import { BehaviorSubject } from "rxjs";
import type { AxiosInstance } from "axios";
import {
  type TApiCallerConfig,
  type TApiRequestConfig,
  type TApiResult,
  type TApiToastConfig,
  type THttpMethod,
} from "./type";
import axiosInstance from "./axios-instance";
import {
  buildEndpoint,
  getErrorMessage,
  getMessageFromValue,
  isApiRequestCanceled,
  showApiResultToast,
} from "./api.utils";

export class RxAxiosCaller<
  TData,
  TVariables = Record<string, unknown> | undefined,
  TRawResponse = unknown
> {
  private subject = new BehaviorSubject<TApiResult<TData>>({ status: "idle" });
  private abortController: AbortController | null = null;
  private instance: AxiosInstance;

  constructor(

    private endpoint: string,
    private method: THttpMethod = "GET",
    private parser?: (raw: TRawResponse) => TData,
    private config: TApiCallerConfig = {},
  ) {
    this.instance = config.instance ?? axiosInstance;
  }

  get result$() {
    return this.subject.asObservable();
  }

  getResult(): TApiResult<TData> {
    return this.subject.getValue();
  }

  protected setResult(result: TApiResult<TData>): void {
    this.subject.next(result);
  }

  protected setSuccessResult(
    data: TData,
    raw?: unknown,
    toastConfig?: TApiToastConfig,
  ): void {
    this.setResult({ status: "success", data });
    showApiResultToast(
      "success",
      getMessageFromValue(raw) ?? "Call api success",
      toastConfig,
      this.config.toast,
    );
  }

  protected setErrorResult(
    error: unknown,
    toastConfig?: TApiToastConfig,
    fallbackMessage = "Error call api",
  ): void {
    const message = getErrorMessage(error, fallbackMessage);

    this.setResult({ status: "error", message });
    showApiResultToast("fail", message, toastConfig, this.config.toast);
  }

  reset(): void {
    this.abort()
    this.setResult({ status: "idle" });
  }

  public abort() {
    if (this.abortController) {
      this.abortController.abort();
      this.setResult({ status: "aborted" });
      this.abortController = null;
    }
  }

  async execute(variables?: TVariables, config?: TApiRequestConfig): Promise<TData> {
    this.abort()

    this.abortController = new AbortController();

    this.setResult({ status: "loading" });

    try {
      const request = buildEndpoint(this.endpoint, variables);
      const { toast: toastConfig, ...axiosConfig } = config ?? {};

      const response = await this.instance.request<TRawResponse>({
        url: request.url,
        method: this.method,
        data: this.method !== "GET" ? request.variables : undefined,
        params: this.method === "GET" ? request.variables : undefined,
        ...axiosConfig,
      });

      this.abortController = null;

      const parsed = this.parser
        ? this.parser(response.data)
        : (response.data as unknown as TData);

      this.setSuccessResult(parsed, response.data, toastConfig);

      return parsed;

    } catch (error) {
      if (isApiRequestCanceled(error)) {
        throw error;
      }

      this.setErrorResult(error, config?.toast);
      throw error;
    }
  }
}
