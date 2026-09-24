import axios from "axios";
import { toast } from "../atoms/toast/toast.svc";
import {
  type TApiToastConfig,
  type TApiToastEvent,
  type TApiToastEventConfig,
} from "./type";

const PATH_PARAM_REGEX = /\{([^}]+)\}/g;
const DEFAULT_API_TOAST_CONFIG: TApiToastConfig = "fail";

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export const isApiRequestCanceled = (error: unknown): boolean => {
  return axios.isCancel(error);
}

export const getMessageFromValue = (value: unknown): string | undefined => {
  if (!isRecord(value)) return undefined;

  return typeof value.message === "string" ? value.message : undefined;
}

export const getErrorMessage = (error: unknown, fallback = "Error call api"): string => {
  if (axios.isAxiosError(error)) {
    return getMessageFromValue(error.response?.data) ?? error.message ?? fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}

export const getToastEventConfig = (
  config: TApiToastConfig,
  event: TApiToastEvent,
): TApiToastEventConfig | undefined => {
  if (config === false) return undefined;
  if (config === true || config === "all") return true;
  if (config === event) return true;
  if (typeof config === "string") return undefined;

  return config[event];
}

export const buildEndpoint = <TVariables,>(endpoint: string, variables?: TVariables) => {
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

export const showApiResultToast = (
  event: TApiToastEvent,
  fallbackMessage: string,
  toastConfig?: TApiToastConfig,
  callerToastConfig?: TApiToastConfig,
): void => {
  const resolvedToastConfig = toastConfig ?? callerToastConfig ?? DEFAULT_API_TOAST_CONFIG;
  const eventConfig = getToastEventConfig(resolvedToastConfig, event);

  if (!eventConfig) return;

  if (eventConfig === true) {
    if (event === "success") toast.success(fallbackMessage);
    else toast.error(fallbackMessage);
    return;
  }

  if (typeof eventConfig === "string") {
    if (event === "success") toast.success(eventConfig);
    else toast.error(eventConfig);
    return;
  }

  const { message, ...options } = eventConfig;

  if (event === "success") toast.success(message ?? fallbackMessage, options);
  else toast.error(message ?? fallbackMessage, options);
}
