import useApi from '@/src/util/http/api';
import React from 'react';
import {BenefitCard} from '@/src/features/home/blocks/benefits/widgets/Card';
import {HomeItems} from "@/src/features/home/widgets/Items";

export const HomeBenefits = () => {
  const api = useApi();

  React.useEffect(() => {
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/advantages/', 'GET');
    };

    fetchData();
  }, []);

  return (
    <HomeItems
      items={api.data?.data}
      height={128}
      child={item => <BenefitCard data={item} />}
    />
  );
};
