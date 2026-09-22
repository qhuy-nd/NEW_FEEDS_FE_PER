import { useMemo, useSyncExternalStore } from "react";
import type { RxAxiosCaller } from "../../services/api.svc";

export function useApiResult<TData, TVariables = undefined, TRawResponse = unknown>(
  api: RxAxiosCaller<TData, TVariables, TRawResponse>
) {
  const result = useSyncExternalStore(
    (onStoreChange) => {
      let isFirstEmit = true;

      const sub = api.result$.subscribe(() => {
        if (isFirstEmit) {
          isFirstEmit = false;
          return;
        }

        onStoreChange();
      });

      return () => sub.unsubscribe();
    },
    () => api.getResult(),
    () => api.getResult(),
  );
  
  return useMemo(() => ({
    status: result.status,
    data: result.status === "success" ? result.data : null,
    error: result.status === "error" ? result.message : null,
    isLoading: result.status === "loading",
    isSuccess: result.status === "success",
    isError: result.status === "error",
    isIdle: result.status === "idle",
  }), [result]);
}
