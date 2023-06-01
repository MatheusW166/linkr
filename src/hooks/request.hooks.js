import { useCallback, useEffect, useState } from 'react';

export function useRequest(promise) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const refresh = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(true);
    promise()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [promise]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    loading,
    error,
    data,
    setData,
    refresh,
  };
}

export function useMutation(promise) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const mutate = useCallback(
    ({ onError, onSuccess, ...props }) => {
      setData(null);
      setError(null);
      setLoading(true);
      promise(props)
        .then((res) => {
          setData(res);
          if (onSuccess) onSuccess(res);
        })
        .catch((err) => {
          setError(err);
          if (onError) onError(err);
        })
        .finally(() => setLoading(false));
    },
    [promise],
  );

  return {
    loading,
    error,
    data,
    mutate,
  };
}
