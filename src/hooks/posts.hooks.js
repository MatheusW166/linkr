import { useEffect, useState } from 'react';
import { searchPosts } from '../services/api/timeline.services';

export default function usePostsPagination(limit = 10) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((cachedPage) => cachedPage + 1);
  };

  const fetch = (override) => {
    if (loading && data) return;
    setLoading(true);
    setError(null);
    searchPosts({ limit, offset: page * limit })
      .then((newData) => {
        if (override) {
          setData(newData);
          return;
        }
        setData([...(data ?? []), ...(newData ?? [])]);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const refresh = () => {
    if (page === 0) {
      fetch(true);
      return;
    }
    setPage(0);
  };

  useEffect(() => fetch(page === 0), [page]);

  return {
    data,
    loading,
    error,
    refresh,
    nextPage,
  };
}
