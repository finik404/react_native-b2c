import React from 'react';
import useApi from '@/src/util/http/api';
import {BenefitCard} from '@/src/features/home/blocks/benefits/widgets/Card';
import {HomeItems} from '@/src/features/home/widgets/Items';

// # --------------- HomeBenefits --------------- #
export const HomeBenefits = () => {
  const api = useApi();

  React.useEffect(() => {
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/advantages/', 'GET');
    };

    fetchData();
  }, []);

  return (
    <HomeItems<TBenefit>
      items={api.data?.data}
      height={128}
      loading={api.loading}
      child={item => <BenefitCard data={item} />}
    />
  );
};
