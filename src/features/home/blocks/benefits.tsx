import useApi from '@/src/util/http/api.ts';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BenefitCard} from '@/src/features/home/blocks/widgets/Card.tsx';

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
        <BenefitCard data={api.data?.data[0]} />
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
