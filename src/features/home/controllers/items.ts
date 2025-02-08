import React from 'react';
import useApi from '@/src/util/http/api';

export const useHomeItems = (url: string) => {
  // # --------------- Variables --------------- #
  const api = useApi();

  // # --------------- useEffect --------------- #
  React.useEffect(() => {
    fetch();
  }, []);

  // # --------------- Methods --------------- #

  // fetch ----------------
  const fetch = async () => {
    await api.fetchData(url, 'GET');
  };

  return {items: api?.data?.data, loading: api.loading};
};
