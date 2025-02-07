import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {UIImage} from '@/src/common/widgets/Image';
import {TColors} from '@/src/util/constants/colors/_exports';

// # --------------- Props --------------- #
type Props = {
  data: TBrand;
};

// # --------------- BrandCard --------------- #
export const BrandCard: React.FC<Props> = ({data}) => {
  return (
    <TouchableOpacity style={ss.card} onPress={() => console.log('press')}>
      <UIImage style={ss.img} image={data.attributes.main_page.image} />
    </TouchableOpacity>
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({
  img: {
    objectFit: 'contain',
    width: 100,
  },
  text: {
    fontSize: 16,
  },
  card: {
    width: 184,
    borderRadius: 10,
    paddingHorizontal: 42,
    paddingVertical: 28,
    backgroundColor: TColors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
