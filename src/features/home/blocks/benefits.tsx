import useApi from '@/src/util/http/api.ts';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BenefitCard} from '@/src/features/home/blocks/widgets/Card.tsx';
import {UIList} from '@/src/common/widgets/List.tsx';

export const HomeBenefits = () => {
  const api = useApi();

  React.useEffect(() => {
    console.log('api.data');
    const fetchData = async () => {
      await api.fetchData('/include/mainpage/advantages/', 'GET');
      console.log('api.data?.data');
      console.log(api.data?.data[0]);
    };

    fetchData();
  }, []);

  return (
    <View style={[ss.container]}>
      <View style={ss.content}>
        <UIList
          items={api.data?.data}
          child={item => <BenefitCard data={item} />}
        />
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  container: {
  },
  content: {
    height: 128,
  },
});
