import React from 'react';
import {apiUrl} from '@/src/util/constants/privates';

const useApi = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const fetchData = React.useCallback(
    async (endpoint, method = 'GET', body = null) => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const url = `${apiUrl}${endpoint}`;
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (
          body &&
          (method === 'POST' || method === 'PUT' || method === 'PATCH')
        ) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {fetchData, loading, error, data};
};

export default useApi;
