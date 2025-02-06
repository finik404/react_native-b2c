import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {UIImage} from '@/src/common/widgets/Image';
import {TColors} from '@/src/util/constants/colors/_exports';
import {UIText} from '@/src/common/widgets/Text';

// # --------------- Props --------------- #
type Props = {
  data: TCategory;
};

// # --------------- CategoryCard --------------- #
export const CategoryCard: React.FC<Props> = ({data}) => {
  return (
    <TouchableOpacity style={ss.card} onPress={() => console.log('press')}>
      <UIImage style={ss.img} image={data.attributes.images.preview} />
      <UIText label={data.attributes.name} />
    </TouchableOpacity>
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({
  img: {
    objectFit: 'contain',
    marginBottom: 12,
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
