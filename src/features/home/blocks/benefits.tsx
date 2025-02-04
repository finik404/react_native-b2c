import useApi from '@/src/util/http/api.ts';
import React from 'react';
import {Text, View} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

export const HomeBenefits = () => {
  const api = useApi();

  React.useEffect(() => {
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/advantages/', 'GET');
    };

    fetchData();
  }, []);

  return (
    <SkeletonContent
      containerStyle={{flex: 1, width: 300}}
      isLoading={false}
      layout={[
        {key: 'someId', width: 220, height: 20, marginBottom: 6},
        {key: 'someOtherId', width: 180, height: 20, marginBottom: 6},
      ]}>
      <Text style={styles.normalText}>Your content</Text>
      <Text style={styles.bigText}>Other content</Text>
    </SkeletonContent>
  );
};


// <UIList
//   items={api.data?.data}
//   height={128}
//   child={item => <BenefitCard data={item} />}
// />
