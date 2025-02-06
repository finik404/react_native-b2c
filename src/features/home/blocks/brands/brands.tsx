import useApi from '@/src/util/http/api';
import React from 'react';
import {BrandCard} from '@/src/features/home/blocks/brands/widgets/Card';
import {HomeItems} from '@/src/features/home/widgets/Items';

export const HomeBrands = () => {
  const api = useApi();

  React.useEffect(() => {
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/brands/', 'GET');
    };

    fetchData();
  }, []);

  return (
    <HomeItems<TBrand>
      title={'Популярные бренды'}
      items={api.data?.data}
      height={104}
      child={item => <BrandCard data={item} />}
    />
  );
};
