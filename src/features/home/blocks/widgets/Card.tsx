import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {UIImage} from '@/src/common/widgets/Image.tsx';
import RenderHTML from 'react-native-render-html';
import {TColors, opacity} from '@/src/util/constants/colors/_exports';

export const BenefitCard = data => {
  return (
    <View style={ss.content}>
      <UIImage style={ss.img} image={data.data?.attributes?.image} width={26} />
      <RenderHTML
        baseStyle={ss.text}
        source={{html: data?.data?.attributes?.text}}
      />
    </View>
  );
};

const ss = StyleSheet.create({
  img: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
  content: {
    width: 184,
    borderRadius: 10,
    borderColor: opacity(TColors.primary, 20),
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
