import { BehaviorSubject } from "rxjs";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { TApiResult, THttpMethod } from "./type";
import axiosInstance from "./axios-instance";

const PATH_PARAM_REGEX = /\{([^}]+)\}/g;

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

const buildEndpoint = <TVariables,>(endpoint: string, variables?: TVariables) => {
  const pathParamKeys = new Set<string>();

  const url = endpoint.replace(PATH_PARAM_REGEX, (_, key: string) => {
    pathParamKeys.add(key);

    if (!isRecord(variables) || variables[key] === undefined || variables[key] === null) {
      throw new Error(`Missing path param: ${key}`);
    }

    return encodeURIComponent(String(variables[key]));
  });

  if (!pathParamKeys.size || !isRecord(variables)) {
    return { url, variables };
  }

  const remainingVariables = Object.fromEntries(
    Object.entries(variables).filter(([key]) => !pathParamKeys.has(key))
  );

  return {
    url,
    variables: Object.keys(remainingVariables).length ? remainingVariables as TVariables : undefined
  };
}

export class RxAxiosCaller<
  TData,
  TVariables = Record<string, unknown> | undefined,
  TRawResponse = unknown
> {
  private subject = new BehaviorSubject<TApiResult<TData>>({ status: "idle" });
  private abortController: AbortController | null = null;
  private instance: AxiosInstance = axiosInstance;

  constructor(

    private endpoint: string,
    private method: THttpMethod = "GET",
    private parser?: (raw: TRawResponse) => TData,
  ) { }

  get result$() {
    return this.subject.asObservable();
  }

  getResult(): TApiResult<TData> {
    return this.subject.getValue();
  }

  protected setResult(result: TApiResult<TData>): void {
    this.subject.next(result);
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

  async execute(variables?: TVariables, config?: AxiosRequestConfig): Promise<TData> {
    this.abort()

    this.abortController = new AbortController();

    this.setResult({ status: "loading" });

    try {
      const request = buildEndpoint(this.endpoint, variables);

      const response = await this.instance.request<TRawResponse>({
        url: request.url,
        method: this.method,
        data: this.method !== "GET" ? request.variables : undefined,
        params: this.method === "GET" ? request.variables : undefined,
        ...config,
      });

      this.abortController = null;

      const parsed = this.parser
        ? this.parser(response.data)
        : (response.data as unknown as TData);

      this.setResult({ status: "success", data: parsed });

      return parsed;

    } catch (error) {

      this.setResult({ status: "error", message: 'Error call api' });
      throw error;
    }
  }
}
