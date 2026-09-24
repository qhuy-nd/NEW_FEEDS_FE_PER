import axios, { type AxiosRequestConfig } from 'axios'
import { getSession } from 'next-auth/react'
import qs from 'qs'
import { API_AUTH_ROUTERS } from './auth/router'
import type { IRefreshTokenData, IResponseRefreshToken } from './auth/refresh-token/refresh-token.type'
import { clearAuthTokens, getStoredAuthTokens, saveAuthTokens } from './auth/token'

type RetryableRequestConfig = AxiosRequestConfig & {
  _retry?: boolean;
}

const externalBackendBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const clientBackendBaseURL = process.env.NEXT_PUBLIC_API_CLIENT_BASE_URL || '/api/backend'
const backendBaseURL = typeof window === 'undefined' ? externalBackendBaseURL : clientBackendBaseURL
const nextAuthBaseURL = '/api'

const axiosInstance = axios.create({
  baseURL: backendBaseURL,
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params)
  },
})

const refreshAxiosInstance = axios.create({
  baseURL: backendBaseURL,
  withCredentials: true,
})

export const nextAuthAxiosInstance = axios.create({
  baseURL: nextAuthBaseURL,
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params)
  },
})

axiosInstance.defaults.headers['Accept'] = 'application/json'
axiosInstance.defaults.headers['X-Tenant-Id'] = process.env.NEXT_PUBLIC_TENANT_ID || ''
refreshAxiosInstance.defaults.headers['Accept'] = 'application/json'
nextAuthAxiosInstance.defaults.headers['Accept'] = 'application/json'

let refreshTokenPromise: Promise<IRefreshTokenData> | null = null

const parseRefreshTokenResponse = (raw: IResponseRefreshToken): IRefreshTokenData => {
  return {
    accessToken: raw.data?.accessToken ?? raw.accessToken ?? raw.token ?? '',
    refreshToken: raw.data?.refreshToken ?? raw.refreshToken ?? '',
  }
}

const refreshAccessToken = (refreshToken: string) => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = refreshAxiosInstance
      .post<IResponseRefreshToken>(API_AUTH_ROUTERS.POST.REFRESH_TOKEN, { refresh_token: refreshToken })
      .then((response) => {
        const parsed = parseRefreshTokenResponse(response.data)

        if (!parsed.accessToken) {
          throw new Error('No access token returned from refresh token')
        }

        return parsed
      })
      .finally(() => {
        refreshTokenPromise = null
      })
  }

  return refreshTokenPromise
}

const getSessionAuthTokens = async () => {
  if (typeof window === 'undefined') return null

  const session = await getSession()
  const accessToken = session?.accessToken ?? session?.user?.accessToken
  const refreshToken = session?.refreshToken ?? session?.user?.refreshToken

  if (!accessToken) return null

  return {
    accessToken,
    refreshToken,
  }
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const storedTokens = getStoredAuthTokens()
    const sessionTokens = storedTokens ? null : await getSessionAuthTokens()
    const token = storedTokens?.accessToken ?? sessionTokens?.accessToken

    if (sessionTokens) {
      saveAuthTokens(sessionTokens)
    }

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined
    const authRoutes = Object.values(API_AUTH_ROUTERS).flatMap((routes) => Object.values(routes))
    const isAuthRequest = authRoutes.some((route) => originalRequest?.url?.includes(route))

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthRequest) {
      originalRequest._retry = true

      const refreshToken = getStoredAuthTokens()?.refreshToken

      try {
        if (!refreshToken) throw new Error('No refresh token available')

        const res = await refreshAccessToken(refreshToken)

        if (res.accessToken) {
          saveAuthTokens({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken || refreshToken,
          })
          originalRequest.headers = originalRequest.headers ?? {}
          originalRequest.headers.Authorization = `Bearer ${res.accessToken}`
        }

        return axiosInstance(originalRequest)
      } catch (refreshError) {
        clearAuthTokens()
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
