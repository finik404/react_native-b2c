import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { UIImage } from '@/src/common/widgets/Image';
import { TColors, opacity } from '@/src/util/constants/colors/_exports';
import { UIText } from '@/src/common/widgets/Text';
import { UIClickArea } from '@/src/common/widgets/ClickArea';

// # --------------- Props --------------- #
type Props = {
  data: TPost;
};

// # --------------- PostCard --------------- #
export const PostCard: React.FC<Props> = ({ data }) => {
  return (
    <UIClickArea>
      <View style={ss.card}>
        <UIImage style={ss.img} image={data.attributes.image} height={168} />
        <View style={ss.content}>
          <UIText style={ss.text} label={data.attributes.title} />
          <UIText style={ss.section} label={data.attributes.section_name} />
        </View>
      </View>
    </UIClickArea>
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({
  card: {
    width: 240,
  },
  content: {
    paddingHorizontal: 5,
  },
  img: {
    marginBottom: 20,
    borderRadius: 6,
  },
  text: {
    marginBottom: 10,
    lineHeight: 24,
  },
  section: {
    fontSize: 14,
    color: opacity(TColors.black, 65),
  },
});
