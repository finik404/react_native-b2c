import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {UIImage} from '@/src/common/widgets/Image.tsx';
import {TColors, opacity} from '@/src/util/constants/colors/_exports';

export const BrandCard = data => {
  return (
    <TouchableOpacity style={ss.card} onPress={() => console.log('press')}>
      <UIImage style={ss.img} image={data.data?.attributes?.main_page?.image} />
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  img: {
    objectFit: 'contain',
    width: 96,
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
