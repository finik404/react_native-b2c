import React from 'react';
import {HomeItems} from '@/src/features/home/widgets/Items';
import {CategoryCard} from '@/src/features/home/blocks/categories/widgets/Card';

// # --------------- HomeCategories --------------- #
export const HomeCategories = () => {
  return (
    <HomeItems<TCategory>
      title={'Популярные категории'}
      url="/include/mainpage/popular-category/"
      height={192}
      child={item => <CategoryCard data={item} />}
    />
  );
};
