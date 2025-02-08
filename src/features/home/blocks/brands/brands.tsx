import React from 'react';
import {BrandCard} from '@/src/features/home/blocks/brands/widgets/Card';
import {HomeItems} from '@/src/features/home/widgets/Items';

// # --------------- HomeBrands --------------- #
export const HomeBrands = () => {
  return (
    <HomeItems<TBrand>
      title={'Популярные бренды'}
      url="/include/mainpage/brands/"
      height={104}
      child={item => <BrandCard data={item} />}
    />
  );
};
