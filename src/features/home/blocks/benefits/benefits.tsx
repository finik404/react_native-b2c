import React from 'react';
import {BenefitCard} from '@/src/features/home/blocks/benefits/widgets/Card';
import {HomeItems} from '@/src/features/home/widgets/Items';

// # --------------- HomeBenefits --------------- #
export const HomeBenefits = () => {
  return (
    <HomeItems<TBenefit>
      url="/include/mainpage/advantages/"
      height={128}
      child={item => <BenefitCard data={item} />}
    />
  );
};
