import React from 'react';
import useApi from '@/src/util/http/api';
import {HomeItems} from '@/src/features/home/widgets/Items';
import {CategoryCard} from '@/src/features/home/blocks/categories/widgets/Card';

// # --------------- HomeCategories --------------- #
export const HomeCategories = () => {
  const api = useApi();

  React.useEffect(() => {
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/popular-category/', 'GET');
    };

    fetchData();
  }, []);

  return (
    <HomeItems<TCategory>
      title={'Популярные категории'}
      items={api.data?.data}
      height={192}
      loading={api.loading}
      child={item => <CategoryCard data={item} />}
    />
  );
};
