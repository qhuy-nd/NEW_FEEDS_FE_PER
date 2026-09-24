import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { ToastOptions } from '../atoms/toast/type'

export type TApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: unknown }

export type TApiDefaultRes = {
  code?: number
  message?: string
  status: 'idle' | 'loading' | 'success' | 'error' | 'aborted'
}

export type THttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type TApiToastEventConfig =
  | boolean
  | string
  | (Omit<ToastOptions, 'variant'> & { message?: string })

export type TApiToastConfig =
  | boolean
  | 'fail'
  | 'success'
  | 'all'
  | {
      success?: TApiToastEventConfig
      fail?: TApiToastEventConfig
    }

export type TApiToastEvent = 'success' | 'fail'

export type TApiRequestConfig = AxiosRequestConfig & {
  toast?: TApiToastConfig
}

export type TApiCallerConfig = {
  toast?: TApiToastConfig
  instance?: AxiosInstance
}

/**
 * Extract the return type of the execute method from an API caller
 * @template T - The type of the API caller
 * @returns The return type of the execute method, or never if not applicable 
 * Example:
 * type MyApiCaller = {
 *   execute: (params: { id: number }) => Promise<{ data: string }>
 * }
 * type ResultType = TApiMethod<MyApiCaller> // ResultType is { data: string }
 */
export type TApiMethod<T> = T extends {
  execute: (...args: unknown[]) => Promise<infer R>
}
  ? R
  : never

export type TApiResult<TVal = unknown> = TApiDefaultRes & {
  data?: TVal
}
