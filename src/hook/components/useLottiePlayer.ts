import { useEffect, useState } from "react";

type TLottieSourceState = {
  url: string;
  data: object | null;
  error: string | null;
}

export function useLottieSource(url: string) {
  const [state, setState] = useState<TLottieSourceState>({
    url: "",
    data: null,
    error: null,
  });

  useEffect(() => {
    let active = true;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: object) => {
        if (!active) return;
        setState({ url, data, error: null });
      })
      .catch((err: Error) => {
        if (!active) return;
        setState({ url, data: null, error: err.message });
      });

    return () => {
      active = false;
    }
  }, [url]);

  const isCurrentUrl = state.url === url;

  return {
    data: isCurrentUrl ? state.data : null,
    loading: !isCurrentUrl,
    error: isCurrentUrl ? state.error : null,
  };
}
